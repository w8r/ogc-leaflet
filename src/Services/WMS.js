const L  = global.L || require('leaflet');
import { Service } from './Service';
import { getCapabilities } from "../Tasks/GetCapabilities";
import { getFeatureInfo } from "../Tasks/GetFeatureInfo";
import { getLegendGraphic } from "../Tasks/GetLegendGraphic";

/**
 * @class OgcLeaflet.Services.WMSService
 * @extends {OgcLeaflet.Services.Service}
 */
export class WMSService extends Service {

  /**
   * @param  {Object} options
   */
  constructor(options) {
    super(options);
  }

  /**
   * @return {OgcLeaflet.Tasks.GetCapabilities}
   */
  getCapabilities() {
    return getCapabilities(this);
  }

  /**
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {GetCapabilites}
   */
  metadata (callback, context) {
    return this.getCapabilities().run(callback, context);
  }

  /**
   * @return {OgcLeaflet.Tasks.GetCapabilities}
   */
  getFeatureInfo() {
    return getFeatureInfo(this)
  }

  // alias
  identify() {
    return this.getFeatureInfo();
  }

  /**
   * @return {OgcLeaflet.Tasks.GetLegendGraphic}
   */
  getLegendGraphic() {
    return getLegendGraphic(this);
  }

  // alias
  legend() {
    return this.getLegendGraphic();
  }
}

export function wmsService(options) {
  return new WMSService(options);
}
