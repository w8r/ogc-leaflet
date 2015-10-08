const L = global.L || require('leaflet');
import { reduce } from '../Util';

export class Legend extends L.Control {

  constructor(layers, options) {
    super(L.Util.extend({}, {
    }, options));
    this._layers = L.Util.isArray(layers) ? layers : [layers];
  }

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
      console.log(legend);
      return;
      let layersHtml = '';
      for (let i = 0, len = legend.layers.length; i < len; i++) {
        let layer = legend.layers[i];
        layersHtml += L.Util.template(this.options.layerTemplate, {
          layerName: layer.layerName,
          legends: legendsHtml
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