import { Task } from './Task'

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
      request: 'GetCapabilities'
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
    this.params = type;
    return this;
  }
}

export function getCapabilities(endpoint) {
  return new GetCapabilities(endpoint);
}
