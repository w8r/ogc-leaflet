const L  = global.L || require('leaflet');
import { Task } from './Task';
import { serialize } from '../Request';
import { WMS_VERSION } from '../Support';

/**
 * @class ogc.Tasks.GetLegendGrapic
 * @extends {ogc.Tasks.Task}
 */
export class GetLegendGraphic extends Task {

  /**
   * @param  {ogc.Services.Service|String} endpoint
   */
  constructor (endpoint) {
    super(endpoint);

    if(endpoint.options) {
      console.log(endpoint.options.layers);
      this.layers(endpoint.options.layers);
    }

    /**
     * @type {Object}
     */
    this.defaultLegendStyles = {
      fontAntiAliasing: true,
      dpi: 72,
      fontName: 'Arial',
      bgColor: '#ffffff',
      fontStyle: 'normal',
      fontColor: '#000000' //,
      // forceRule: 'True',
      // borderColor: '#ff0000',
      // dx: 1.8,
      // dy: 0.2,
      // mx: 0.2,
      // my: 0.2
    };

    L.Util.extend(this.params, {
      request: 'GetLegendGraphic',
      format: 'image/png',
      service: 'WMS',
      version: WMS_VERSION
    });
  }

  /**
   * @param  {String} format
   * @return {GetLegendGraphic}
   */
  format(format) {
    this.params.format = format;
    return this;
  }

  /**
   * @param  {String} layer
   * @return {GetLegendGraphic}
   */
  layer(layer) {
    this.params.layer = layer;
    return this;
  }

  /**
   * @param  {Array.<String>|String} layers
   * @return {GetLegendGraphic}
   */
  layers(layers) {
    this._layers = L.Util.isArray(layers) ? layers : [layers];
    return this;
  }

  /**
   * @static
   * @param  {Object} options
   * @return {String}
   */
  static _formatLegendOptions(options) {
    let paramString = '';
    const params = [
      'dpi', 'fontAntiAliasing',
      'fontName', 'bgColor',
      'fontSize', 'fontStyle',
      'dx', 'dy', 'mx', 'my',
      'fontColor', 'forceRule',
      'borderColor'
    ];

    for (let i = 0, len = params.length; i < len; i++) {
      let key = params[i];
      if (options.hasOwnProperty(key)) {
        paramString += key + ':' + options[key] + ';'
      }
    }
    return paramString;
  }

  /**
   * @param  {Object} styles
   * @return {GetLegendGraphic}
   */
  styles(styles = {}) {
    this.params.legend_options = GetLegendGraphic._formatLegendOptions(
      L.Util.extend({}, this.defaultLegendStyles, styles)
    );
    return this;
  }

  /**
   * @param  {L.Point|Object} size
   * @return {GetLegendGraphic}
   */
  size(size) {
    this.params.width = size.x;
    this.params.height = size.y;
    return this;
  }

  /**
   * Generates graphics url
   * @param  {String} layer
   * @return {String}
   */
  _getLegendUrl(layer) {
    this.layer(layer);
    let url = (this.options.proxy) ?
      this.options.proxy + '?' + this.options.url :
      this.options.url;
    return url + '?' + serialize(this.params);
  }

  /**
   * @override
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {GetLegendGraphic}
   */
  request(callback, context) {
    if (!(this._layers || this.params.layer)) {
      throw new Error('GetLegendGraphic: layer must be defined');
    }

    L.Util.requestAnimFrame(() => {
      let layers = this._layers || [this.params.layer];
      this.styles();
      callback.call(context, null, {
        layers: layers.map((layer) => {
          return {
            name: layer,
            url: this._getLegendUrl(layer)
          };
        }, this)
      });
    }, this);

    return this;
  }

  /**
   * Wrapper
   * @param  {Function} callback
   * @param  {*=}       context
   * @return {GetLegendGraphic}
   */
  run(callback, context) {
    return this.request(callback, context);
  }
}

export function getLegendGraphic(endpoint) {
  return new GetLegendGraphic(endpoint);
}
