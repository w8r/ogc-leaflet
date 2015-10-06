const L  = global.L || require('leaflet');
import { Task } from './Task'

/**
 * @class OgcLeaflet.Tasks.DescribeFeatureType
 * @extends {OgcLeaflet.Tasks.Task}
 */
export class DescribeFeatureType extends Task {

  /**
   * @param  {Object|String} endpoint
   */
  constructor (endpoint) {
    super(endpoint);
    L.Util.extend(this.params, {
      service: 'WFS',
      request: 'DescribeFeatureType'
    });
  }

  /**
   * @param  {Array.<String>|String}  layers
   * @return {DescribeFeatureType}
   */
  layers (layers = []) {
    if (L.Util.isArray(layers)) {
      layers = layers.join(',');
    }
    this.params.typeNames = layers;
    return this;
  }
}

export function describeFeatureType(endpoint) {
  return new DescribeFeatureType(endpoint);
}
