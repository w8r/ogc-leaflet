const L  = global.L || require('leaflet');
import { wmsService } from '../Services/WMS';

export class WMS extends L.TileLayer.WMS {

  constructor(url, options = L.TileLayer.WMS.prototype.options) {
    super(url, options);

    options.url = url;
    this.service = wmsService(options);
  }

}

export function wms(url, options) {
  return new WMS(url, options);
}
