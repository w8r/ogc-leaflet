const L = global.L || require('leaflet');
import { reduce } from '../Util';

/**
 * @class ogc.Controls.Laegend
 * @extends {L.Control}
 */
export class Legend extends L.Control {

  /**
   * @param  {Array.<L.TileLayer.WMS>|L.TileLayer.WMS} layers
   * @param  {Object} options
   * @param  {String} options.layerTemplate Template string for one layer
   * @param  {String} options.listTemplate  Template for layers list
   */
  constructor(layers, options) {
    super(L.Util.extend({}, L.Control.prototype.options, {
      layerTemplate: '<li class="layer-row"> \
                       <div class="layer-name">{layerName}</div> \
                       <img class="legend-image" src="{src}" alt="{layerName}" /> \
                      </li>',
      listTemplate: '<ul>{layers}</ul>',
      position: 'topright'
    }, options));
    this._layers = L.Util.isArray(layers) ? layers : [layers];
  }

  /**
   * @param  {L.Map} map
   * @return {Element}
   */
  onAdd(map) {
    let container = this.options.container ||
        L.DomUtil.create('div', 'leaflet-legend-control leaflet-bar');

    L.DomEvent
      .disableScrollPropagation(container)
      .disableClickPropagation(container);

    if (this._layers.length) {
      this._load();
    }
    return container;
  }

  /**
   * Load legends for all included layers
   */
  _load() {
    reduce(this._layers, {
      layers: []
    }, (curr, layer, cb) => {
      layer.legend((err, legend) => {
        if (err) return cb(err, curr);
        curr.layers = curr.layers.concat(legend.layers);
        cb(null, curr);
      });
    }, this._onLoad, this);
  }

  /**
   * @param  {Object|Null} error
   * @param  {Object}     legend
   */
  _onLoad(error, legend) {
    if (!error) {
      // return console.log(legend);
      let layersHtml = '';
      for (let i = 0, len = legend.layers.length; i < len; i++) {
        let layer = legend.layers[i];
        layersHtml += L.Util.template(this.options.layerTemplate, {
          layerName: layer.name,
          src: legend.layers[i].url
        });
      }
      this._container.innerHTML = L.Util.template(this.options.listTemplate, {
        layers: layersHtml
      });
    }
  }
}

export function legend(options) {
  return new Legend(options);
}
