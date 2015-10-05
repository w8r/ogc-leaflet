import L from 'leaflet';
import Task from './Task'

/**
 * @class OgcLeaflet.Tasks.GetLegendGrapic
 * @extends {OgcLeaflet.Tasks.Task}
 */
export default class GetLegendGraphic extends Task {

  /**
   * @param  {OgcLeaflet.Services.Service|String} endpoint
   */
  constructor (endpoint) {
    super(endpoint);

    /**
     * @type {Object}
     */
    this.defaultLegendStyles = {
      fontAntiAliasing: true,
      dpi: 72,
      fontName: 'Helvetica',
      bgColor: '#ffffff',
      fontStyle: 'normal'
    };

    L.Util.extend(this.params, {
      'request': 'GetLegendGraphic',
      'format': 'image/png'
    });
  }

  /**
   * @param  {String} format
   * @return {GetLegendGraphic}
   */
  set format(format) {
    this.params.format = format;
    return this;
  }

  /**
   * @param  {String} layer
   * @return {GetLegendGraphic}
   */
  set layer(layer) {
    this.params.layer = layer;
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
      'fontSize', 'fontStyle'
      ];

    for (let i = 0, len = params.length; i < len; i++) {
      let key = params[i];
      if (options.hasOwnProperty(key)) {
        paramString += key + ':' + pairs[key] + ';'
      }
    }
    return paramString;
  }

  /**
   * @param  {Object} styles
   * @return {GetLegendGraphic}
   */
  set styles(styles = {}) {
    this.params.legend_options = this._formatLegendOptions(
      L.Util.extend({}, this.defaultLegendStyles, styles)
    );
    return this;
  }
}

export function getLegendGraphic(endpoint) {
  return new GetLegendGraphic(endpoint);
}
