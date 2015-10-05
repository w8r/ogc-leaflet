import L from 'leaflet';
import Service from './Service';
import getFeature from '../Tasks/GetFeature';
import getCapabilities from '../Tasks/GetCapabilities';
import describeFeatureType from '../Tasks/DescribeFeatureType';

export default class WFS extends Service {
  constructor(options) {
    super(options);
  }
}

export function wfs(options) {
  return new WFS(options);
}
