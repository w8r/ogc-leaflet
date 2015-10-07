const L  = global.L || require('leaflet');
import { Task } from './Task';
import { boundsToBBox } from '../Util';

const DEFAULT_WMS_VERSION = 1.3;

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
  srs(srs) {
    this.params[
      parseFloat(this.params.version) >= DEFAULT_WMS_VERSION ? 'crs' : 'srs'
    ] = srs;
    return this;
  }

  crs(crs) {
    return this.srs(crs);
  }

  /**
   * @param  {L.Map} map
   * @return {GetFeatureInfo}
   */
  on(map) {
    super.on(map);

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
  _boundsToBBox(bounds, crs) {
    let nw = crs.project(bounds.getNorthWest());
    let se = crs.project(bounds.getSouthEast());

    if(parseFloat(this.params.version) >= 1.3 &&
       crs === L.CRS.EPSG4326) {
      return [se.y, nw.x, nw.y, se.x];
    } else {
      return [nw.x, se.y, se.x, nw.y];
    }
  }

  /**
   * @param  {L.LatLng} latlng
   * @return {GetFeatureInfo}
   */
  at(latlng) {
    let px;
    if (latlng instanceof L.LatLng) {
      if (this._map) { // project
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
    this.params.query_layers =
    this.params.layers       = layers;
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
   * @param  {L.Map=}                  map
   * @return {GetFeatureInfo}
   */
  bounds (bounds, map) {
    map = map || this._map;
    if (map) {
      return this.bbox(this._boundsToBBox(bounds, this._map.options.crs));
    } else {
      throw new Error('Cannot project bounds');
    }
  }

  /**
   * @param  {Array.<Number>} bbox
   * @return {GetFeatureInfo}
   */
  bbox (bbox) {
    this.params.bbox = bbox.join(',');
    return this;
  }

  run(callback, context) {
    return this.request(callback, context);
  }
}

export function getFeatureInfo(endpoint) {
  return new GetFeatureInfo(endpoint);
}
