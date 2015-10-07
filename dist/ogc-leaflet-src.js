(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ogc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _defaults = require('babel-runtime/helpers/defaults')['default'];

var _interopExportWildcard = require('babel-runtime/helpers/interop-export-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _srcOgc = require('./src/ogc');

_defaults(exports, _interopExportWildcard(_srcOgc, _defaults));

},{"./src/ogc":51,"babel-runtime/helpers/defaults":9,"babel-runtime/helpers/interop-export-wildcard":12}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":18}],7:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],8:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],9:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names")["default"];

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = function (obj, defaults) {
  var keys = _Object$getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    var value = _Object$getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      _Object$defineProperty(obj, key, value);
    }
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/get-own-property-descriptor":4,"babel-runtime/core-js/object/get-own-property-names":5}],10:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":4}],11:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/set-prototype-of":6}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (obj, defaults) {
  var newObj = defaults({}, obj);
  delete newObj["default"];
  return newObj;
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],14:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":31}],15:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":31}],16:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":31,"../../modules/es6.object.get-own-property-descriptor":35}],17:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-names');
module.exports = function getOwnPropertyNames(it){
  return $.getNames(it);
};
},{"../../modules/$":31,"../../modules/es6.object.get-own-property-names":36}],18:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":22,"../../modules/es6.object.set-prototype-of":37}],19:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],20:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":30}],21:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],22:[function(require,module,exports){
var core = module.exports = {version: '1.2.1'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],23:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":19}],24:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":22,"./$.global":28}],25:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],26:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],27:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString  = {}.toString
  , toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":31,"./$.to-iobject":34}],28:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],29:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":21}],30:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],31:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],32:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":22,"./$.def":24,"./$.fails":26}],33:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":31,"./$.an-object":20,"./$.ctx":23,"./$.is-object":30}],34:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":25,"./$.iobject":29}],35:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":32,"./$.to-iobject":34}],36:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./$.object-sap')('getOwnPropertyNames', function(){
  return require('./$.get-names').get;
});
},{"./$.get-names":27,"./$.object-sap":32}],37:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":24,"./$.set-proto":33}],38:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.wms = wms;

var _ServicesWMS = require('../Services/WMS');

var L = global.L || require('leaflet');

var WMS = (function (_L$TileLayer$WMS) {
  _inherits(WMS, _L$TileLayer$WMS);

  function WMS(url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? L.TileLayer.WMS.prototype.options : arguments[1];

    _classCallCheck(this, WMS);

    _get(Object.getPrototypeOf(WMS.prototype), 'constructor', this).call(this, url, options);

    options.url = url;
    this.service = (0, _ServicesWMS.wmsService)(options);
  }

  /**
   * @return {ogc.Tasks.GetFeatureInfo}
   */

  _createClass(WMS, [{
    key: 'identify',
    value: function identify() {
      return this.service.identify().on(this._map) // link to map and pre-set layers
      .layers(this.options.layers);
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {Request}
     */
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this.service.metadata(callback, context);
    }
  }]);

  return WMS;
})(L.TileLayer.WMS);

exports.WMS = WMS;

function wms(url, options) {
  return new WMS(url, options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Services/WMS":42,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],39:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.request = request;
exports.jsonp = jsonp;

var _Support = require('./Support');

var _Support2 = _interopRequireDefault(_Support);

var _Util = require('./Util');

var L = global.L || require('leaflet');

var callbacks = 0;

function serialize(params) {
  var data = '';

  // params.format = params.format || 'application/json';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var param = params[key];
      var type = Object.prototype.toString.call(param);
      var value = undefined;

      if (data.length) {
        data += '&';
      }

      if (type === '[object Array]') {
        value = Object.prototype.toString.call(param[0]) === '[object Object]' ? JSON.stringify(param) : param.join(',');
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

function createRequest(callback, context) {
  var text = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var httpRequest = new window.XMLHttpRequest();

  httpRequest.onerror = function (e) {
    httpRequest.onreadystatechange = L.Util.falseFn;

    callback.call(context, {
      error: {
        code: 500,
        message: 'XMLHttpRequest error'
      }
    }, null);
  };

  httpRequest.onreadystatechange = function () {
    var response = undefined,
        error = undefined;

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
            message: 'Could not parse response as JSON. ' + 'This could also be caused by a CORS or XMLHttpRequest error.',
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

function xmlHttpPost(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('POST', url);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(serialize(params));

  return httpRequest;
}

function xmlHttpGet(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('GET', url + '?' + serialize(params), true);
  httpRequest.send(null);

  return httpRequest;
}

// AJAX handlers for CORS (modern browsers) or JSONP (older browsers)

function request(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  var paramString = serialize(params);
  var requestLength = (url + '?' + paramString).length;

  // request is less then 2000 characters and the browser supports CORS,
  // make GET request with XMLHttpRequest
  if (requestLength <= 2000 && _Support2['default'].cors) {
    httpRequest.open('GET', url + '?' + paramString);
    httpRequest.send(null);

    // request is less more then 2000 characters and the browser supports CORS,
    // make POST request with XMLHttpRequest
  } else if (requestLength > 2000 && _Support2['default'].cors) {
      httpRequest.open('POST', url);
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.send(paramString);

      // request is less more then 2000 characters and the browser does not
      // support CORS, make a JSONP request
    } else if (requestLength <= 2000 && !_Support2['default'].cors) {
        return jsonp(url, params, callback, context);

        // request is longer then 2000 characters and the browser does not
        // support CORS, log a warning
      } else {
          (0, _Util.warn)('a request to ' + url + ' was longer then 2000 characters and ' + 'this browser cannot make a cross-domain post request. Please use ' + 'a proxy http://esri.github.io/esri-leaflet/api-reference/request.html');
          return;
        }

  return httpRequest;
}

function jsonp(url, params, callback, context) {
  global._OgcLeafletCallbacks = global._OgcLeafletCallbacks || {};
  var callbackId = 'c' + callbacks;

  params.callback = 'window._EsriLeafletCallbacks.' + callbackId;

  var script = L.DomUtil.create('script', null, document.body);
  script.type = 'text/javascript';
  script.src = url + '?' + serialize(params);
  script.id = callbackId;

  global._EsriLeafletCallbacks[callbackId] = function (response) {
    if (global._EsriLeafletCallbacks[callbackId] !== true) {
      var error = undefined;
      var responseType = Object.prototype.toString.call(response);

      if (!(responseType === '[object Object]' || responseType === '[object Array]')) {
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
    abort: function abort() {
      global._EsriLeafletCallbacks._callback[callbackId]({
        code: 0,
        message: 'Request aborted.'
      });
    }
  };
}

var get = _Support2['default'].cors ? xmlHttpGet : jsonp;
get.CORS = xmlHttpGet;
get.JSONP = jsonp;

// choose the correct AJAX handler depending on CORS support
// export the Request object to call the different handlers for debugging
var Request = {
  request: request,
  get: get,
  post: xmlHttpPost
};

exports.Request = Request;
// always use XMLHttpRequest for posts
exports.post = xmlHttpPost;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Support":43,"./Util":50,"babel-runtime/helpers/interop-require-default":13,"leaflet":"leaflet"}],40:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.service = service;

var _Support = require('../Support');

var _Util = require('../Util');

var _Request = require('../Request');

var L = global.L || require('leaflet');

var Service = (function () {
  function Service() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Service);

    this.options = {
      proxy: false,
      useCors: _Support.cors
    };

    options = options || {};
    this._requestQueue = [];
    this._authenticating = false;
    L.Util.setOptions(this, options);
    this.options.url = (0, _Util.cleanUrl)(this.options.url);
  }

  _createClass(Service, [{
    key: 'get',
    value: function get(path, params, callback, context) {
      return this._request('get', path, params, callback, context);
    }
  }, {
    key: 'post',
    value: function post(path, params, callback, context) {
      return this._request('post', path, params, callback, context);
    }
  }, {
    key: 'request',
    value: function request(path, params, callback, context) {
      return this._request('request', path, params, callback, context);
    }
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this._request('get', '', {}, callback, context);
    }
  }, {
    key: 'authenticate',
    value: function authenticate(token) {
      this._authenticating = false;
      this.options.token = token;
      this._runQueue();
      return this;
    }
  }, {
    key: '_request',
    value: function _request(method, path, params, callback, context) {
      this.fire('requeststart', {
        url: this.options.url + path,
        params: params,
        method: method
      }, true);

      var wrappedCallback = this._createServiceCallback(method, path, params, callback, context);

      if (this.options.token) {
        params.token = this.options.token;
      }

      if (this._authenticating) {
        this._requestQueue.push([method, path, params, callback, context]);
        return;
      } else {
        var url = this.options.proxy ? this.options.proxy + '?' + this.options.url + path : this.options.url + path;

        if ((method === 'get' || method === 'request') && !this.options.useCors) {
          return _Request.Request.get.JSONP(url, params, wrappedCallback);
        } else {
          return _Request.Request[method](url, params, wrappedCallback);
        }
      }
    }
  }, {
    key: '_createServiceCallback',
    value: function _createServiceCallback(method, path, params, callback, context) {
      return L.Util.bind(function (error, response) {
        if (error && (error.code === 499 || error.code === 498)) {
          this._authenticating = true;

          this._requestQueue.push([method, path, params, callback, context]);

          // fire an event for users to handle and re-authenticate
          this.fire('authenticationrequired', {
            authenticate: L.Util.bind(this.authenticate, this)
          }, true);

          // if the user has access to a callback they can handle the auth error
          error.authenticate = L.Util.bind(this.authenticate, this);
        }

        callback.call(context, error, response);

        if (error) {
          this.fire('requesterror', {
            url: this.options.url + path,
            params: params,
            message: error.message,
            code: error.code,
            method: method
          }, true);
        } else {
          this.fire('requestsuccess', {
            url: this.options.url + path,
            params: params,
            response: response,
            method: method
          }, true);
        }

        this.fire('requestend', {
          url: this.options.url + path,
          params: params,
          method: method
        }, true);
      }, this);
    }
  }, {
    key: '_runQueue',
    value: function _runQueue() {
      for (var i = this._requestQueue.length - 1; i >= 0; i--) {
        var request = this._requestQueue[i];
        var method = request.shift();
        this[method].apply(this, request);
      }
      this._requestQueue = [];
    }
  }]);

  return Service;
})();

exports.Service = Service;

_Object$getOwnPropertyNames(L.Mixin.Events).forEach(function (name) {
  if (name !== "constructor") {
    _Object$defineProperty(Service.prototype, name, _Object$getOwnPropertyDescriptor(L.Mixin.Events, name));
  }
});

function service(options) {
  return new Service(options);
}

exports['default'] = service;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Request":39,"../Support":43,"../Util":50,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/get-own-property-descriptor":4,"babel-runtime/core-js/object/get-own-property-names":5,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"leaflet":"leaflet"}],41:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.wfsService = wfsService;

var _Service2 = require('./Service');

var _TasksGetFeature = require('../Tasks/GetFeature');

var _TasksGetCapabilities = require('../Tasks/GetCapabilities');

var _TasksDescribeFeatureType = require('../Tasks/DescribeFeatureType');

/**
 * @class ogc.Services.WFS
 * @extends {ogc.Services.Service}
 */
var L = global.L || require('leaflet');

var WFSService = (function (_Service) {
  _inherits(WFSService, _Service);

  /**
   * @param  {Object} options
   */

  function WFSService(options) {
    _classCallCheck(this, WFSService);

    _get(Object.getPrototypeOf(WFSService.prototype), 'constructor', this).call(this, options);
  }

  /**
   * @return {ogc.Tasks.GetFeature}
   */

  _createClass(WFSService, [{
    key: 'getFeature',
    value: function getFeature() {
      return (0, _TasksGetFeature.getFeature)(this);
    }

    /**
     * @return {ogc.Tasks.DescribeFeatureType}
     */
  }, {
    key: 'describeFeatureType',
    value: function describeFeatureType() {
      return (0, _TasksDescribeFeatureType.describeFeatureType)(this);
    }
  }]);

  return WFSService;
})(_Service2.Service);

exports.WFSService = WFSService;

function wfsService(options) {
  return new WFSService(options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Tasks/DescribeFeatureType":44,"../Tasks/GetCapabilities":45,"../Tasks/GetFeature":46,"./Service":40,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],42:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.wmsService = wmsService;

var _Service2 = require('./Service');

var _TasksGetCapabilities = require("../Tasks/GetCapabilities");

var _TasksGetFeatureInfo = require("../Tasks/GetFeatureInfo");

var _TasksGetLegendGraphic = require("../Tasks/GetLegendGraphic");

/**
 * @class OgcLeaflet.Services.WMSService
 * @extends {OgcLeaflet.Services.Service}
 */
var L = global.L || require('leaflet');

var WMSService = (function (_Service) {
  _inherits(WMSService, _Service);

  /**
   * @param  {Object} options
   */

  function WMSService(options) {
    _classCallCheck(this, WMSService);

    _get(Object.getPrototypeOf(WMSService.prototype), 'constructor', this).call(this, options);
  }

  /**
   * @return {OgcLeaflet.Tasks.GetCapabilities}
   */

  _createClass(WMSService, [{
    key: 'getCapabilities',
    value: function getCapabilities() {
      return (0, _TasksGetCapabilities.getCapabilities)(this);
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {GetCapabilites}
     */
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this.getCapabilities().run(callback, context);
    }

    /**
     * @return {OgcLeaflet.Tasks.GetCapabilities}
     */
  }, {
    key: 'getFeatureInfo',
    value: function getFeatureInfo() {
      return (0, _TasksGetFeatureInfo.getFeatureInfo)(this);
    }

    // alias
  }, {
    key: 'identify',
    value: function identify() {
      return this.getFeatureInfo();
    }

    /**
     * @return {OgcLeaflet.Tasks.GetLegendGraphic}
     */
  }, {
    key: 'getLegendGraphic',
    value: function getLegendGraphic() {
      return (0, _TasksGetLegendGraphic.getLegendGraphic)(this);
    }

    // alias
  }, {
    key: 'legend',
    value: function legend() {
      return this.getLegendGraphic();
    }
  }]);

  return WMSService;
})(_Service2.Service);

exports.WMSService = WMSService;

function wmsService(options) {
  return new WMSService(options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Tasks/GetCapabilities":45,"../Tasks/GetFeatureInfo":47,"../Tasks/GetLegendGraphic":48,"./Service":40,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var cors = window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest();
exports.cors = cors;
var pointerEvents = document.documentElement.style.pointerEvents === '';

exports.pointerEvents = pointerEvents;
var Support = {
  cors: cors,
  pointerEvents: pointerEvents
};

exports.Support = Support;
exports['default'] = Support;

},{}],44:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.describeFeatureType = describeFeatureType;

var _Task2 = require('./Task');

/**
 * @class OgcLeaflet.Tasks.DescribeFeatureType
 * @extends {OgcLeaflet.Tasks.Task}
 */
var L = global.L || require('leaflet');

var DescribeFeatureType = (function (_Task) {
  _inherits(DescribeFeatureType, _Task);

  /**
   * @param  {Object|String} endpoint
   */

  function DescribeFeatureType(endpoint) {
    _classCallCheck(this, DescribeFeatureType);

    _get(Object.getPrototypeOf(DescribeFeatureType.prototype), 'constructor', this).call(this, endpoint);
    L.Util.extend(this.params, {
      service: 'WFS',
      request: 'DescribeFeatureType'
    });
  }

  /**
   * @param  {Array.<String>|String}  layers
   * @return {DescribeFeatureType}
   */

  _createClass(DescribeFeatureType, [{
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.typeNames = _layers;
      return this;
    }
  }]);

  return DescribeFeatureType;
})(_Task2.Task);

exports.DescribeFeatureType = DescribeFeatureType;

function describeFeatureType(endpoint) {
  return new DescribeFeatureType(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Task":49,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],45:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getCapabilities = getCapabilities;

var _Task2 = require('./Task');

/**
 * @class OgcLeaflet.Tasks.GetCapabilities
 * @extends {OgcLeaflet.Tasks.Task}
 */

var GetCapabilities = (function (_Task) {
  _inherits(GetCapabilities, _Task);

  /**
   * @param  {Object|String} endpoint
   */

  function GetCapabilities(endpoint) {
    _classCallCheck(this, GetCapabilities);

    _get(Object.getPrototypeOf(GetCapabilities.prototype), 'constructor', this).call(this, endpoint);

    L.Util.extend(this.params, {
      request: 'GetCapabilities',
      f: 'text'
    });

    if (this._service) {
      this.service(this._service.options.type);
    }
  }

  /**
   * @param  {String} type
   * @return {GetCapabilities}
   */

  _createClass(GetCapabilities, [{
    key: 'service',
    value: function service() {
      var type = arguments.length <= 0 || arguments[0] === undefined ? 'WMS' : arguments[0];

      this.params.service = type;
      return this;
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {GetCapabilites}
     */
  }, {
    key: 'run',
    value: function run(callback, context) {
      return _get(Object.getPrototypeOf(GetCapabilities.prototype), 'request', this).call(this, function (error, text) {
        // parse capabilities here
        // if (!error) { text = this._parseCapabilities(text); }
        callback.call(context, error, text);
      }, context);
    }
  }]);

  return GetCapabilities;
})(_Task2.Task);

exports.GetCapabilities = GetCapabilities;

function getCapabilities(endpoint) {
  return new GetCapabilities(endpoint);
}

},{"./Task":49,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11}],46:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getFeature = getFeature;

var _Task2 = require('./Task');

var _Util = require('../Util');

/**
 * @class OgcLeaflet.Tasks.GetFeature
 */
var L = global.L || require('leaflet');

var GetFeature = (function (_Task) {
  _inherits(GetFeature, _Task);

  /**
   * @param  {String|Service} endpoint
   */

  function GetFeature(endpoint) {
    _classCallCheck(this, GetFeature);

    _get(Object.getPrototypeOf(GetFeature.prototype), 'constructor', this).call(this, endpoint);

    /**
     * @type {Object}
     */
    L.Util.extend(this.params, {
      srsName: 'EPSG:4326',
      request: 'GetFeature',
      info_format: 'application/json'
    });

    if (this._service && this._service.options) {
      this.version(endpoint.options.version);
    }
  }

  /**
   * @param  {String} version
   * @return {GetFeature}
   */

  _createClass(GetFeature, [{
    key: 'version',
    value: function version() {
      var _version = arguments.length <= 0 || arguments[0] === undefined ? '2.0.0' : arguments[0];

      this.params.version = _version;
      return this;
    }

    /**
     * @param  {Number} max
     * @return {GetFeature}
     */
  }, {
    key: 'limit',
    value: function limit() {
      var max = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (max) {
        this[parseFloat(this.params.version) >= 2 ? 'count' : 'maxFeatures'] = max;
      }
      return this;
    }

    /**
     * @param  {String} srs
     * @return {GetFeature}
     */
  }, {
    key: 'srs',
    value: function srs(_srs) {
      this.params.srsName = _srs;
      return this;
    }

    /**
     * @param  {String} srs
     * @return {GetFeature}
     */
  }, {
    key: 'sr',
    value: function sr(srs) {
      return this.srs(srs);
    }

    /**
     * @param  {Array.<String>|String}  layers
     * @return {GetFeature}
     */
  }, {
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.typeNames = _layers;
      return this;
    }

    /**
     * @param  {String}   attribute
     * @param  {Boolean=} descending
     * @return {GetFeature}
     */
  }, {
    key: 'sortBy',
    value: function sortBy(attribute) {
      var descending = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      this.params.sortBy = attribute;
      if (descending) {
        this.params.sortBy += '+D';
      }
      return this;
    }

    /**
     * @param  {String|Array.<String>} property
     * @return {GetFeature}
     */
  }, {
    key: 'property',
    value: function property(_property) {
      if (L.Util.isArray(_property)) {
        _property = _property.join(',');
      }
      this.params.propertyName = _property;
      return this;
    }

    /**
     * @param  {String|Array.<String>} fields
     * @return {GetFeature}
     */
  }, {
    key: 'fields',
    value: function fields(_fields) {
      return this.property(_fields);
    }

    /**
     * @param  {L.LatLngBounds|L.Bounds} bounds
     * @return {GetFeature}
     */
  }, {
    key: 'bounds',
    value: function bounds(_bounds) {
      return this.bbox((0, _Util.boundsToBBox)(_bounds));
    }

    /**
     * @param  {Array.<Number>} bbox
     * @return {GetFeature}
     */
  }, {
    key: 'bbox',
    value: function bbox(_bbox) {
      this.params.bbox = _bbox.join(',');
      return this;
    }
  }]);

  return GetFeature;
})(_Task2.Task);

exports.GetFeature = GetFeature;

function getFeature(endpoint) {
  return new GetFeature(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Util":50,"./Task":49,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],47:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getFeatureInfo = getFeatureInfo;

var _Task2 = require('./Task');

var _Util = require('../Util');

var L = global.L || require('leaflet');

var DEFAULT_WMS_VERSION = 1.3;

/**
 * @class ogc.Tasks.GetFeatureInfo
 * @extends {ogc.Tasks.Task}
 */

var GetFeatureInfo = (function (_Task) {
  _inherits(GetFeatureInfo, _Task);

  /**
   * @param  {ObgLeaflet.Services.WMS|String} endpoint
   */

  function GetFeatureInfo(endpoint) {
    _classCallCheck(this, GetFeatureInfo);

    _get(Object.getPrototypeOf(GetFeatureInfo.prototype), 'constructor', this).call(this, endpoint);

    L.Util.extend(this.params, {
      service: 'WMS',
      version: '1.3.0',
      info_format: 'application/json',
      request: 'GetFeatureInfo',
      crs: 'EPSG:4326',
      buffer: 0
    });
  }

  /**
   * @param  {String} srs
   * @return {GetFeatureInfo}
   */

  _createClass(GetFeatureInfo, [{
    key: 'srs',
    value: function srs(_srs) {
      this.params[parseFloat(this.params.version) >= DEFAULT_WMS_VERSION ? 'crs' : 'srs'] = _srs;
      return this;
    }
  }, {
    key: 'crs',
    value: function crs(_crs) {
      return this.srs(_crs);
    }

    /**
     * @param  {L.Map} map
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'on',
    value: function on(map) {
      _get(Object.getPrototypeOf(GetFeatureInfo.prototype), 'on', this).call(this, map);

      this.size(map.getSize());
      this.bbox(this._boundsToBBox(map.getBounds(), map.options.crs));
      this.srs(map.options.crs.code);

      return this;
    }

    /**
     * @param  {L.LatLngBounds} bounds
     * @param  {L.CRS}          crs
     * @return {Array.<Number>}
     */
  }, {
    key: '_boundsToBBox',
    value: function _boundsToBBox(bounds, crs) {
      var nw = crs.project(bounds.getNorthWest());
      var se = crs.project(bounds.getSouthEast());

      if (parseFloat(this.params.version) >= 1.3 && crs === L.CRS.EPSG4326) {
        return [se.y, nw.x, nw.y, se.x];
      } else {
        return [nw.x, se.y, se.x, nw.y];
      }
    }

    /**
     * @param  {L.LatLng} latlng
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'at',
    value: function at(latlng) {
      var px = undefined;
      if (latlng instanceof L.LatLng) {
        if (this._map) {
          // project
          px = this._map.latLngToContainerPoint(latlng);
        } else {
          throw new Error('Cannot project latlng to map pixels');
        }
      } else {
        px = latlng;
      }

      this.params.x = px.x;
      this.params.y = px.y;

      return this;
    }

    /**
     * @param  {Number} tolerance
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'tolerance',
    value: function tolerance() {
      var _tolerance = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this.params.buffer = _tolerance;
      return this;
    }

    /**
     * @param  {Array.<String>|String} layers
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.query_layers = this.params.layers = _layers;
      return this;
    }

    /**
     * @param  {Number} limit
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'limit',
    value: function limit() {
      var _limit = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this.params.feature_count = _limit;
      return this;
    }

    /**
     * @param  {L.Point} size
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'size',
    value: function size(_size) {
      this.params.width = _size.x;
      this.params.height = _size.y;
      return this;
    }

    /**
     * @param  {Array.<String>|String} properties
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'returnProperties',
    value: function returnProperties() {
      var properties = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      this.params.propertyName = L.Util.isArray(properties) ? properties.join(',') : properties;
      return this;
    }

    /**
     * @param  {L.LatLngBounds|L.Bounds} bounds
     * @param  {L.Map=}                  map
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'bounds',
    value: function bounds(_bounds, map) {
      map = map || this._map;
      if (map) {
        return this.bbox(this._boundsToBBox(_bounds, this._map.options.crs));
      } else {
        throw new Error('Cannot project bounds');
      }
    }

    /**
     * @param  {Array.<Number>} bbox
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'bbox',
    value: function bbox(_bbox) {
      this.params.bbox = _bbox.join(',');
      return this;
    }
  }, {
    key: 'run',
    value: function run(callback, context) {
      return this.request(callback, context);
    }
  }]);

  return GetFeatureInfo;
})(_Task2.Task);

exports.GetFeatureInfo = GetFeatureInfo;

function getFeatureInfo(endpoint) {
  return new GetFeatureInfo(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Util":50,"./Task":49,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],48:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getLegendGraphic = getLegendGraphic;

var _Task2 = require('./Task');

/**
 * @class ogc.Tasks.GetLegendGrapic
 * @extends {ogc.Tasks.Task}
 */
var L = global.L || require('leaflet');

var GetLegendGraphic = (function (_Task) {
  _inherits(GetLegendGraphic, _Task);

  /**
   * @param  {ogc.Services.Service|String} endpoint
   */

  function GetLegendGraphic(endpoint) {
    _classCallCheck(this, GetLegendGraphic);

    _get(Object.getPrototypeOf(GetLegendGraphic.prototype), 'constructor', this).call(this, endpoint);

    /**
     * @type {Object}
     */
    this.defaultLegendStyles = {
      fontAntiAliasing: true,
      dpi: 72,
      fontName: 'Helvetica',
      bgColor: '#ffffff',
      fontStyle: 'normal'
    };

    L.Util.extend(this.params, {
      'request': 'GetLegendGraphic',
      'format': 'image/png'
    });
  }

  /**
   * @param  {String} format
   * @return {GetLegendGraphic}
   */

  _createClass(GetLegendGraphic, [{
    key: 'format',
    value: function format(_format) {
      this.params.format = _format;
      return this;
    }

    /**
     * @param  {String} layer
     * @return {GetLegendGraphic}
     */
  }, {
    key: 'layer',
    value: function layer(_layer) {
      this.params.layer = _layer;
      return this;
    }

    /**
     * @static
     * @param  {Object} options
     * @return {String}
     */
  }, {
    key: 'styles',

    /**
     * @param  {Object} styles
     * @return {GetLegendGraphic}
     */
    value: function styles() {
      var _styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this.params.legend_options = this._formatLegendOptions(L.Util.extend({}, this.defaultLegendStyles, _styles));
      return this;
    }
  }], [{
    key: '_formatLegendOptions',
    value: function _formatLegendOptions(options) {
      var paramString = '';
      var params = ['dpi', 'fontAntiAliasing', 'fontName', 'bgColor', 'fontSize', 'fontStyle'];

      for (var i = 0, len = params.length; i < len; i++) {
        var key = params[i];
        if (options.hasOwnProperty(key)) {
          paramString += key + ':' + pairs[key] + ';';
        }
      }
      return paramString;
    }
  }]);

  return GetLegendGraphic;
})(_Task2.Task);

exports.GetLegendGraphic = GetLegendGraphic;

function getLegendGraphic(endpoint) {
  return new GetLegendGraphic(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Task":49,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],49:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.task = task;

var _Support = require('../Support');

var _Util = require('../Util');

var _Request = require('../Request');

var _Request2 = _interopRequireDefault(_Request);

/**
 * @class ogc.Tasks.Task
 */
var L = global.L || require('leaflet');

var Task = (function () {

  /**
   * @param  {ogc.Services.Service|String} endpoint
   */

  function Task(endpoint) {
    _classCallCheck(this, Task);

    this.options = {
      proxy: false,
      useCors: _Support.cors
    };

    this.path = '';

    // endpoint can be either a url (and options) for an
    // OGC Service or an instance of OgcLeaflet.Service
    if (endpoint.request && endpoint.options) {
      this._service = endpoint;
      L.Util.setOptions(this, endpoint.options);
    } else {
      L.Util.setOptions(this, endpoint);
      this.options.url = (0, _Util.cleanUrl)(endpoint.url);
    }

    // clone default params into this object
    this.params = L.Util.extend({}, this.params || {});

    // generate setter methods based on the setters object
    // implimented a child class
    if (this.setters) {
      for (var setter in this.setters) {
        var param = this.setters[setter];
        this[setter] = this.generateSetter(param, this);
      }
    }
  }

  // Generate a method for each methodName:paramName in the setters for this task.

  _createClass(Task, [{
    key: 'generateSetter',
    value: function generateSetter(param, context) {
      return L.Util.bind(function (value) {
        this.params[param] = value;
        return this;
      }, context);
    }
  }, {
    key: 'token',
    value: function token(_token) {
      if (this._service) {
        this._service.authenticate(_token);
      } else {
        this.params.token = _token;
      }
      return this;
    }

    /**
     * @param  {L.Map} map
     * @return {ogc.Tasks.Task}
     */
  }, {
    key: 'on',
    value: function on(map) {
      this._map = map;
      return this;
    }
  }, {
    key: 'request',
    value: function request(callback, context) {
      if (this._service) {
        return this._service.request(this.path, this.params, callback, context);
      }
      return this._request('request', this.path, this.params, callback, context);
    }
  }, {
    key: '_request',
    value: function _request(method, path, params, callback, context) {
      var url = this.options.proxy ? this.options.proxy + '?' + this.options.url + path : this.options.url + path;

      if ((method === 'get' || method === 'request') && !this.options.useCors) {
        return _Request2['default'].get.JSONP(url, params, callback, context);
      }

      return _Request2['default'][method](url, params, callback, context);
    }
  }]);

  return Task;
})();

exports.Task = Task;

function task(options) {
  return new Task(options);
}

exports['default'] = task;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Request":39,"../Support":43,"../Util":50,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/interop-require-default":13,"leaflet":"leaflet"}],50:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.shallowClone = shallowClone;
exports.cleanUrl = cleanUrl;
exports.boundsToBBox = boundsToBBox;
var L = global.L || require('leaflet');

// checks if 2 x,y points are equal
function pointsEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// determine if polygon ring coordinates are clockwise.
// clockwise signifies outer ring, counter-clockwise an inner ring
// or hole. this logic was found at
// http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order
function ringIsClockwise(ringToTest) {
  var total = 0;
  var i = 0;
  var rLength = ringToTest.length;
  var pt1 = ringToTest[i];
  var pt2 = undefined;
  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }
  return total >= 0;
}

// shallow object clone for feature properties and attributes
// from http://jsperf.com/cloning-an-object/2

function shallowClone(obj) {
  var target = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i];
    }
  }
  return target;
}

// trim url whitespace and add a trailing slash if needed

function cleanUrl(url) {
  // trim leading and trailing spaces, but not spaces inside the url
  url = L.Util.trim(url);

  // add a trailing slash to the url if the user omitted it
  if (url[url.length - 1] !== '/') {
    url += '/';
  }

  return url;
}

/**
 * @param  {L.LatLngBounds|L.Bounds} bounds
 * @return {Array.<Number>}
 */

function boundsToBBox(bounds) {
  return bounds._min && bounds._max ? [bounds._min.x, bounds._min.y, bounds._max.x, bounds._max.y] : [bounds._southWest.lng, bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat];
}

var Util = {
  shallowClone: shallowClone,
  cleanUrl: cleanUrl,
  boundsToBBox: boundsToBBox
};

exports.Util = Util;
exports['default'] = Util;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"leaflet":"leaflet"}],51:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// import base

var _Support = require('./Support');

var _Util = require('./Util');

var _Request = require('./Request');

// import tasks

var _TasksTask = require('./Tasks/Task');

var _TasksGetFeature = require('./Tasks/GetFeature');

var _TasksDescribeFeatureType = require('./Tasks/DescribeFeatureType');

var _TasksGetLegendGraphic = require('./Tasks/GetLegendGraphic');

//import { Find, find } from './Tasks/Find';
//import { Identify, identify } from './Tasks/Identify';
//import { IdentifyFeatures, identifyFeatures } from './Tasks/IdentifyFeatures';
//import { IdentifyImage, identifyImage } from './Tasks/IdentifyImage';

// import services

var _ServicesService = require('./Services/Service');

var _ServicesWFS = require('./Services/WFS');

var _ServicesWMS = require('./Services/WMS');

//import { ImageService, imageService } from './Services/ImageService';
//import { FeatureLayerService, featureLayerService } from './Services/FeatureLayerService';

// import layers

var _LayersWMS = require('./Layers/WMS');

//import { TiledMapLayer, tiledMapLayer } from './Layers/TiledMapLayer';
//import { RasterLayer } from './Layers/RasterLayer';
//import { ImageMapLayer, imageMapLayer } from './Layers/ImageMapLayer';
//import { DynamicMapLayer, dynamicMapLayer } from './Layers/DynamicMapLayer';
//import { FeatureGrid } from './Layers/FeatureLayer/FeatureGrid';
//import { FeatureManager } from './Layers/FeatureLayer/FeatureManager';
//import { FeatureLayer, featureLayer } from './Layers/FeatureLayer/FeatureLayer';

var L = global.L || require('leaflet');L.ogc = {
  Service: _ServicesService.Service, service: _ServicesService.service,
  WFSService: _ServicesWFS.WFSService, wfsService: _ServicesWFS.wfsService,
  WMSService: _ServicesWMS.WMSService, wmsService: _ServicesWMS.wmsService,
  Task: _TasksTask.Task, task: _TasksTask.task,
  Util: _Util.Util,
  get: _Request.get, post: _Request.post, request: _Request.request,
  Support: _Support.Support,

  GetCapabilities: _TasksGetFeature.GetCapabilities, getCapabilities: _TasksGetFeature.getCapabilities,
  GetLegendGraphic: _TasksGetLegendGraphic.GetLegendGraphic, getLegendGraphic: _TasksGetLegendGraphic.getLegendGraphic,
  GetFeatureInfo: _TasksGetFeature.GetFeatureInfo, getFeatureInfo: _TasksGetFeature.getFeatureInfo,
  GetFeature: _TasksGetFeature.GetFeature, getFeature: _TasksGetFeature.getFeature,
  DescribeFeatureType: _TasksDescribeFeatureType.DescribeFeatureType, describeFeatureType: _TasksDescribeFeatureType.describeFeatureType,

  WMS: _LayersWMS.WMS, wms: _LayersWMS.wms,

  // aliases
  DynamicMapLayer: _LayersWMS.WMS
};

exports['default'] = L.ogc;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Layers/WMS":38,"./Request":39,"./Services/Service":40,"./Services/WFS":41,"./Services/WMS":42,"./Support":43,"./Tasks/DescribeFeatureType":44,"./Tasks/GetFeature":46,"./Tasks/GetLegendGraphic":48,"./Tasks/Task":49,"./Util":50,"leaflet":"leaflet"}]},{},[1])(1)
});


//# sourceMappingURL=ogc-leaflet-src.js.map
