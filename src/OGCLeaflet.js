import L from 'leaflet';

// import base
import { Support } from './Support';
import { Util } from './Util';
import { get, post, request } from './Request';

// import tasks
import { Task, task } from './Tasks/Task';
//import { Query, query } from './Tasks/Query';
//import { Find, find } from './Tasks/Find';
//import { Identify, identify } from './Tasks/Identify';
//import { IdentifyFeatures, identifyFeatures } from './Tasks/IdentifyFeatures';
//import { IdentifyImage, identifyImage } from './Tasks/IdentifyImage';

// import services
import { Service, service } from './Services/Service';
//import { MapService, mapService } from './Services/MapService';
//import { ImageService, imageService } from './Services/ImageService';
//import { FeatureLayerService, featureLayerService } from './Services/FeatureLayerService';

// import layers
//import { BasemapLayer, basemapLayer } from './Layers/BasemapLayer';
//import { TiledMapLayer, tiledMapLayer } from './Layers/TiledMapLayer';
//import { RasterLayer } from './Layers/RasterLayer';
//import { ImageMapLayer, imageMapLayer } from './Layers/ImageMapLayer';
//import { DynamicMapLayer, dynamicMapLayer } from './Layers/DynamicMapLayer';
//import { FeatureGrid } from './Layers/FeatureLayer/FeatureGrid';
//import { FeatureManager } from './Layers/FeatureLayer/FeatureManager';
//import { FeatureLayer, featureLayer } from './Layers/FeatureLayer/FeatureLayer';

L.ogc = {
  Service,
  service,
  Task,
  task,
  Util,
  get,
  post,
  request,
  Support
}

export default L.ogc;
