const L  = global.L || require('leaflet');

// import base
import { Support } from './Support';
import { Util } from './Util';
import { get, post, request } from './Request';

// import tasks
import { Task, task } from './Tasks/Task';
import { GetFeature, getFeature } from './Tasks/GetFeature';
import { GetCapabilities, getCapabilities } from './Tasks/GetFeature';
import { DescribeFeatureType, describeFeatureType } from './Tasks/DescribeFeatureType';
import { GetFeatureInfo, getFeatureInfo } from './Tasks/GetFeature';
import { GetLegendGraphic, getLegendGraphic } from './Tasks/GetLegendGraphic';
//import { Find, find } from './Tasks/Find';
//import { Identify, identify } from './Tasks/Identify';
//import { IdentifyFeatures, identifyFeatures } from './Tasks/IdentifyFeatures';
//import { IdentifyImage, identifyImage } from './Tasks/IdentifyImage';

// import services
import { Service, service } from './Services/Service';
import { WFSService, wfsService } from './Services/WFS';
import { WMSService, wmsService } from './Services/WMS';
//import { ImageService, imageService } from './Services/ImageService';
//import { FeatureLayerService, featureLayerService } from './Services/FeatureLayerService';

// import layers
import { WMS, wms } from './Layers/WMS';
//import { TiledMapLayer, tiledMapLayer } from './Layers/TiledMapLayer';
//import { RasterLayer } from './Layers/RasterLayer';
//import { ImageMapLayer, imageMapLayer } from './Layers/ImageMapLayer';
//import { DynamicMapLayer, dynamicMapLayer } from './Layers/DynamicMapLayer';
//import { FeatureGrid } from './Layers/FeatureLayer/FeatureGrid';
//import { FeatureManager } from './Layers/FeatureLayer/FeatureManager';
//import { FeatureLayer, featureLayer } from './Layers/FeatureLayer/FeatureLayer';

L.ogc = {
  Service, service,
  WFSService, wfsService,
  WMSService, wmsService,
  Task, task,
  Util,
  get, post, request,
  Support,

  GetCapabilities, getCapabilities,
  GetLegendGraphic, getLegendGraphic,
  GetFeatureInfo, getFeatureInfo,
  GetFeature, getFeature,
  DescribeFeatureType, describeFeatureType,

  WMS, wms,

  // aliases
  DynamicMapLayer: WMS
}

export default L.ogc;
