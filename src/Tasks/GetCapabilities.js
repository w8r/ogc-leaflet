import { Task } from './Task';

/**
 * @class OgcLeaflet.Tasks.GetCapabilities
 * @extends {OgcLeaflet.Tasks.Task}
 */
export class GetCapabilities extends Task {

  /**
   * @param  {Object|String} endpoint
   */
  constructor(endpoint){
    super(endpoint);

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
  service (type = 'WMS') {
    this.params.service = type;
    return this;
  }

  /**
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {GetCapabilites}
   */
  run (callback, context) {
    return super.request(function(error, text) {
      // parse capabilities here
      // if (!error) { text = this._parseCapabilities(text); }
      callback.call(context, error, text);
    }, context);
  }
}

export function getCapabilities(endpoint) {
  return new GetCapabilities(endpoint);
}
