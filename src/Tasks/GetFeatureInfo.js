import L from 'leaflet';
import Task from './Task'

/**
 * @class OgcLeaflet.Tasks.GetFeatureInfo
 * @extends {OgcLeaflet.Tasks.Task}
 */
export default class GetFeatureInfo extends Task {
  constructor (endpoint) {
    super(endpoint);
    L.Util.extend(this.params, {
      request: 'GetFeatureInfo',
      exceptions: 'application/json',
      srs: 'EPSG:4326',
      buffer: 0
    });
  }

  set at(latlng) {
    let x = latlng.lng;
    let y = latlng.lat;

    if (this._map) { // project

    }

    this.params.x = latlng.lng;
    this.params.y = latlng.lat;
    return this;
  }

  set tolerance(tolerance = 0) {
    this.params.buffer = tolerance;
    return this;
  }

  set layers (layers) {
    if (L.Util.isArray(layers)) {
      layers = layers.join(',');
    }
    this.params.layers = layers;
    return this;
  }

  set limit (limit = 0) {
    this.params.limit = limit;
    return this;
  }

  size(size) {
    this.params.width = size.x;
    this.params.height = size.y;
    return this;
  }

  set returnProperties(properties) {
    this.params.propertyName =
      L.Util.isArray(properties) ? properties.join(',') : properties;
    return this;
  }

  /**
   * @param  {L.LatLngBounds|L.Bounds} bounds
   * @return {GetFeatureInfo}
   */
  set bounds (bounds) {
    return this.bbox(boundsToBBox(bounds));
  }

  /**
   * @param  {Array.<Number>} bbox
   * @return {GetFeatureInfo}
   */
  set bbox (bbox) {
    this.params.bbox = bbox.join(',');
    return this;
  }

}

export function getFeatureInfo(endpoint) {
  return new GetFeatureInfo(endpoint);
}
