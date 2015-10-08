import { WMSCapabilities } from 'wms-capabilities';
import { Task } from './Task';

/**
 * @class OgcLeaflet.Tasks.GetCapabilities
 * @extends {OgcLeaflet.Tasks.Task}
 */
export class GetCapabilities extends Task {

  /**
   * @param  {Object|String} endpoint
   */
  constructor(endpoint) {
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
   * @param  {String} xml
   * @return {Object}
   */
  _parseCapabilities(xml) {
    return new WMSCapabilities(xml).toJSON();
  }

  /**
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {GetCapabilites}
   */
  run (callback, context) {
    return super.request((error, capabilities) => {
      // parse capabilities here
      if (!error) { capabilities = this._parseCapabilities(capabilities); }
      callback.call(context, error, capabilities);
    }, context);
  }
}

export function getCapabilities(endpoint) {
  return new GetCapabilities(endpoint);
}
