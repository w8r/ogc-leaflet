const L  = global.L || require('leaflet');
import { Task } from './Task';
import { boundsToBBox } from '../Util';

/**
 * @class ogc.Tasks.GetFeatureInfo
 * @extends {ogc.Tasks.Task}
 */
export class GetFeatureInfo extends Task {

  /**
   * @param  {ObgLeaflet.Services.WMS|String} endpoint
   */
  constructor (endpoint) {
    super(endpoint);

    L.Util.extend(this.params, {
      request: 'GetFeatureInfo',
      exceptions: 'application/json',
      srs: 'EPSG:4326',
      buffer: 0
    });
  }

  /**
   * @param  {L.LatLng} latlng
   * @return {GetFeatureInfo}
   */
  at(latlng) {
    let px;
    if (latlng instanceof L.LatLng) {
      if (this._map) { // project
        px = this._map.lalLngToContainerPixel(latlng);
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
  tolerance(tolerance = 0) {
    this.params.buffer = tolerance;
    return this;
  }

  /**
   * @param  {Array.<String>|String} layers
   * @return {GetFeatureInfo}
   */
  layers (layers = []) {
    if (L.Util.isArray(layers)) {
      layers = layers.join(',');
    }
    this.params.layers = layers;
    return this;
  }

  /**
   * @param  {Number} limit
   * @return {GetFeatureInfo}
   */
  limit (limit = 0) {
    this.params.feature_count = limit;
    return this;
  }

  /**
   * @param  {L.Point} size
   * @return {GetFeatureInfo}
   */
  size(size) {
    this.params.width = size.x;
    this.params.height = size.y;
    return this;
  }

  /**
   * @param  {Array.<String>|String} properties
   * @return {GetFeatureInfo}
   */
  returnProperties(properties = []) {
    this.params.propertyName =
      L.Util.isArray(properties) ? properties.join(',') : properties;
    return this;
  }

  /**
   * @param  {L.LatLngBounds|L.Bounds} bounds
   * @return {GetFeatureInfo}
   */
  bounds (bounds) {
    return this.bbox(boundsToBBox(bounds));
  }

  /**
   * @param  {Array.<Number>} bbox
   * @return {GetFeatureInfo}
   */
  bbox (bbox) {
    this.params.bbox = bbox.join(',');
    return this;
  }

}

export function getFeatureInfo(endpoint) {
  return new GetFeatureInfo(endpoint);
}
