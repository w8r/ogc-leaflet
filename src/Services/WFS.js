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

  query () {
    return this.getFeature();
  }

  /**
   * @return {ogc.Tasks.DescribeFeatureType}
   */
  describeFeatureType() {
    return describeFeatureType(this);
  }

  /**
   * @return {ogc.Tasks.GetCapabilities}
   */
  getCapabilities () {
    return getCapabilities(this)
      .service('WFS')
      .version('2.0.0');
  }

  /**
   * @param  {Function=} callback
   * @param  {*=}        context
   * @return {ogc.Tasks.GetCapabilities}
   */
  metadata (callback, context) {
    let task = this.getCapabilities(this);
    if (arguments.length !== 0) {
      return task.run(callback, context);
    } else {
      return task;
    }
  }
}

export function wfsService(options) {
  return new WFSService(options);
}
