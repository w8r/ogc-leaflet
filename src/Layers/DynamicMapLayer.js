const L  = global.L || require('leaflet');
import { wmsService } from '../Services/WMS';

/**
 * @class ogc.Layers.WMS
 * @extends {L.TileLayer.WMS}
 */
export class DynamicMapLayer extends L.TileLayer.WMS {

  /**
   * @param  {String}  url
   * @param  {Object=} options
   */
  constructor(url, options = L.TileLayer.WMS.prototype.options) {
    super(url, options);

    options.url = url;
    this.service = wmsService(options);
  }

  /**
   * @return {ogc.Tasks.GetFeatureInfo}
   */
  identify () {
    return this.service.identify()
      .on(this._map) // link to map and pre-set layers
      .layers(this.options.layers);
  }

  /**
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {Request}
   */
  metadata (callback, context) {
    return this.service.metadata(callback, context);
  }

  /**
   * Shorthand for legend info
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {ogc.Tasks.GetLegendGraphic}
   */
  legend (callback, context) {
    var legend = this.service.legend();
    if (callback) {
      return legend.run(callback, context);
    } else {
      return legend;
    }
  }

  /**
   * Unparsed XML
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {Request}
   */
  getCapabilities (callback, context) {
    return this.service.getCapabilities().request(callback, context);
  }

}

export function dynamicMapLayer(url, options) {
  return new DynamicMapLayer(url, options);
}
