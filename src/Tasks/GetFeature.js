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
      srsName: 'EPSG:4326',
      request: 'GetFeature',
      info_format: 'application/json'
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
    this.params.typeNames = layers;
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
  property (property) {
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
    return this.bbox(boundsToBBox(bounds));
  }

  /**
   * @param  {Array.<Number>} bbox
   * @return {GetFeature}
   */
  bbox (bbox) {
    this.params.bbox = bbox.join(',');
    return this;
  }

}

export function getFeature(endpoint) {
  return new GetFeature(endpoint);
}
