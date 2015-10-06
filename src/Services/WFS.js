const L  = global.L || require('leaflet');
import { Service } from './Service';
import { getFeature } from '../Tasks/GetFeature';
import { getCapabilities } from '../Tasks/GetCapabilities';
import { describeFeatureType } from '../Tasks/DescribeFeatureType';

/**
 * @class ogc.Services.WFS
 * @extends {ogc.Services.Service}
 */
export class WFSService extends Service {

  /**
   * @param  {Object} options
   */
  constructor(options) {
    super(options);
  }

  /**
   * @return {ogc.Tasks.GetFeature}
   */
  getFeature() {
    return getFeature(this);
  }

  /**
   * @return {ogc.Tasks.DescribeFeatureType}
   */
  describeFeatureType() {
    return describeFeatureType(this);
  }
}

export function wfsService(options) {
  return new WFSService(options);
}
