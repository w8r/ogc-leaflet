const L  = global.L || require('leaflet');
import Support from './Support';
import { warn } from './Util';

let callbacks = 0;

/**
 * @param  {Object} params
 * @return {String}
 */
export function serialize(params) {
  let data = '';

  // params.format = params.format || 'application/json';

  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      let param = params[key];
      let type = Object.prototype.toString.call(param);
      let value;

      if (data.length) {
        data += '&';
      }

      if (type === '[object Array]') {
        value = (Object.prototype.toString.call(param[0]) === '[object Object]') ?
          JSON.stringify(param) : param.join(',');
      } else if (type === '[object Object]') {
        value = JSON.stringify(param);
      } else if (type === '[object Date]') {
        value = param.valueOf();
      } else {
        value = param;
      }

      data += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
  }

  return data;
}

/**
 * @param  {String} proxy
 * @param  {String} url
 * @return {String}
 */
export function applyProxy(proxy, url) {
  if (proxy) {
    return proxy + (/\=$/.test(proxy) ? '' : '?') + encodeURIComponent(url);
  } else return url;
}

/**
 * @param  {Function} callback
 * @param  {*=}       context
 * @param  {Boolean=} text
 * @return {XMLHttpRequest}
 */
function createRequest(callback, context, text = false) {
  let httpRequest = new window.XMLHttpRequest();

  httpRequest.onerror = (e) => {
    httpRequest.onreadystatechange = L.Util.falseFn;

    callback.call(context, {
      error: {
        code: 500,
        message: 'XMLHttpRequest error'
      }
    }, null);
  };

  httpRequest.onreadystatechange = () => {
    let response, error;

    if (httpRequest.readyState === 4) {
      if (text) {
        response = httpRequest.responseText;
        error = null;
      } else {
        try {
          response = JSON.parse(httpRequest.responseText);
        } catch (e) {
          response = null;
          error = {
            code: 500,
            message: 'Could not parse response as JSON. ' +
            'This could also be caused by a CORS or XMLHttpRequest error.',
            content: httpRequest.responseText
          };
        }
      }

      if (!error && response.error) {
        error = response.error;
        response = null;
      }

      httpRequest.onerror = L.Util.falseFn;

      callback.call(context, error, response);
    }
  };

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest}
 */
function xmlHttpPost(url, params, callback, context) {
  let httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('POST', url);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(serialize(params));

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest}
 */
function xmlHttpGet(url, params, callback, context) {
  let httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('GET', url + '?' + serialize(params), true);
  httpRequest.send(null);

  return httpRequest;
}

/**
 * AJAX handlers for CORS (modern browsers) or JSONP (older browsers)
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest|Object}
 */
export function request(url, params, callback, context) {
  let httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  let paramString = serialize(params);
  let requestLength = (url + '?' + paramString).length;

  console.log(url + '?' + paramString);

  // request is less then 2000 characters and the browser supports CORS,
  // make GET request with XMLHttpRequest
  if (requestLength <= 2000 && Support.cors) {
    httpRequest.open('GET', url + '?' + paramString);
    httpRequest.send(null);

  // request is less more then 2000 characters and the browser supports CORS,
  // make POST request with XMLHttpRequest
  } else if (requestLength > 2000 && Support.cors) {
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader(
      'Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(paramString);

  // request is less more then 2000 characters and the browser does not
  // support CORS, make a JSONP request
  } else if (requestLength <= 2000 && !Support.cors) {
    return jsonp(url, params, callback, context);

  // request is longer then 2000 characters and the browser does not
  // support CORS, log a warning
  } else {
    warn('a request to ' + url + ' was longer then 2000 characters and ' +
      'this browser cannot make a cross-domain post request. Please use ' +
      'a proxy http://esri.github.io/esri-leaflet/api-reference/request.html');
    return;
  }

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {Object}
 */
export function jsonp(url, params, callback, context) {
  global._OgcLeafletCallbacks = global._OgcLeafletCallbacks || {};
  let callbackId = 'c' + callbacks;

  params.callback = 'window._EsriLeafletCallbacks.' + callbackId;

  let script = L.DomUtil.create('script', null, document.body);
  script.type = 'text/javascript';
  script.src = url + '?' + serialize(params);
  script.id = callbackId;

  global._EsriLeafletCallbacks[callbackId] = (response) => {
    if (global._EsriLeafletCallbacks[callbackId] !== true) {
      let error;
      let responseType = Object.prototype.toString.call(response);

      if (!(responseType === '[object Object]' ||
        responseType === '[object Array]')) {
        error = {
          error: {
            code: 500,
            message: 'Expected array or object as JSONP response'
          }
        };
        response = null;
      }

      if (!error && response.error) {
        error = response;
        response = null;
      }

      callback.call(context, error, response);
      global._EsriLeafletCallbacks[callbackId] = true;
    }
  };

  callbacks++;

  return {
    id: callbackId,
    url: script.src,
    abort: () => {
      global._EsriLeafletCallbacks._callback[callbackId]({
        code: 0,
        message: 'Request aborted.'
      });
    }
  };
}

export let get = ((Support.cors) ? xmlHttpGet : jsonp);
get.CORS = xmlHttpGet;
get.JSONP = jsonp;

// choose the correct AJAX handler depending on CORS support
// export the Request object to call the different handlers for debugging
export const Request = {
  request,
  get,
  post: xmlHttpPost
};

// always use XMLHttpRequest for posts
export { xmlHttpPost as post };
