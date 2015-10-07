const L  = global.L || require('leaflet');
import { wmsService } from '../Services/WMS';

export class WMS extends L.TileLayer.WMS {

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

}

export function wms(url, options) {
  return new WMS(url, options);
}
