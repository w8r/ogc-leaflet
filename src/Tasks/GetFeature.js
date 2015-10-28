const L  = global.L || require('leaflet');
import { Task } from './Task';
import { boundsToBBox } from '../Util';

/**
 * @class OgcLeaflet.Tasks.GetFeature
 */
export class GetFeature extends Task {

  /**
   * @param  {String|Service} endpoint
   */
  constructor (endpoint) {
    super(endpoint);

    /**
     * @type {Object}
     */
    L.Util.extend(this.params, {
      srs: 'EPSG:4326',
      request: 'GetFeature',
      outputFormat: 'application/json'
    });

    if(this._service && this._service.options) {
      this.version(endpoint.options.version);
    }
  }

  /**
   * @param  {String} version
   * @return {GetFeature}
   */
  version (version = '2.0.0') {
    this.params.version = version;
    return this;
  }

  /**
   * @param  {Number} max
   * @return {GetFeature}
   */
  limit (max = 0) {
    if (max) {
      this[parseFloat(this.params.version) >= 2 ?
           'count' : 'maxFeatures'] = max;
    }
    return this;
  }

  /**
   * @param  {String} srs
   * @return {GetFeature}
   */
  srs (srs) {
    this.params.srsName = srs;
    return this;
  }

  /**
   * @param  {String} srs
   * @return {GetFeature}
   */
  sr (srs) {
    return this.srs(srs);
  }

  /**
   * @param  {Array.<String>|String}  layers
   * @return {GetFeature}
   */
  layers (layers = []) {
    if (L.Util.isArray(layers)) {
      layers = layers.join(',');
    }
    this.params.typeName = layers;
    return this;
  }

  /**
   * @param  {String}   attribute
   * @param  {Boolean=} descending
   * @return {GetFeature}
   */
  sortBy (attribute, descending = false) {
    this.params.sortBy = attribute;
    if (descending) {
      this.params.sortBy += '+D';
    }
    return this;
  }

  /**
   * @param  {String|Array.<String>} property
   * @return {GetFeature}
   */
  property (property = '') {
    if (L.Util.isArray(property)) {
      property = property.join(',');
    }
    this.params.propertyName = property;
    return this;
  }

  /**
   * @param  {String|Array.<String>} fields
   * @return {GetFeature}
   */
  fields (fields) {
    return this.property(fields);
  }

  /**
   * @param  {L.LatLngBounds|L.Bounds} bounds
   * @return {GetFeature}
   */
  bounds (bounds) {
    this.params.cql_filter = this._getBBoxFilter(bounds);
    return this;
  }

  /**
   * @param  {Array.<Number>} bbox
   * @return {GetFeature}
   */
  bbox (bbox) {
    this.params.bbox = bbox.join(',');
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
 * BBox CQL filter
 * @param  {L.LatLngBounds} bounds
 * @return {String}
 */
  _getBBoxFilter(bounds) {
    let bbox = this._boundsToBBox(bounds, this._map.options.crs);
    return 'BBOX(the_geom,' + bbox + ',\'' + this.params.srs + '\')';
  }

  /**
   * @param  {L.Map} map
   * @return {GetFeatureInfo}
   */
  on(map) {
    super.on(map);
    this.srs(map.options.crs.code);
    return this;
  }

  where (where) {
    return this.filter(where);
  }

  filter () {
    return this;
  }

  run (callback, context) {
    return this.request(callback, context);
  }

}

export function getFeature(endpoint) {
  return new GetFeature(endpoint);
}
