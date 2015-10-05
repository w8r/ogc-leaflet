import L from 'leaflet';
import Service from './Service';
import getCapabilities from "../Tasks/GetCapabilities";
import getFeatureInfo from "../Tasks/GetFeatureInfo";
import getLegendGraphics from "../Tasks/GetLegendGraphic";

export default class WMS extends Service {
  constructor(options) {
    super(options);
  }

  getCapabilities() {
    return getCapabilities(this);
  }

  getFeatureInfo() {
    return getFeatureInfo(this)
  }

  getLegendGraphics() {
    return getLegendGraphics(this);
  }
}

export function wms(options) {
  return new WMS(options);
}
