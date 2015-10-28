const L = global.L || require('leaflet');

import { VirtualGrid } from './VirtualGrid';
import { wfsService } from '../Services/WFS';

export class FeatureLayer extends VirtualGrid {

  constructor(url, options = {}) {
    super(L.Util.extend({
      cacheLayers: true
    }, options));

    options.url = url;
    this.service = wfsService(options);

    this._cache = {};
    // cache of what layers should be active
    this._currentSnapshot = [];
    this._activeRequests = 0;

    this._originalStyle = this.options.style;
    this._layers = {};
  }

  /**
   * Layer methods
   */

  onRemove (map) {
    L.FeatureGroup.prototype.onRemove.call(this, map);
    return super.onRemove(map);
  }

  createNewLayer (geojson) {
    var layer = L.GeoJSON.geometryToLayer(geojson, this.options);
    layer.defaultOptions = layer.options;
    return layer;
  }

  _updateLayer (layer, geojson) {
    // convert the geojson coordinates into a Leaflet LatLng array/nested arrays
    // pass it to setLatLngs to update layer geometries
    var latlngs = [];
    var coordsToLatLng = this.options.coordsToLatLng || L.GeoJSON.coordsToLatLng;

    // copy new attributes, if present
    if (geojson.properties) {
      layer.feature.properties = geojson.properties;
    }

    switch (geojson.geometry.type) {
      case 'Point':
        latlngs = L.GeoJSON.coordsToLatLng(geojson.geometry.coordinates);
        layer.setLatLng(latlngs);
        break;
      case 'LineString':
        latlngs = L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates, 0, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'MultiLineString':
        latlngs = L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates, 1, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'Polygon':
        latlngs = L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates, 1, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'MultiPolygon':
        latlngs = L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates, 2, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
    }
  }

  /**
   * Feature Management Methods
   */

  createLayers (features) {
    for (var i = features.length - 1; i >= 0; i--) {
      let geojson = features[i];

      let layer = this._layers[geojson.id];
      let newLayer;

      if (layer && !this._map.hasLayer(layer)) {
        this._map.addLayer(layer);
      }

      // update geometry if neccessary
      if (layer && this.options.simplifyFactor > 0 &&
        (layer.setLatLngs || layer.setLatLng)) {
        this._updateLayer(layer, geojson);
      }

      if (!layer) {
        newLayer = this.createNewLayer(geojson);
        newLayer.feature = geojson;

        // bubble events from individual layers to the feature layer
        newLayer.addEventParent(this);

        if (this.options.onEachFeature) {
          this.options.onEachFeature(newLayer.feature, newLayer);
        }

        // cache the layer
        this._layers[newLayer.feature.id] = newLayer;

        // style the layer
        this.setFeatureStyle(newLayer.feature.id, this.options.style);

        this.fire('createfeature', {
          feature: newLayer.feature
        }, true);
      }
    }
  }

  addLayers (ids) {
    for (let i = ids.length - 1; i >= 0; i--) {
      let layer = this._layers[ids[i]];
      if (layer) {
        this.fire('addfeature', {
          feature: layer.feature
        }, true);
        this._map.addLayer(layer);
      }
    }
  }

  removeLayers (ids, permanent) {
    for (let i = ids.length - 1; i >= 0; i--) {
      let id = ids[i];
      let layer = this._layers[id];
      if (layer) {
        this.fire('removefeature', {
          feature: layer.feature,
          permanent: permanent
        }, true);
        this._map.removeLayer(layer);
      }
      if (layer && permanent) {
        delete this._layers[id];
      }
    }
  }

  cellEnter (bounds, coords) {
    if (!this._zooming && this._map) {
      L.Util.requestAnimFrame(L.Util.bind(function () {
        let cacheKey = this._cacheKey(coords);
        let cellKey = this._cellCoordsToKey(coords);
        let layers = this._cache[cacheKey];
        if (this._activeCells[cellKey] && layers) {
          this.addLayers(layers);
        }
      }, this));
    }
  }

  cellLeave (bounds, coords) {
    if (!this._zooming) {
      L.Util.requestAnimFrame(L.Util.bind(function () {
        if (this._map) {
          let cacheKey = this._cacheKey(coords);
          let cellKey = this._cellCoordsToKey(coords);
          let layers = this._cache[cacheKey];
          let mapBounds = this._map.getBounds();
          if (!this._activeCells[cellKey] && layers) {
            var removable = true;

            for (let i = 0; i < layers.length; i++) {
              let layer = this._layers[layers[i]];
              if (layer && layer.getBounds && mapBounds.intersects(layer.getBounds())) {
                removable = false;
              }
            }

            if (removable) {
              this.removeLayers(layers, !this.options.cacheLayers);
            }

            if (!this.options.cacheLayers && removable) {
              delete this._cache[cacheKey];
              delete this._cells[cellKey];
              delete this._activeCells[cellKey];
            }
          }
        }
      }, this));
    }
  }

  /**
   * Styling Methods
   */

  resetStyle () {
    this.options.style = this._originalStyle;
    this.eachFeature(function (layer) {
      this.resetFeatureStyle(layer.feature.id);
    }, this);
    return this;
  }

  setStyle (style) {
    this.options.style = style;
    this.eachFeature(function (layer) {
      this.setFeatureStyle(layer.feature.id, style);
    }, this);
    return this;
  }

  resetFeatureStyle (id) {
    let layer = this._layers[id];
    let style = this._originalStyle || L.Path.prototype.options;
    if (layer) {
      L.Util.extend(layer.options, layer.defaultOptions);
      this.setFeatureStyle(id, style);
    }
    return this;
  }

  setFeatureStyle (id, style) {
    var layer = this._layers[id];
    if (typeof style === 'function') {
      style = style(layer.feature);
    }
    if (layer.setStyle) {
      layer.setStyle(style);
    }
    return this;
  }

  /**
   * Utility Methods
   */

  eachFeature (fn, context) {
    for (let i in this._layers) {
      fn.call(context, this._layers[i]);
    }
    return this;
  }

  getFeature (id) {
    return this._layers[id];
  }

  bringToBack () {
    this.eachFeature(function (layer) {
      if (layer.bringToBack) {
        layer.bringToBack();
      }
    });
  }

  bringToFront () {
    this.eachFeature(function (layer) {
      if (layer.bringToFront) {
        layer.bringToFront();
      }
    });
  }

  redraw (id) {
    if (id) {
      this._redraw(id);
    }
    return this;
  }

  _redraw (id) {
    let layer = this._layers[id];
    let geojson = layer.feature;

    // if this looks like a marker
    if (layer && layer.setIcon && this.options.pointToLayer) {
      // update custom symbology, if necessary
      if (this.options.pointToLayer) {
        let getIcon = this.options.pointToLayer(
          geojson,
          L.latLng(
            geojson.geometry.coordinates[1],
            geojson.geometry.coordinates[0]
          )
        );
        let updatedIcon = getIcon.options.icon;
        layer.setIcon(updatedIcon);
      }
    }

    // looks like a vector marker (circleMarker)
    if (layer && layer.setStyle && this.options.pointToLayer) {
      let getStyle = this.options.pointToLayer(
        geojson,
        L.latLng(
          geojson.geometry.coordinates[1],
          geojson.geometry.coordinates[0]
        )
      );
      let updatedStyle = getStyle.options;
      this.setFeatureStyle(geojson.id, updatedStyle);
    }

    // looks like a path (polygon/polyline)
    if (layer && layer.setStyle && this.options.style) {
      this.resetStyle(geojson.id);
    }
  }

  /**
   * Feature Managment
   */

  createCell (bounds, coords) {
    this._requestFeatures(bounds, coords);
  }

  _requestFeatures (bounds, coords, callback) {
    this._activeRequests++;

    // our first active request fires loading
    if (this._activeRequests === 1) {
      this.fire('loading', {
        bounds: bounds
      }, true);
    }

    return this._buildQuery(bounds).run(function (error, featureCollection, response) {
      if (response && response.exceededTransferLimit) {
        this.fire('drawlimitexceeded');
      }

      // no error, features
      if (!error && featureCollection && featureCollection.features.length) {
        // schedule adding features until the next animation frame
        L.Util.requestAnimFrame(L.Util.bind(function () {
          this._addFeatures(featureCollection.features, coords);
          this._postProcessFeatures(bounds);
        }, this));
      }

      // no error, no features
      if (!error && featureCollection && !featureCollection.features.length) {
        this._postProcessFeatures(bounds);
      }

      if (callback) {
        callback.call(this, error, featureCollection);
      }
    }, this);
  }

  _postProcessFeatures (bounds) {
    // deincriment the request counter now that we have processed features
    this._activeRequests--;

    // if there are no more active requests fire a load event for this view
    if (this._activeRequests <= 0) {
      this.fire('load', {
        bounds: bounds
      });
    }
  }

  _cacheKey (coords) {
    return coords.z + ':' + coords.x + ':' + coords.y;
  }

  _addFeatures (features, coords) {
    var key = this._cacheKey(coords);
    this._cache[key] = this._cache[key] || [];

    for (var i = features.length - 1; i >= 0; i--) {
      var id = features[i].id;
      this._currentSnapshot.push(id);
      this._cache[key].push(id);
    }

    if (this.options.timeField) {
      this._buildTimeIndexes(features);
    }

    var zoom = this._map.getZoom();

    if (zoom > this.options.maxZoom ||
        zoom < this.options.minZoom) { return; }

    this.createLayers(features);
  }

  _buildQuery (bounds) {
    var query = this.service.query()
      .on(this._map)
      .bounds(bounds)
      .where(this.options.where)
      .fields(this.options.fields);

    return query;
  }

  /**
   * Where Methods
   */

  setWhere (where, callback, context) {
    this.options.where = (where && where.length) ? where : '1=1';

    let oldSnapshot = [];
    let newSnapshot = [];
    let pendingRequests = 0;
    let requestError = null;
    let requestCallback = L.Util.bind(function (error, featureCollection) {
      if (error) {
        requestError = error;
      }

      if (featureCollection) {
        for (var i = featureCollection.features.length - 1; i >= 0; i--) {
          newSnapshot.push(featureCollection.features[i].id);
        }
      }

      pendingRequests--;

      if (pendingRequests <= 0) {
        this._currentSnapshot = newSnapshot;
        // schedule adding features until the next animation frame
        L.Util.requestAnimFrame(L.Util.bind(function () {
          this.removeLayers(oldSnapshot);
          this.addLayers(newSnapshot);
          if (callback) {
            callback.call(context, requestError);
          }
        }, this));
      }
    }, this);

    for (var i = this._currentSnapshot.length - 1; i >= 0; i--) {
      oldSnapshot.push(this._currentSnapshot[i]);
    }

    for (var key in this._activeCells) {
      pendingRequests++;
      let coords = this._keyToCellCoords(key);
      let bounds = this._cellCoordsToBounds(coords);
      this._requestFeatures(bounds, key, requestCallback);
    }

    return this;
  }

  getWhere () {
    return this.options.where;
  }

  refresh () {
    for (var key in this._activeCells) {
      var coords = this._keyToCellCoords(key);
      var bounds = this._cellCoordsToBounds(coords);
      this._requestFeatures(bounds, key);
    }

    if (this.redraw) {
      this.once('load', function () {
        this.eachFeature(function (layer) {
          this._redraw(layer.feature.id);
        }, this);
      }, this);
    }
  }

  metadata (callback, context) {
    this.service.metadata(callback, context);
    return this;
  }

  query () {
    return this.service.query();
  }

  _getMetadata (callback) {
    if (this._metadata) {
      var error;
      callback(error, this._metadata);
    } else {
      this.metadata(L.Util.bind(function (error, response) {
        this._metadata = response;
        callback(error, this._metadata);
      }, this));
    }
  }

  addFeature (feature, callback, context) {
    return this.service.addFeature(feature, L.Util.bind(function (error, response) {
      if (!error) {
          // assign ID from result to appropriate objectid field from service metadata
        feature.properties[metadata.objectIdField] = response.objectId;

          // we also need to update the geojson id for createLayers() to function
        feature.id = response.objectId;
        this.createLayers([feature]);
      }

      if (callback) {
        callback.call(context, error, response);
      }
    }, this));
  }

  updateFeature (feature, callback, context) {
    this.service.updateFeature(feature, function (error, response) {
      if (!error) {
        this.removeLayers([feature.id], true);
        this.createLayers([feature]);
      }

      if (callback) {
        callback.call(context, error, response);
      }
    }, this);
  }

  deleteFeature (id, callback, context) {
    this.service.deleteFeature(id, function (error, response) {
      if (!error && response.objectId) {
        this.removeLayers([response.objectId], true);
      }
      if (callback) {
        callback.call(context, error, response);
      }
    }, this);
  }

  deleteFeatures (ids, callback, context) {
    return this.service.deleteFeatures(ids, function (error, response) {
      if (!error && response.length > 0) {
        for (var i = 0; i < response.length; i++) {
          this.removeLayers([response[i].objectId], true);
        }
      }
      if (callback) {
        callback.call(context, error, response);
      }
    }, this);
  }

}

export function featureLayer (url, otpions) {
  return new FeatureLayer(url, otpions);
}
