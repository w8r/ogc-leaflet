(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ogc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _defaults = require('babel-runtime/helpers/defaults')['default'];

var _interopExportWildcard = require('babel-runtime/helpers/interop-export-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _srcOgc = require('./src/ogc');

_defaults(exports, _interopExportWildcard(_srcOgc, _defaults));

},{"./src/ogc":63,"babel-runtime/helpers/defaults":9,"babel-runtime/helpers/interop-export-wildcard":12}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":18}],7:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],8:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],9:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names")["default"];

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = function (obj, defaults) {
  var keys = _Object$getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    var value = _Object$getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      _Object$defineProperty(obj, key, value);
    }
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/get-own-property-descriptor":4,"babel-runtime/core-js/object/get-own-property-names":5}],10:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":4}],11:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/set-prototype-of":6}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (obj, defaults) {
  var newObj = defaults({}, obj);
  delete newObj["default"];
  return newObj;
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],14:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":31}],15:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":31}],16:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":31,"../../modules/es6.object.get-own-property-descriptor":35}],17:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-names');
module.exports = function getOwnPropertyNames(it){
  return $.getNames(it);
};
},{"../../modules/$":31,"../../modules/es6.object.get-own-property-names":36}],18:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":22,"../../modules/es6.object.set-prototype-of":37}],19:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],20:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":30}],21:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],22:[function(require,module,exports){
var core = module.exports = {version: '1.2.1'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],23:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":19}],24:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":22,"./$.global":28}],25:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],26:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],27:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString  = {}.toString
  , toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":31,"./$.to-iobject":34}],28:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],29:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":21}],30:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],31:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],32:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":22,"./$.def":24,"./$.fails":26}],33:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":31,"./$.an-object":20,"./$.ctx":23,"./$.is-object":30}],34:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":25,"./$.iobject":29}],35:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":32,"./$.to-iobject":34}],36:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./$.object-sap')('getOwnPropertyNames', function(){
  return require('./$.get-names').get;
});
},{"./$.get-names":27,"./$.object-sap":32}],37:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":24,"./$.set-proto":33}],38:[function(require,module,exports){
"use strict";

module.exports = require('./src/wms');

},{"./src/wms":43}],39:[function(require,module,exports){
"use strict";

/**
 * @enum {Number}
 */
module.exports = {
  ELEMENT: 1,
  ATTRIBUTE: 2,
  TEXT: 3,
  CDATA_SECTION: 4,
  ENTITY_REFERENCE: 5,
  ENTITY: 6,
  PROCESSING_INSTRUCTION: 7,
  COMMENT: 8,
  DOCUMENT: 9,
  DOCUMENT_TYPE: 10,
  DOCUMENT_FRAGMENT: 11,
  NOTATION: 12
};

},{}],40:[function(require,module,exports){
"use strict";

/**
 * Returns true if the specified value is not undefined.
 *
 * @param {?} val Variable to test.
 * @return {Boolean} Whether variable is defined.
 */
module.exports = function isDef(val) {
  return val !== void 0;
};

},{}],41:[function(require,module,exports){
"use strict";

/**
 * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {String} key The key to add.
 * @param {V} value The value to add if the key wasn't present.
 * @return {V} The value of the entry at the end of the function.
 * @template K,V
 */
module.exports = function(obj, key, value) {
  return key in obj ? obj[key] : (obj[key] = value);
};

},{}],42:[function(require,module,exports){
"use strict";

var isDef = require('./isdef');

/**
 * Make sure we trim BOM and NBSP
 * @type {RegExp}
 */
var TRIM_RE = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Repeats a string n times.
 * @param {String} string The string to repeat.
 * @param {Number} length The number of times to repeat.
 * @return {String} A string containing {@code length} repetitions of
 *     {@code string}.
 */
function repeat(string, length) {
  return new Array(length + 1).join(string);
}

module.exports = {

  /**
   * @param  {String} str
   * @return {String}
   */
  trim: function(str) {
    return str.replace(TRIM_RE, '');
  },

  /**
   * Pads number to given length and optionally rounds it to a given precision.
   * For example:
   * <pre>padNumber(1.25, 2, 3) -> '01.250'
   * padNumber(1.25, 2) -> '01.25'
   * padNumber(1.25, 2, 1) -> '01.3'
   * padNumber(1.25, 0) -> '1.25'</pre>
   *
   * @param {Number} num The number to pad.
   * @param {Number} length The desired length.
   * @param {Number=} opt_precision The desired precision.
   * @return {String} {@code num} as a string with the given options.
   */
  padNumber: function(num, length, opt_precision) {
    var s = isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
    var index = s.indexOf('.');
    if (index == -1) {
      index = s.length;
    }
    return repeat('0', Math.max(0, length - index)) + s;
  }

};

},{"./isdef":40}],43:[function(require,module,exports){
"use strict";

var XMLParser = require('./xml_parser');
var isDef = require('./utils/isdef');
var nodeTypes = require('./node_types');
var setIfUndefined = require('./utils/setifundefined');
var XSD = require('./xsd');
var XLink = require('./xlink');

/**
 * WMS Capabilities parser
 *
 * @param {String=} xmlString
 * @constructor
 */
function WMS(xmlString) {

  /**
   * @type {String}
   */
  this.version = undefined;

  /**
   * @type {XMLParser}
   */
  this._parser = new XMLParser();

  /**
   * @type {String=}
   */
  this._data = xmlString;
};

/**
 * Shortcut
 * @type {Function}
 */
var makePropertySetter = XMLParser.makeObjectPropertySetter;

/**
 * @param {String} xmlString
 * @return {WMS}
 */
WMS.prototype.data = function(xmlString) {
  this._data = xmlString;
  return this;
};

/**
 * @param  {String=} xmlString
 * @return {Object}
 */
WMS.prototype.toJSON = function(xmlString) {
  xmlString = xmlString || this._data;
  return this.parse(xmlString);
};

/**
 * @return {String} xml
 */
WMS.prototype.parse = function(xmlString) {
  return this._readFromDocument(this._parser.toDocument(xmlString));
};

/**
 * @param  {Document} doc
 * @return {Object}
 */
WMS.prototype._readFromDocument = function(doc) {
  for (var node = doc.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == nodeTypes.ELEMENT) {
      return this.readFromNode(node);
    }
  }
  return null;
};

/**
 * @param  {DOMNode} node
 * @return {Object}
 */
WMS.prototype.readFromNode = function(node) {
  this.version = node.getAttribute('version');
  var wmsCapabilityObject = XMLParser.pushParseAndPop({
    'version': this.version
  }, WMS.PARSERS, node, []);

  return wmsCapabilityObject || null;
};

/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Attribution object.
 */
WMS._readAttribution = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.ATTRIBUTION_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object} Bounding box object.
 */
WMS._readBoundingBox = function(node, objectStack) {
  var readDecimalString = XSD.readDecimalString;
  var extent = [
    readDecimalString(node.getAttribute('minx')),
    readDecimalString(node.getAttribute('miny')),
    readDecimalString(node.getAttribute('maxx')),
    readDecimalString(node.getAttribute('maxy'))
  ];

  var resolutions = [
    readDecimalString(node.getAttribute('resx')),
    readDecimalString(node.getAttribute('resy'))
  ];

  return {
    'crs': node.getAttribute('CRS') || node.getAttribute('SRS'),
    'extent': extent,
    'res': resolutions
  };
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {ol.Extent|undefined} Bounding box object.
 */
WMS._readEXGeographicBoundingBox = function(node, objectStack) {
  var geographicBoundingBox = XMLParser.pushParseAndPop({},
    WMS.EX_GEOGRAPHIC_BOUNDING_BOX_PARSERS,
    node, objectStack);
  if (!isDef(geographicBoundingBox)) {
    return undefined;
  }

  var westBoundLongitude = /** @type {number|undefined} */
    (geographicBoundingBox['westBoundLongitude']);
  var southBoundLatitude = /** @type {number|undefined} */
    (geographicBoundingBox['southBoundLatitude']);
  var eastBoundLongitude = /** @type {number|undefined} */
    (geographicBoundingBox['eastBoundLongitude']);
  var northBoundLatitude = /** @type {number|undefined} */
    (geographicBoundingBox['northBoundLatitude']);

  if (!isDef(westBoundLongitude) || !isDef(southBoundLatitude) ||
    !isDef(eastBoundLongitude) || !isDef(northBoundLatitude)) {
    return undefined;
  }

  return [
    westBoundLongitude, southBoundLatitude,
    eastBoundLongitude, northBoundLatitude
  ];
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Capability object.
 */
WMS._readCapability = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.CAPABILITY_PARSERS, node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Service object.
 */
WMS._readService = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.SERVICE_PARSERS, node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Contact information object.
 */
WMS._readContactInformation = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.CONTACT_INFORMATION_PARSERS,
    node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Contact person object.
 */
WMS._readContactPersonPrimary = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.CONTACT_PERSON_PARSERS,
    node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Contact address object.
 */
WMS._readContactAddress = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.CONTACT_ADDRESS_PARSERS,
    node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Array.<string>|undefined} Format array.
 */
WMS._readException = function(node, objectStack) {
  return XMLParser.pushParseAndPop(
    [], WMS.EXCEPTION_PARSERS, node, objectStack);
};


/**
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @private
 * @return {Object|undefined} Layer object.
 */
WMS._readCapabilityLayer = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.LAYER_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Layer object.
 */
WMS._readLayer = function(node, objectStack) {
  var parentLayerObject = /**  @type {Object.<string,*>} */
    (objectStack[objectStack.length - 1]);

  var layerObject = /**  @type {Object.<string,*>} */
    (XMLParser.pushParseAndPop({}, WMS.LAYER_PARSERS,
      node, objectStack));

  if (!isDef(layerObject)) {
    return undefined;
  }

  var queryable = XSD.readBooleanString(node.getAttribute('queryable'));
  if (!isDef(queryable)) {
    queryable = parentLayerObject['queryable'];
  }
  layerObject['queryable'] = isDef(queryable) ? queryable : false;

  var cascaded = XSD.readNonNegativeIntegerString(node.getAttribute('cascaded'));
  if (!isDef(cascaded)) {
    cascaded = parentLayerObject['cascaded'];
  }
  layerObject['cascaded'] = cascaded;

  var opaque = XSD.readBooleanString(node.getAttribute('opaque'));
  if (!isDef(opaque)) {
    opaque = parentLayerObject['opaque'];
  }
  layerObject['opaque'] = isDef(opaque) ? opaque : false;

  var noSubsets = XSD.readBooleanString(node.getAttribute('noSubsets'));
  if (!isDef(noSubsets)) {
    noSubsets = parentLayerObject['noSubsets'];
  }
  layerObject['noSubsets'] = isDef(noSubsets) ? noSubsets : false;

  var fixedWidth = XSD.readDecimalString(node.getAttribute('fixedWidth'));
  if (!isDef(fixedWidth)) {
    fixedWidth = parentLayerObject['fixedWidth'];
  }
  layerObject['fixedWidth'] = fixedWidth;

  var fixedHeight = XSD.readDecimalString(node.getAttribute('fixedHeight'));
  if (!isDef(fixedHeight)) {
    fixedHeight = parentLayerObject['fixedHeight'];
  }
  layerObject['fixedHeight'] = fixedHeight;

  // See 7.2.4.8
  var addKeys = ['Style', 'CRS', 'AuthorityURL'];
  for (var i = 0, len = addKeys.length; i < len; i++) {
    var key = addKeys[i];
    var parentValue = parentLayerObject[key];
    if (isDef(parentValue)) {
      var childValue = setIfUndefined(layerObject, key, []);
      childValue = childValue.concat(parentValue);
      layerObject[key] = childValue;
    }
  }

  var replaceKeys = ['EX_GeographicBoundingBox', 'BoundingBox', 'Dimension',
    'Attribution', 'MinScaleDenominator', 'MaxScaleDenominator'
  ];
  for (var i = 0, len = replaceKeys.length; i < len; i++) {
    var key = replaceKeys[i];
    var childValue = layerObject[key];
    if (!isDef(childValue)) {
      var parentValue = parentLayerObject[key];
      layerObject[key] = parentValue;
    }
  }

  return layerObject;
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object} Dimension object.
 */
WMS._readDimension = function(node, objectStack) {
  var dimensionObject = {
    'name': node.getAttribute('name'),
    'units': node.getAttribute('units'),
    'unitSymbol': node.getAttribute('unitSymbol'),
    'default': node.getAttribute('default'),
    'multipleValues': XSD.readBooleanString(node.getAttribute('multipleValues')),
    'nearestValue': XSD.readBooleanString(node.getAttribute('nearestValue')),
    'current': XSD.readBooleanString(node.getAttribute('current')),
    'values': XSD.readString(node)
  };
  return dimensionObject;
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Online resource object.
 */
WMS._readFormatOnlineresource = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.FORMAT_ONLINERESOURCE_PARSERS,
    node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Request object.
 */
WMS._readRequest = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.REQUEST_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} DCP type object.
 */
WMS._readDCPType = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.DCPTYPE_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} HTTP object.
 */
WMS._readHTTP = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.HTTP_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Operation type object.
 */
WMS._readOperationType = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.OPERATIONTYPE_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Online resource object.
 */
WMS._readSizedFormatOnlineresource = function(node, objectStack) {
  var formatOnlineresource = WMS._readFormatOnlineresource(node, objectStack);
  if (isDef(formatOnlineresource)) {
    var readNonNegativeIntegerString = XSD.readNonNegativeIntegerString;
    var size = [
      readNonNegativeIntegerString(node.getAttribute('width')),
      readNonNegativeIntegerString(node.getAttribute('height'))
    ];
    formatOnlineresource['size'] = size;
    return formatOnlineresource;
  }
  return undefined;
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Authority URL object.
 */
WMS._readAuthorityURL = function(node, objectStack) {
  var authorityObject = WMS._readFormatOnlineresource(node, objectStack);
  if (isDef(authorityObject)) {
    authorityObject['name'] = node.getAttribute('name');
    return authorityObject;
  }
  return undefined;
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Metadata URL object.
 */
WMS._readMetadataURL = function(node, objectStack) {
  var metadataObject = WMS._readFormatOnlineresource(node, objectStack);
  if (isDef(metadataObject)) {
    metadataObject['type'] = node.getAttribute('type');
    return metadataObject;
  }
  return undefined;
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Object|undefined} Style object.
 */
WMS._readStyle = function(node, objectStack) {
  return XMLParser.pushParseAndPop({}, WMS.STYLE_PARSERS, node, objectStack);
};


/**
 * @private
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {Array.<string>|undefined} Keyword list.
 */
WMS._readKeywordList = function(node, objectStack) {
  return XMLParser.pushParseAndPop(
    [], WMS.KEYWORDLIST_PARSERS, node, objectStack);
};

/**
 * @const
 * @type {Array.<string>}
 */
WMS.NAMESPACE_URIS = [
  null,
  'http://www.opengis.net/wms'
];

/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Service': makePropertySetter(WMS._readService),
    'Capability': makePropertySetter(WMS._readCapability)
  });

/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.CAPABILITY_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Request': makePropertySetter(WMS._readRequest),
    'Exception': makePropertySetter(WMS._readException),
    'Layer': makePropertySetter(WMS._readCapabilityLayer)
  });

/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.SERVICE_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Name': makePropertySetter(XSD.readString),
    'Title': makePropertySetter(XSD.readString),
    'Abstract': makePropertySetter(XSD.readString),
    'KeywordList': makePropertySetter(WMS._readKeywordList),
    'OnlineResource': makePropertySetter(XLink.readHref),
    'ContactInformation': makePropertySetter(WMS._readContactInformation),
    'Fees': makePropertySetter(XSD.readString),
    'AccessConstraints': makePropertySetter(XSD.readString),
    'LayerLimit': makePropertySetter(XSD.readNonNegativeInteger),
    'MaxWidth': makePropertySetter(XSD.readNonNegativeInteger),
    'MaxHeight': makePropertySetter(XSD.readNonNegativeInteger)
  });

/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.CONTACT_INFORMATION_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'ContactPersonPrimary': makePropertySetter(WMS._readContactPersonPrimary),
    'ContactPosition': makePropertySetter(XSD.readString),
    'ContactAddress': makePropertySetter(WMS._readContactAddress),
    'ContactVoiceTelephone': makePropertySetter(XSD.readString),
    'ContactFacsimileTelephone': makePropertySetter(XSD.readString),
    'ContactElectronicMailAddress': makePropertySetter(XSD.readString)
  });

/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.CONTACT_PERSON_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'ContactPerson': makePropertySetter(XSD.readString),
    'ContactOrganization': makePropertySetter(XSD.readString)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.CONTACT_ADDRESS_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'AddressType': makePropertySetter(XSD.readString),
    'Address': makePropertySetter(XSD.readString),
    'City': makePropertySetter(XSD.readString),
    'StateOrProvince': makePropertySetter(XSD.readString),
    'PostCode': makePropertySetter(XSD.readString),
    'Country': makePropertySetter(XSD.readString)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.EXCEPTION_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Format': XMLParser.makeArrayPusher(XSD.readString)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.LAYER_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Name': makePropertySetter(XSD.readString),
    'Title': makePropertySetter(XSD.readString),
    'Abstract': makePropertySetter(XSD.readString),
    'KeywordList': makePropertySetter(WMS._readKeywordList),
    'CRS': XMLParser.makeObjectPropertyPusher(XSD.readString),
    'EX_GeographicBoundingBox': makePropertySetter(WMS._readEXGeographicBoundingBox),
    'BoundingBox': XMLParser.makeObjectPropertyPusher(WMS._readBoundingBox),
    'Dimension': XMLParser.makeObjectPropertyPusher(WMS._readDimension),
    'Attribution': makePropertySetter(WMS._readAttribution),
    'AuthorityURL': XMLParser.makeObjectPropertyPusher(WMS._readAuthorityURL),
    'Identifier': XMLParser.makeObjectPropertyPusher(XSD.readString),
    'MetadataURL': XMLParser.makeObjectPropertyPusher(WMS._readMetadataURL),
    'DataURL': XMLParser.makeObjectPropertyPusher(WMS._readFormatOnlineresource),
    'FeatureListURL': XMLParser.makeObjectPropertyPusher(WMS._readFormatOnlineresource),
    'Style': XMLParser.makeObjectPropertyPusher(WMS._readStyle),
    'MinScaleDenominator': makePropertySetter(XSD.readDecimal),
    'MaxScaleDenominator': makePropertySetter(XSD.readDecimal),
    'Layer': XMLParser.makeObjectPropertyPusher(WMS._readLayer)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.ATTRIBUTION_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Title': makePropertySetter(XSD.readString),
    'OnlineResource': makePropertySetter(XLink.readHref),
    'LogoURL': makePropertySetter(WMS._readSizedFormatOnlineresource)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.EX_GEOGRAPHIC_BOUNDING_BOX_PARSERS =
  XMLParser.makeParsersNS(WMS.NAMESPACE_URIS, {
    'westBoundLongitude': makePropertySetter(
      XSD.readDecimal),
    'eastBoundLongitude': makePropertySetter(
      XSD.readDecimal),
    'southBoundLatitude': makePropertySetter(
      XSD.readDecimal),
    'northBoundLatitude': makePropertySetter(
      XSD.readDecimal)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.REQUEST_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'GetCapabilities': makePropertySetter(
      WMS._readOperationType),
    'GetMap': makePropertySetter(
      WMS._readOperationType),
    'GetFeatureInfo': makePropertySetter(
      WMS._readOperationType)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.OPERATIONTYPE_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Format': XMLParser.makeObjectPropertyPusher(XSD.readString),
    'DCPType': XMLParser.makeObjectPropertyPusher(
      WMS._readDCPType)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.DCPTYPE_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'HTTP': makePropertySetter(
      WMS._readHTTP)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.HTTP_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Get': makePropertySetter(
      WMS._readFormatOnlineresource),
    'Post': makePropertySetter(
      WMS._readFormatOnlineresource)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.STYLE_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Name': makePropertySetter(XSD.readString),
    'Title': makePropertySetter(XSD.readString),
    'Abstract': makePropertySetter(XSD.readString),
    'LegendURL': XMLParser.makeObjectPropertyPusher(WMS._readSizedFormatOnlineresource),
    'StyleSheetURL': makePropertySetter(WMS._readFormatOnlineresource),
    'StyleURL': makePropertySetter(WMS._readFormatOnlineresource)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.FORMAT_ONLINERESOURCE_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Format': makePropertySetter(XSD.readString),
    'OnlineResource': makePropertySetter(XLink.readHref)
  });


/**
 * @const
 * @type {Object.<string, Object.<string, XMLParser.Parser>>}
 * @private
 */
WMS.KEYWORDLIST_PARSERS = XMLParser.makeParsersNS(
  WMS.NAMESPACE_URIS, {
    'Keyword': XMLParser.makeArrayPusher(XSD.readString)
  });

module.exports = WMS;

},{"./node_types":39,"./utils/isdef":40,"./utils/setifundefined":41,"./xlink":44,"./xml_parser":45,"./xsd":46}],44:[function(require,module,exports){
"use strict";

/**
 * @const
 * @type {string}
 */
var NAMESPACE_URI = 'http://www.w3.org/1999/xlink';

module.exports = {

  /**
   * @param {Node} node Node.
   * @return {Boolean|undefined} Boolean.
   */
  readHref: function(node) {
    return node.getAttributeNS(NAMESPACE_URI, 'href');
  }
};

},{}],45:[function(require,module,exports){
"use strict";

var isDef = require('./utils/isdef');
var setIfUndefined = require('./utils/setifundefined');
var nodeTypes = require('./node_types');

/**
 * XML DOM parser
 * @constructor
 */
function XMLParser() {

  /**
   * @type {DOMParser}
   */
  this._parser = new DOMParser();
};

/**
 * @param  {String} xmlstring
 * @return {Document}
 */
XMLParser.prototype.toDocument = function(xmlstring) {
  return this._parser.parseFromString(xmlstring, 'application/xml');
};

/**
 * Recursively grab all text content of child nodes into a single string.
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @return {string} All text content.
 * @api
 */
XMLParser.getAllTextContent = function(node, normalizeWhitespace) {
  return XMLParser.getAllTextContent_(node, normalizeWhitespace, []).join('');
};


/**
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @param {Array.<String|string>} accumulator Accumulator.
 * @private
 * @return {Array.<String|string>} Accumulator.
 */
XMLParser.getAllTextContent_ = function(node, normalizeWhitespace, accumulator) {
  if (node.nodeType === nodeTypes.CDATA_SECTION ||
    node.nodeType === nodeTypes.TEXT) {
    if (normalizeWhitespace) {
      // FIXME understand why goog.dom.getTextContent_ uses String here
      accumulator.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ''));
    } else {
      accumulator.push(node.nodeValue);
    }
  } else {
    var n;
    for (n = node.firstChild; n; n = n.nextSibling) {
      XMLParser.getAllTextContent_(n, normalizeWhitespace, accumulator);
    }
  }
  return accumulator;
};

/**
 * @param {Object.<string, Object.<string, XMLParser.Parser>>} parsersNS
 *     Parsers by namespace.
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @param {*=} bind The object to use as `this`.
 */
XMLParser.parseNode = function(parsersNS, node, objectStack, bind) {
  for (var n = XMLParser.firstElementChild(node); n; n = XMLParser.nextElementSibling(n)) {
    var namespaceURI = n.namespaceURI || null;
    var parsers = parsersNS[namespaceURI];
    if (isDef(parsers)) {
      var parser = parsers[n.localName];
      if (isDef(parser)) {
        parser.call(bind, n, objectStack);
      }
    }
  }
};

/**
 * Mostly for node.js
 * @param  {Node} node
 * @return {Node}
 */
XMLParser.firstElementChild = function(node) {
  var firstElementChild = node.firstElementChild || node.firstChild;
  while (firstElementChild && firstElementChild.nodeType !== nodeTypes.ELEMENT) {
    firstElementChild = firstElementChild.nextSibling;
  }
  return firstElementChild;
};

/**
 * Mostly for node.js
 * @param  {Node} node
 * @return {Node}
 */
XMLParser.nextElementSibling = function(node) {
  var nextElementSibling = node.nextElementSibling || node.nextSibling;
  while (nextElementSibling && nextElementSibling.nodeType !== nodeTypes.ELEMENT) {
    nextElementSibling = nextElementSibling.nextSibling;
  }
  return nextElementSibling;
};

/**
 * @param {Array.<string>} namespaceURIs Namespace URIs.
 * @param {Object.<string, XMLParser.Parser>} parsers Parsers.
 * @param {Object.<string, Object.<string, XMLParser.Parser>>=} opt_parsersNS
 *     ParsersNS.
 * @return {Object.<string, Object.<string, XMLParser.Parser>>} Parsers NS.
 */
XMLParser.makeParsersNS = function(namespaceURIs, parsers, opt_parsersNS) {
  return /** @type {Object.<string, Object.<string, XMLParser.Parser>>} */ (
    XMLParser.makeStructureNS(namespaceURIs, parsers, opt_parsersNS));
};

/**
 * Creates a namespaced structure, using the same values for each namespace.
 * This can be used as a starting point for versioned parsers, when only a few
 * values are version specific.
 * @param {Array.<string>} namespaceURIs Namespace URIs.
 * @param {T} structure Structure.
 * @param {Object.<string, T>=} opt_structureNS Namespaced structure to add to.
 * @return {Object.<string, T>} Namespaced structure.
 * @template T
 */
XMLParser.makeStructureNS = function(namespaceURIs, structure, opt_structureNS) {
  /**
   * @type {Object.<string, *>}
   */
  var structureNS = isDef(opt_structureNS) ? opt_structureNS : {};
  var i, ii;
  for (i = 0, ii = namespaceURIs.length; i < ii; ++i) {
    structureNS[namespaceURIs[i]] = structure;
  }
  return structureNS;
};

/**
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {XMLParser.Parser} Parser.
 * @template T
 */
XMLParser.makeObjectPropertySetter = function(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(isDef(opt_this) ? opt_this : this,
        node, objectStack);
      if (isDef(value)) {
        var object = /** @type {Object} */ (objectStack[objectStack.length - 1]);
        var property = isDef(opt_property) ? opt_property : node.localName;
        object[property] = value;
      }
    });
};

/**
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {Function} Parser.
 * @template T
 */
XMLParser.makeObjectPropertyPusher = function(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(isDef(opt_this) ? opt_this : this,
        node, objectStack);

      if (isDef(value)) {
        var object = /** @type {Object} */ (objectStack[objectStack.length - 1]);
        var property = isDef(opt_property) ? opt_property : node.localName;
        var array = setIfUndefined(object, property, []);
        array.push(value);
      }
    });
};

/**
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {Function} Parser.
 * @template T
 */
XMLParser.makeArrayPusher = function(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(isDef(opt_this) ? opt_this : this,
        node, objectStack);
      if (isDef(value)) {
        var array = objectStack[objectStack.length - 1];
        array.push(value);
      }
    });
};

/**
 * @param {Object}                                     object Object.
 * @param {Object.<String, Object.<String, Function>>} parsersNS Parsers by namespace.
 * @param {Node}                                       node Node.
 * @param {Array.<*>}                                  objectStack Object stack.
 * @param {*=}                                         bind The object to use as `this`.
 * @return {Object|undefined} Object.
 */
XMLParser.pushParseAndPop = function(object, parsersNS, node, objectStack, bind) {
  objectStack.push(object);
  XMLParser.parseNode(parsersNS, node, objectStack, bind);
  return objectStack.pop();
};

module.exports = XMLParser;

},{"./node_types":39,"./utils/isdef":40,"./utils/setifundefined":41}],46:[function(require,module,exports){
"use strict";

var isDef = require('./utils/isdef');
var string = require('./utils/string');
var XMLParser = require('./xml_parser');

var XSD = {};

/**
 * @const
 * @type {string}
 */
XSD.NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema';

/**
 * @param {Node} node Node.
 * @return {boolean|undefined} Boolean.
 */
XSD.readBoolean = function(node) {
  var s = XMLParser.getAllTextContent(node, false);
  return XSD.readBooleanString(s);
};

/**
 * @param {string} string String.
 * @return {boolean|undefined} Boolean.
 */
XSD.readBooleanString = function(string) {
  var m = /^\s*(true|1)|(false|0)\s*$/.exec(string);
  if (m) {
    return isDef(m[1]) || false;
  } else {
    return undefined;
  }
};


/**
 * @param {Node} node Node.
 * @return {number|undefined} DateTime in seconds.
 */
XSD.readDateTime = function(node) {
  var s = XMLParser.getAllTextContent(node, false);
  var re = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/;
  var m = re.exec(s);
  if (m) {
    var year = parseInt(m[1], 10);
    var month = parseInt(m[2], 10) - 1;
    var day = parseInt(m[3], 10);
    var hour = parseInt(m[4], 10);
    var minute = parseInt(m[5], 10);
    var second = parseInt(m[6], 10);
    var dateTime = Date.UTC(year, month, day, hour, minute, second) / 1000;
    if (m[7] != 'Z') {
      var sign = m[8] == '-' ? -1 : 1;
      dateTime += sign * 60 * parseInt(m[9], 10);
      if (isDef(m[10])) {
        dateTime += sign * 60 * 60 * parseInt(m[10], 10);
      }
    }
    return dateTime;
  } else {
    return undefined;
  }
};


/**
 * @param {Node} node Node.
 * @return {number|undefined} Decimal.
 */
XSD.readDecimal = function(node) {
  var s = XMLParser.getAllTextContent(node, false);
  return XSD.readDecimalString(s);
};


/**
 * @param {string} string String.
 * @return {number|undefined} Decimal.
 */
XSD.readDecimalString = function(string) {
  // FIXME check spec
  var m = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(string);
  if (m) {
    return parseFloat(m[1]);
  } else {
    return undefined;
  }
};


/**
 * @param {Node} node Node.
 * @return {number|undefined} Non negative integer.
 */
XSD.readNonNegativeInteger = function(node) {
  var s = XMLParser.getAllTextContent(node, false);
  return XSD.readNonNegativeIntegerString(s);
};


/**
 * @param {string} string String.
 * @return {number|undefined} Non negative integer.
 */
XSD.readNonNegativeIntegerString = function(string) {
  var m = /^\s*(\d+)\s*$/.exec(string);
  if (m) {
    return parseInt(m[1], 10);
  } else {
    return undefined;
  }
};


/**
 * @param {Node} node Node.
 * @return {string|undefined} String.
 */
XSD.readString = function(node) {
  var s = XMLParser.getAllTextContent(node, false);
  return string.trim(s);
};


/**
 * @param {Node} node Node to append a TextNode with the boolean to.
 * @param {boolean} bool Boolean.
 */
XSD.writeBooleanTextNode = function(node, bool) {
  XSD.writeStringTextNode(node, (bool) ? '1' : '0');
};


/**
 * @param {Node} node Node to append a TextNode with the dateTime to.
 * @param {number} dateTime DateTime in seconds.
 */
XSD.writeDateTimeTextNode = function(node, dateTime) {
  var date = new Date(dateTime * 1000);
  var string = date.getUTCFullYear() + '-' +
    string.padNumber(date.getUTCMonth() + 1, 2) + '-' +
    string.padNumber(date.getUTCDate(), 2) + 'T' +
    string.padNumber(date.getUTCHours(), 2) + ':' +
    string.padNumber(date.getUTCMinutes(), 2) + ':' +
    string.padNumber(date.getUTCSeconds(), 2) + 'Z';
  node.appendChild(XMLParser.DOCUMENT.createTextNode(string));
};


/**
 * @param {Node} node Node to append a TextNode with the decimal to.
 * @param {number} decimal Decimal.
 */
XSD.writeDecimalTextNode = function(node, decimal) {
  var string = decimal.toPrecision();
  node.appendChild(XMLParser.DOCUMENT.createTextNode(string));
};


/**
 * @param {Node} node Node to append a TextNode with the decimal to.
 * @param {number} nonNegativeInteger Non negative integer.
 */
XSD.writeNonNegativeIntegerTextNode = function(node, nonNegativeInteger) {
  var string = nonNegativeInteger.toString();
  node.appendChild(XMLParser.DOCUMENT.createTextNode(string));
};


/**
 * @param {Node} node Node to append a TextNode with the string to.
 * @param {string} string String.
 */
XSD.writeStringTextNode = function(node, string) {
  node.appendChild(XMLParser.DOCUMENT.createTextNode(string));
};

module.exports = XSD;

},{"./utils/isdef":40,"./utils/string":42,"./xml_parser":45}],47:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.legend = legend;

var _Util = require('../Util');

/**
 * @class ogc.Controls.Laegend
 * @extends {L.Control}
 */
var L = global.L || require('leaflet');

var Legend = (function (_L$Control) {
  _inherits(Legend, _L$Control);

  /**
   * @param  {Array.<L.TileLayer.WMS>|L.TileLayer.WMS} layers
   * @param  {Object} options
   * @param  {String} options.layerTemplate Template string for one layer
   * @param  {String} options.listTemplate  Template for layers list
   */

  function Legend(layers, options) {
    _classCallCheck(this, Legend);

    _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, L.Util.extend({}, L.Control.prototype.options, {
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

  _createClass(Legend, [{
    key: 'onAdd',
    value: function onAdd(map) {
      var container = this.options.container || L.DomUtil.create('div', 'leaflet-legend-control leaflet-bar');

      L.DomEvent.disableScrollPropagation(container).disableClickPropagation(container);

      if (this._layers.length) {
        this._load();
      }
      return container;
    }

    /**
     * Load legends for all included layers
     */
  }, {
    key: '_load',
    value: function _load() {
      (0, _Util.reduce)(this._layers, {
        layers: []
      }, function (curr, layer, cb) {
        layer.legend(function (err, legend) {
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
  }, {
    key: '_onLoad',
    value: function _onLoad(error, legend) {
      if (!error) {
        // return console.log(legend);
        var layersHtml = '';
        for (var i = 0, len = legend.layers.length; i < len; i++) {
          var layer = legend.layers[i];
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
  }]);

  return Legend;
})(L.Control);

exports.Legend = Legend;

function legend(options) {
  return new Legend(options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Util":62,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],48:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.dynamicMapLayer = dynamicMapLayer;

var _ServicesWMS = require('../Services/WMS');

/**
 * @class ogc.Layers.WMS
 * @extends {L.TileLayer.WMS}
 */
var L = global.L || require('leaflet');

var DynamicMapLayer = (function (_L$TileLayer$WMS) {
  _inherits(DynamicMapLayer, _L$TileLayer$WMS);

  /**
   * @param  {String}  url
   * @param  {Object=} options
   */

  function DynamicMapLayer(url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? L.TileLayer.WMS.prototype.options : arguments[1];

    _classCallCheck(this, DynamicMapLayer);

    _get(Object.getPrototypeOf(DynamicMapLayer.prototype), 'constructor', this).call(this, url, options);

    options.url = url;
    this.service = (0, _ServicesWMS.wmsService)(options);
  }

  /**
   * @return {ogc.Tasks.GetFeatureInfo}
   */

  _createClass(DynamicMapLayer, [{
    key: 'identify',
    value: function identify() {
      return this.service.identify().on(this._map) // link to map and pre-set layers
      .layers(this.options.layers);
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {Request}
     */
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this.service.metadata(callback, context);
    }

    /**
     * Shorthand for legend info
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {ogc.Tasks.GetLegendGraphic}
     */
  }, {
    key: 'legend',
    value: function legend(callback, context) {
      var legend = this.service.legend();
      if (callback) {
        return legend.run(callback, context);
      } else {
        return legend;
      }
    }

    /**
     * Unparsed XML
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {Request}
     */
  }, {
    key: 'getCapabilities',
    value: function getCapabilities(callback, context) {
      return this.service.getCapabilities().request(callback, context);
    }
  }]);

  return DynamicMapLayer;
})(L.TileLayer.WMS);

exports.DynamicMapLayer = DynamicMapLayer;

function dynamicMapLayer(url, options) {
  return new DynamicMapLayer(url, options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Services/WMS":54,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],49:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.featureLayer = featureLayer;

var _VirtualGrid2 = require('./VirtualGrid');

var _ServicesWFS = require('../Services/WFS');

var L = global.L || require('leaflet');

var FeatureLayer = (function (_VirtualGrid) {
  _inherits(FeatureLayer, _VirtualGrid);

  function FeatureLayer(url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, FeatureLayer);

    _get(Object.getPrototypeOf(FeatureLayer.prototype), 'constructor', this).call(this, L.Util.extend({
      cacheLayers: true
    }, options));

    options.url = url;
    this.service = (0, _ServicesWFS.wfsService)(options);

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

  _createClass(FeatureLayer, [{
    key: 'onRemove',
    value: function onRemove(map) {
      L.FeatureGroup.prototype.onRemove.call(this, map);
      return _get(Object.getPrototypeOf(FeatureLayer.prototype), 'onRemove', this).call(this, map);
    }
  }, {
    key: 'createNewLayer',
    value: function createNewLayer(geojson) {
      var layer = L.GeoJSON.geometryToLayer(geojson, this.options);
      layer.defaultOptions = layer.options;
      return layer;
    }
  }, {
    key: '_updateLayer',
    value: function _updateLayer(layer, geojson) {
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

  }, {
    key: 'createLayers',
    value: function createLayers(features) {
      for (var i = features.length - 1; i >= 0; i--) {
        var geojson = features[i];

        var layer = this._layers[geojson.id];
        var newLayer = undefined;

        if (layer && !this._map.hasLayer(layer)) {
          this._map.addLayer(layer);
        }

        // update geometry if neccessary
        if (layer && this.options.simplifyFactor > 0 && (layer.setLatLngs || layer.setLatLng)) {
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
  }, {
    key: 'addLayers',
    value: function addLayers(ids) {
      for (var i = ids.length - 1; i >= 0; i--) {
        var layer = this._layers[ids[i]];
        if (layer) {
          this.fire('addfeature', {
            feature: layer.feature
          }, true);
          this._map.addLayer(layer);
        }
      }
    }
  }, {
    key: 'removeLayers',
    value: function removeLayers(ids, permanent) {
      for (var i = ids.length - 1; i >= 0; i--) {
        var id = ids[i];
        var layer = this._layers[id];
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
  }, {
    key: 'cellEnter',
    value: function cellEnter(bounds, coords) {
      if (!this._zooming && this._map) {
        L.Util.requestAnimFrame(L.Util.bind(function () {
          var cacheKey = this._cacheKey(coords);
          var cellKey = this._cellCoordsToKey(coords);
          var layers = this._cache[cacheKey];
          if (this._activeCells[cellKey] && layers) {
            this.addLayers(layers);
          }
        }, this));
      }
    }
  }, {
    key: 'cellLeave',
    value: function cellLeave(bounds, coords) {
      if (!this._zooming) {
        L.Util.requestAnimFrame(L.Util.bind(function () {
          if (this._map) {
            var cacheKey = this._cacheKey(coords);
            var cellKey = this._cellCoordsToKey(coords);
            var layers = this._cache[cacheKey];
            var mapBounds = this._map.getBounds();
            if (!this._activeCells[cellKey] && layers) {
              var removable = true;

              for (var i = 0; i < layers.length; i++) {
                var layer = this._layers[layers[i]];
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

  }, {
    key: 'resetStyle',
    value: function resetStyle() {
      this.options.style = this._originalStyle;
      this.eachFeature(function (layer) {
        this.resetFeatureStyle(layer.feature.id);
      }, this);
      return this;
    }
  }, {
    key: 'setStyle',
    value: function setStyle(style) {
      this.options.style = style;
      this.eachFeature(function (layer) {
        this.setFeatureStyle(layer.feature.id, style);
      }, this);
      return this;
    }
  }, {
    key: 'resetFeatureStyle',
    value: function resetFeatureStyle(id) {
      var layer = this._layers[id];
      var style = this._originalStyle || L.Path.prototype.options;
      if (layer) {
        L.Util.extend(layer.options, layer.defaultOptions);
        this.setFeatureStyle(id, style);
      }
      return this;
    }
  }, {
    key: 'setFeatureStyle',
    value: function setFeatureStyle(id, style) {
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

  }, {
    key: 'eachFeature',
    value: function eachFeature(fn, context) {
      for (var i in this._layers) {
        fn.call(context, this._layers[i]);
      }
      return this;
    }
  }, {
    key: 'getFeature',
    value: function getFeature(id) {
      return this._layers[id];
    }
  }, {
    key: 'bringToBack',
    value: function bringToBack() {
      this.eachFeature(function (layer) {
        if (layer.bringToBack) {
          layer.bringToBack();
        }
      });
    }
  }, {
    key: 'bringToFront',
    value: function bringToFront() {
      this.eachFeature(function (layer) {
        if (layer.bringToFront) {
          layer.bringToFront();
        }
      });
    }
  }, {
    key: 'redraw',
    value: function redraw(id) {
      if (id) {
        this._redraw(id);
      }
      return this;
    }
  }, {
    key: '_redraw',
    value: function _redraw(id) {
      var layer = this._layers[id];
      var geojson = layer.feature;

      // if this looks like a marker
      if (layer && layer.setIcon && this.options.pointToLayer) {
        // update custom symbology, if necessary
        if (this.options.pointToLayer) {
          var getIcon = this.options.pointToLayer(geojson, L.latLng(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]));
          var updatedIcon = getIcon.options.icon;
          layer.setIcon(updatedIcon);
        }
      }

      // looks like a vector marker (circleMarker)
      if (layer && layer.setStyle && this.options.pointToLayer) {
        var getStyle = this.options.pointToLayer(geojson, L.latLng(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]));
        var updatedStyle = getStyle.options;
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

  }, {
    key: 'createCell',
    value: function createCell(bounds, coords) {
      this._requestFeatures(bounds, coords);
    }
  }, {
    key: '_requestFeatures',
    value: function _requestFeatures(bounds, coords, callback) {
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
  }, {
    key: '_postProcessFeatures',
    value: function _postProcessFeatures(bounds) {
      // deincriment the request counter now that we have processed features
      this._activeRequests--;

      // if there are no more active requests fire a load event for this view
      if (this._activeRequests <= 0) {
        this.fire('load', {
          bounds: bounds
        });
      }
    }
  }, {
    key: '_cacheKey',
    value: function _cacheKey(coords) {
      return coords.z + ':' + coords.x + ':' + coords.y;
    }
  }, {
    key: '_addFeatures',
    value: function _addFeatures(features, coords) {
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

      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        return;
      }

      this.createLayers(features);
    }
  }, {
    key: '_buildQuery',
    value: function _buildQuery(bounds) {
      var query = this.service.query().on(this._map).bounds(bounds).where(this.options.where).fields(this.options.fields);

      return query;
    }

    /**
     * Where Methods
     */

  }, {
    key: 'setWhere',
    value: function setWhere(where, callback, context) {
      this.options.where = where && where.length ? where : '1=1';

      var oldSnapshot = [];
      var newSnapshot = [];
      var pendingRequests = 0;
      var requestError = null;
      var requestCallback = L.Util.bind(function (error, featureCollection) {
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
        var coords = this._keyToCellCoords(key);
        var bounds = this._cellCoordsToBounds(coords);
        this._requestFeatures(bounds, key, requestCallback);
      }

      return this;
    }
  }, {
    key: 'getWhere',
    value: function getWhere() {
      return this.options.where;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
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
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      this.service.metadata(callback, context);
      return this;
    }
  }, {
    key: 'query',
    value: function query() {
      return this.service.query();
    }
  }, {
    key: '_getMetadata',
    value: function _getMetadata(callback) {
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
  }, {
    key: 'addFeature',
    value: function addFeature(feature, callback, context) {
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
  }, {
    key: 'updateFeature',
    value: function updateFeature(feature, callback, context) {
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
  }, {
    key: 'deleteFeature',
    value: function deleteFeature(id, callback, context) {
      this.service.deleteFeature(id, function (error, response) {
        if (!error && response.objectId) {
          this.removeLayers([response.objectId], true);
        }
        if (callback) {
          callback.call(context, error, response);
        }
      }, this);
    }
  }, {
    key: 'deleteFeatures',
    value: function deleteFeatures(ids, callback, context) {
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
  }]);

  return FeatureLayer;
})(_VirtualGrid2.VirtualGrid);

exports.FeatureLayer = FeatureLayer;

function featureLayer(url, otpions) {
  return new FeatureLayer(url, otpions);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Services/WFS":53,"./VirtualGrid":50,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],50:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.virtualGrid = virtualGrid;
var L = global.L || require('leaflet');

// TODO: wait for @patrickarlt to release his module and use that
//

var VirtualGrid = L.Class.extend({

  includes: L.Mixin.Events,

  options: {
    cellSize: 512,
    updateInterval: 150
  },

  initialize: function initialize(options) {
    options = L.setOptions(this, options);
  },

  onAdd: function onAdd(map) {
    this._map = map;
    this._update = L.Util.limitExecByInterval(this._update, this.options.updateInterval, this);

    // @TODO remove for leaflet 0.8
    this._map.addEventListener(this.getEvents(), this);

    this._reset();
    this._update();
  },

  onRemove: function onRemove() {
    this._map.removeEventListener(this.getEvents(), this);
    this._removeCells();
  },

  getEvents: function getEvents() {
    var events = {
      viewreset: this._reset,
      moveend: this._update
    };

    return events;
  },

  addTo: function addTo(map) {
    map.addLayer(this);
    return this;
  },

  removeFrom: function removeFrom(map) {
    map.removeLayer(this);
    return this;
  },

  _reset: function _reset() {
    this._removeCells();

    this._cells = {};
    this._activeCells = {};
    this._cellsToLoad = 0;
    this._cellsTotal = 0;

    // @TODO enable at Leaflet 0.8
    // this._cellNumBounds = this._getCellNumBounds();

    this._resetWrap();
  },

  _resetWrap: function _resetWrap() {
    var map = this._map,
        crs = map.options.crs;

    if (crs.infinite) {
      return;
    }

    var cellSize = this._getCellSize();

    if (crs.wrapLng) {
      this._wrapLng = [Math.floor(map.project([0, crs.wrapLng[0]]).x / cellSize), Math.ceil(map.project([0, crs.wrapLng[1]]).x / cellSize)];
    }

    if (crs.wrapLat) {
      this._wrapLat = [Math.floor(map.project([crs.wrapLat[0], 0]).y / cellSize), Math.ceil(map.project([crs.wrapLat[1], 0]).y / cellSize)];
    }
  },

  _getCellSize: function _getCellSize() {
    return this.options.cellSize;
  },

  _update: function _update() {

    if (!this._map) {
      return;
    }

    var bounds = this._map.getPixelBounds(),
        zoom = this._map.getZoom(),
        cellSize = this._getCellSize();

    if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
      return;
    }

    // cell coordinates range for the current view
    var cellBounds = L.bounds(bounds.min.divideBy(cellSize).floor(), bounds.max.divideBy(cellSize).floor());

    this._addCells(cellBounds);
    this._removeOtherCells(cellBounds);
  },

  _addCells: function _addCells(bounds) {

    var queue = [],
        center = bounds.getCenter(),
        zoom = this._map.getZoom();

    var j, i, coords;
    // create a queue of coordinates to load cells from
    for (j = bounds.min.y; j <= bounds.max.y; j++) {
      for (i = bounds.min.x; i <= bounds.max.x; i++) {
        coords = new L.Point(i, j);
        coords.z = zoom;

        // @TODO enable at Leaflet 0.8
        // if (this._isValidCell(coords)) {
        //   queue.push(coords);
        // }

        queue.push(coords);
      }
    }

    var cellsToLoad = queue.length;

    if (cellsToLoad === 0) {
      return;
    }

    this._cellsToLoad += cellsToLoad;
    this._cellsTotal += cellsToLoad;

    // sort cell queue to load cells in order of their distance to center
    queue.sort(function (a, b) {
      return a.distanceTo(center) - b.distanceTo(center);
    });

    for (i = 0; i < cellsToLoad; i++) {
      this._addCell(queue[i]);
    }
  },

  // @TODO enable at Leaflet 0.8
  // _isValidCell: function (coords) {
  //   var crs = this._map.options.crs;

  //   if (!crs.infinite) {
  //     // don't load cell if it's out of bounds and not wrapped
  //     var bounds = this._cellNumBounds;
  //     if (
  //       (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
  //       (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))
  //     ) {
  //       return false;
  //     }
  //   }

  //   if (!this.options.bounds) {
  //     return true;
  //   }

  //   // don't load cell if it doesn't intersect the bounds in options
  //   var cellBounds = this._cellCoordsToBounds(coords);
  //   return L.latLngBounds(this.options.bounds).intersects(cellBounds);
  // },

  // converts cell coordinates to its geographical bounds
  _cellCoordsToBounds: function _cellCoordsToBounds(coords) {
    var map = this._map,
        cellSize = this.options.cellSize,
        nwPoint = coords.multiplyBy(cellSize),
        sePoint = nwPoint.add([cellSize, cellSize]),

    // @TODO for Leaflet 0.8
    // nw = map.wrapLatLng(map.unproject(nwPoint, coords.z)),
    // se = map.wrapLatLng(map.unproject(sePoint, coords.z));

    nw = map.unproject(nwPoint, coords.z).wrap(),
        se = map.unproject(sePoint, coords.z).wrap();

    return new L.LatLngBounds(nw, se);
  },

  // converts cell coordinates to key for the cell cache
  _cellCoordsToKey: function _cellCoordsToKey(coords) {
    return coords.x + ':' + coords.y;
  },

  // converts cell cache key to coordiantes
  _keyToCellCoords: function _keyToCellCoords(key) {
    var kArr = key.split(':'),
        x = parseInt(kArr[0], 10),
        y = parseInt(kArr[1], 10);

    return new L.Point(x, y);
  },

  // remove any present cells that are off the specified bounds
  _removeOtherCells: function _removeOtherCells(bounds) {
    for (var key in this._cells) {
      if (!bounds.contains(this._keyToCellCoords(key))) {
        this._removeCell(key);
      }
    }
  },

  _removeCell: function _removeCell(key) {
    var cell = this._activeCells[key];
    if (cell) {
      delete this._activeCells[key];

      if (this.cellLeave) {
        this.cellLeave(cell.bounds, cell.coords);
      }

      this.fire('cellleave', {
        bounds: cell.bounds,
        coords: cell.coords
      });
    }
  },

  _removeCells: function _removeCells() {
    for (var key in this._cells) {
      var bounds = this._cells[key].bounds;
      var coords = this._cells[key].coords;

      if (this.cellLeave) {
        this.cellLeave(bounds, coords);
      }

      this.fire('cellleave', {
        bounds: bounds,
        coords: coords
      });
    }
  },

  _addCell: function _addCell(coords) {
    // wrap cell coords if necessary (depending on CRS)
    this._wrapCoords(coords);

    // generate the cell key
    var key = this._cellCoordsToKey(coords);

    // get the cell from the cache
    var cell = this._cells[key];
    // if this cell should be shown as isnt active yet (enter)

    if (cell && !this._activeCells[key]) {
      if (this.cellEnter) {
        this.cellEnter(cell.bounds, coords);
      }

      this.fire('cellenter', {
        bounds: cell.bounds,
        coords: coords
      });

      this._activeCells[key] = cell;
    }

    // if we dont have this cell in the cache yet (create)
    if (!cell) {
      cell = {
        coords: coords,
        bounds: this._cellCoordsToBounds(coords)
      };

      this._cells[key] = cell;
      this._activeCells[key] = cell;

      if (this.createCell) {
        this.createCell(cell.bounds, coords);
      }

      this.fire('cellcreate', {
        bounds: cell.bounds,
        coords: coords
      });
    }
  },

  _wrapCoords: function _wrapCoords(coords) {
    coords.x = this._wrapLng ? L.Util.wrapNum(coords.x, this._wrapLng) : coords.x;
    coords.y = this._wrapLat ? L.Util.wrapNum(coords.y, this._wrapLat) : coords.y;
  }

  // get the global cell coordinates range for the current zoom
  // @TODO enable at Leaflet 0.8
  // _getCellNumBounds: function () {
  //   // @TODO for Leaflet 0.8
  //   // var bounds = this._map.getPixelWorldBounds(),
  //   //     size = this._getCellSize();
  //   //
  //   // return bounds ? L.bounds(
  //   //     bounds.min.divideBy(size).floor(),
  //   //     bounds.max.divideBy(size).ceil().subtract([1, 1])) : null;
  // }

});

exports.VirtualGrid = VirtualGrid;
L.VirtualGrid = VirtualGrid;

function virtualGrid(options) {
  return new L.VirtualGrid(options);
}

;

L.virtualGrid = virtualGrid;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"leaflet":"leaflet"}],51:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.serialize = serialize;
exports.applyProxy = applyProxy;
exports.request = request;
exports.jsonp = jsonp;

var _Support = require('./Support');

var _Support2 = _interopRequireDefault(_Support);

var _Util = require('./Util');

var L = global.L || require('leaflet');

var callbacks = 0;

/**
 * @param  {Object} params
 * @return {String}
 */

function serialize(params) {
  var data = '';

  // params.format = params.format || 'application/json';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var param = params[key];
      var type = Object.prototype.toString.call(param);
      var value = undefined;

      if (data.length) {
        data += '&';
      }

      if (type === '[object Array]') {
        value = Object.prototype.toString.call(param[0]) === '[object Object]' ? JSON.stringify(param) : param.join(',');
      } else if (type === '[object Object]') {
        value = JSON.stringify(param);
      } else if (type === '[object Date]') {
        value = param.valueOf();
      } else {
        value = param;
      }

      data += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
  }

  return data;
}

/**
 * @param  {String} proxy
 * @param  {String} url
 * @return {String}
 */

function applyProxy(proxy, url) {
  if (proxy) {
    return proxy + (/\=$/.test(proxy) ? '' : '?') + encodeURIComponent(url);
  } else return url;
}

/**
 * @param  {Function} callback
 * @param  {*=}       context
 * @param  {Boolean=} text
 * @return {XMLHttpRequest}
 */
function createRequest(callback, context) {
  var text = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var httpRequest = new window.XMLHttpRequest();

  httpRequest.onerror = function (e) {
    httpRequest.onreadystatechange = L.Util.falseFn;

    callback.call(context, {
      error: {
        code: 500,
        message: 'XMLHttpRequest error'
      }
    }, null);
  };

  httpRequest.onreadystatechange = function () {
    var response = undefined,
        error = undefined;

    if (httpRequest.readyState === 4) {
      if (text) {
        response = httpRequest.responseText;
        error = null;
      } else {
        try {
          response = JSON.parse(httpRequest.responseText);
        } catch (e) {
          response = null;
          error = {
            code: 500,
            message: 'Could not parse response as JSON. ' + 'This could also be caused by a CORS or XMLHttpRequest error.',
            content: httpRequest.responseText
          };
        }
      }

      if (!error && response.error) {
        error = response.error;
        response = null;
      }

      httpRequest.onerror = L.Util.falseFn;

      callback.call(context, error, response);
    }
  };

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest}
 */
function xmlHttpPost(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('POST', url);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(serialize(params));

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest}
 */
function xmlHttpGet(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  httpRequest.open('GET', url + '?' + serialize(params), true);
  httpRequest.send(null);

  return httpRequest;
}

/**
 * AJAX handlers for CORS (modern browsers) or JSONP (older browsers)
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {XMLHttpRequest|Object}
 */

function request(url, params, callback, context) {
  var httpRequest = createRequest(callback, context, params.f === 'text');
  delete params.f;

  var paramString = serialize(params);
  var requestLength = (url + '?' + paramString).length;

  console.log(url + '?' + paramString);

  // request is less then 2000 characters and the browser supports CORS,
  // make GET request with XMLHttpRequest
  if (requestLength <= 2000 && _Support2['default'].cors) {
    httpRequest.open('GET', url + '?' + paramString);
    httpRequest.send(null);

    // request is less more then 2000 characters and the browser supports CORS,
    // make POST request with XMLHttpRequest
  } else if (requestLength > 2000 && _Support2['default'].cors) {
      httpRequest.open('POST', url);
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.send(paramString);

      // request is less more then 2000 characters and the browser does not
      // support CORS, make a JSONP request
    } else if (requestLength <= 2000 && !_Support2['default'].cors) {
        return jsonp(url, params, callback, context);

        // request is longer then 2000 characters and the browser does not
        // support CORS, log a warning
      } else {
          (0, _Util.warn)('a request to ' + url + ' was longer then 2000 characters and ' + 'this browser cannot make a cross-domain post request. Please use ' + 'a proxy http://esri.github.io/esri-leaflet/api-reference/request.html');
          return;
        }

  return httpRequest;
}

/**
 * @param  {String}   url
 * @param  {Object}   params
 * @param  {Function} callback
 * @param  {*=}       context
 * @return {Object}
 */

function jsonp(url, params, callback, context) {
  global._OgcLeafletCallbacks = global._OgcLeafletCallbacks || {};
  var callbackId = 'c' + callbacks;

  params.callback = 'window._EsriLeafletCallbacks.' + callbackId;

  var script = L.DomUtil.create('script', null, document.body);
  script.type = 'text/javascript';
  script.src = url + '?' + serialize(params);
  script.id = callbackId;

  global._EsriLeafletCallbacks[callbackId] = function (response) {
    if (global._EsriLeafletCallbacks[callbackId] !== true) {
      var error = undefined;
      var responseType = Object.prototype.toString.call(response);

      if (!(responseType === '[object Object]' || responseType === '[object Array]')) {
        error = {
          error: {
            code: 500,
            message: 'Expected array or object as JSONP response'
          }
        };
        response = null;
      }

      if (!error && response.error) {
        error = response;
        response = null;
      }

      callback.call(context, error, response);
      global._EsriLeafletCallbacks[callbackId] = true;
    }
  };

  callbacks++;

  return {
    id: callbackId,
    url: script.src,
    abort: function abort() {
      global._EsriLeafletCallbacks._callback[callbackId]({
        code: 0,
        message: 'Request aborted.'
      });
    }
  };
}

var get = _Support2['default'].cors ? xmlHttpGet : jsonp;
exports.get = get;
get.CORS = xmlHttpGet;
get.JSONP = jsonp;

// choose the correct AJAX handler depending on CORS support
// export the Request object to call the different handlers for debugging
var Request = {
  request: request,
  get: get,
  post: xmlHttpPost
};

exports.Request = Request;
// always use XMLHttpRequest for posts
exports.post = xmlHttpPost;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Support":55,"./Util":62,"babel-runtime/helpers/interop-require-default":13,"leaflet":"leaflet"}],52:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.service = service;

var _Support = require('../Support');

var _Util = require('../Util');

var _Request = require('../Request');

/**
 * @class ogc.Services.Service
 * @extends {Events}
 */
var L = global.L || require('leaflet');

var Service = (function () {

  /**
   * @param  {Object} options
   */

  function Service() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Service);

    this.options = {
      proxy: false,
      useCors: _Support.cors
    };

    options = options || {};
    this._requestQueue = [];
    this._authenticating = false;
    L.Util.setOptions(this, options);
    this.options.url = (0, _Util.cleanUrl)(this.options.url);
  }

  _createClass(Service, [{
    key: 'get',
    value: function get(path, params, callback, context) {
      return this._request('get', path, params, callback, context);
    }
  }, {
    key: 'post',
    value: function post(path, params, callback, context) {
      return this._request('post', path, params, callback, context);
    }
  }, {
    key: 'request',
    value: function request(path, params, callback, context) {
      return this._request('request', path, params, callback, context);
    }
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this._request('get', '', {}, callback, context);
    }
  }, {
    key: 'authenticate',
    value: function authenticate(token) {
      this._authenticating = false;
      this.options.token = token;
      this._runQueue();
      return this;
    }
  }, {
    key: '_request',
    value: function _request(method, path, params, callback, context) {
      this.fire('requeststart', {
        url: this.options.url + path,
        params: params,
        method: method
      }, true);

      var wrappedCallback = this._createServiceCallback(method, path, params, callback, context);

      if (this.options.token) {
        params.token = this.options.token;
      }

      if (this._authenticating) {
        this._requestQueue.push([method, path, params, callback, context]);
        return;
      } else {
        var url = (0, _Request.applyProxy)(this.options.proxy, this.options.url + path);

        if ((method === 'get' || method === 'request') && !this.options.useCors) {
          return _Request.Request.get.JSONP(url, params, wrappedCallback);
        } else {
          return _Request.Request[method](url, params, wrappedCallback);
        }
      }
    }
  }, {
    key: '_createServiceCallback',
    value: function _createServiceCallback(method, path, params, callback, context) {
      return L.Util.bind(function (error, response) {
        if (error && (error.code === 499 || error.code === 498)) {
          this._authenticating = true;

          this._requestQueue.push([method, path, params, callback, context]);

          // fire an event for users to handle and re-authenticate
          this.fire('authenticationrequired', {
            authenticate: L.Util.bind(this.authenticate, this)
          }, true);

          // if the user has access to a callback they can handle the auth error
          error.authenticate = L.Util.bind(this.authenticate, this);
        }

        callback.call(context, error, response);

        if (error) {
          this.fire('requesterror', {
            url: this.options.url + path,
            params: params,
            message: error.message,
            code: error.code,
            method: method
          }, true);
        } else {
          this.fire('requestsuccess', {
            url: this.options.url + path,
            params: params,
            response: response,
            method: method
          }, true);
        }

        this.fire('requestend', {
          url: this.options.url + path,
          params: params,
          method: method
        }, true);
      }, this);
    }
  }, {
    key: '_runQueue',
    value: function _runQueue() {
      for (var i = this._requestQueue.length - 1; i >= 0; i--) {
        var request = this._requestQueue[i];
        var method = request.shift();
        this[method].apply(this, request);
      }
      this._requestQueue = [];
    }
  }]);

  return Service;
})();

exports.Service = Service;

_Object$getOwnPropertyNames(L.Mixin.Events).forEach(function (name) {
  if (name !== "constructor") {
    _Object$defineProperty(Service.prototype, name, _Object$getOwnPropertyDescriptor(L.Mixin.Events, name));
  }
});

function service(options) {
  return new Service(options);
}

exports['default'] = service;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Request":51,"../Support":55,"../Util":62,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/get-own-property-descriptor":4,"babel-runtime/core-js/object/get-own-property-names":5,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"leaflet":"leaflet"}],53:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.wfsService = wfsService;

var _Service2 = require('./Service');

var _TasksGetFeature = require('../Tasks/GetFeature');

var _TasksGetCapabilities = require('../Tasks/GetCapabilities');

var _TasksDescribeFeatureType = require('../Tasks/DescribeFeatureType');

/**
 * @class ogc.Services.WFS
 * @extends {ogc.Services.Service}
 */
var L = global.L || require('leaflet');

var WFSService = (function (_Service) {
  _inherits(WFSService, _Service);

  /**
   * @param  {Object} options
   */

  function WFSService(options) {
    _classCallCheck(this, WFSService);

    _get(Object.getPrototypeOf(WFSService.prototype), 'constructor', this).call(this, options);
  }

  /**
   * @return {ogc.Tasks.GetFeature}
   */

  _createClass(WFSService, [{
    key: 'getFeature',
    value: function getFeature() {
      return (0, _TasksGetFeature.getFeature)(this);
    }
  }, {
    key: 'query',
    value: function query() {
      return this.getFeature();
    }

    /**
     * @return {ogc.Tasks.DescribeFeatureType}
     */
  }, {
    key: 'describeFeatureType',
    value: function describeFeatureType() {
      return (0, _TasksDescribeFeatureType.describeFeatureType)(this);
    }

    /**
     * @return {ogc.Tasks.GetCapabilities}
     */
  }, {
    key: 'getCapabilities',
    value: function getCapabilities() {
      return (0, _TasksGetCapabilities.getCapabilities)(this).service('WFS').version('2.0.0');
    }

    /**
     * @param  {Function=} callback
     * @param  {*=}        context
     * @return {ogc.Tasks.GetCapabilities}
     */
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      var task = this.getCapabilities(this);
      if (arguments.length !== 0) {
        return task.run(callback, context);
      } else {
        return task;
      }
    }
  }]);

  return WFSService;
})(_Service2.Service);

exports.WFSService = WFSService;

function wfsService(options) {
  return new WFSService(options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Tasks/DescribeFeatureType":56,"../Tasks/GetCapabilities":57,"../Tasks/GetFeature":58,"./Service":52,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],54:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.wmsService = wmsService;

var _Service2 = require('./Service');

var _TasksGetCapabilities = require("../Tasks/GetCapabilities");

var _TasksGetFeatureInfo = require("../Tasks/GetFeatureInfo");

var _TasksGetLegendGraphic = require("../Tasks/GetLegendGraphic");

/**
 * @class OgcLeaflet.Services.WMSService
 * @extends {OgcLeaflet.Services.Service}
 */
var L = global.L || require('leaflet');

var WMSService = (function (_Service) {
  _inherits(WMSService, _Service);

  /**
   * @param  {Object} options
   */

  function WMSService(options) {
    _classCallCheck(this, WMSService);

    _get(Object.getPrototypeOf(WMSService.prototype), 'constructor', this).call(this, options);
  }

  /**
   * @return {OgcLeaflet.Tasks.GetCapabilities}
   */

  _createClass(WMSService, [{
    key: 'getCapabilities',
    value: function getCapabilities() {
      return (0, _TasksGetCapabilities.getCapabilities)(this);
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {GetCapabilites}
     */
  }, {
    key: 'metadata',
    value: function metadata(callback, context) {
      return this.getCapabilities().run(callback, context);
    }

    /**
     * @return {OgcLeaflet.Tasks.GetCapabilities}
     */
  }, {
    key: 'getFeatureInfo',
    value: function getFeatureInfo() {
      return (0, _TasksGetFeatureInfo.getFeatureInfo)(this);
    }

    // alias
  }, {
    key: 'identify',
    value: function identify() {
      return this.getFeatureInfo();
    }

    /**
     * @return {OgcLeaflet.Tasks.GetLegendGraphic}
     */
  }, {
    key: 'getLegendGraphic',
    value: function getLegendGraphic() {
      return (0, _TasksGetLegendGraphic.getLegendGraphic)(this);
    }

    // alias
  }, {
    key: 'legend',
    value: function legend() {
      return this.getLegendGraphic();
    }
  }]);

  return WMSService;
})(_Service2.Service);

exports.WMSService = WMSService;

function wmsService(options) {
  return new WMSService(options);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Tasks/GetCapabilities":57,"../Tasks/GetFeatureInfo":59,"../Tasks/GetLegendGraphic":60,"./Service":52,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var cors = window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest();
exports.cors = cors;
var pointerEvents = document.documentElement.style.pointerEvents === '';
exports.pointerEvents = pointerEvents;
var WMS_VERSION = '1.3.0';

exports.WMS_VERSION = WMS_VERSION;
var Support = {
  cors: cors,
  pointerEvents: pointerEvents
};

exports.Support = Support;
exports['default'] = Support;

},{}],56:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.describeFeatureType = describeFeatureType;

var _Task2 = require('./Task');

/**
 * @class OgcLeaflet.Tasks.DescribeFeatureType
 * @extends {OgcLeaflet.Tasks.Task}
 */
var L = global.L || require('leaflet');

var DescribeFeatureType = (function (_Task) {
  _inherits(DescribeFeatureType, _Task);

  /**
   * @param  {Object|String} endpoint
   */

  function DescribeFeatureType(endpoint) {
    _classCallCheck(this, DescribeFeatureType);

    _get(Object.getPrototypeOf(DescribeFeatureType.prototype), 'constructor', this).call(this, endpoint);
    L.Util.extend(this.params, {
      service: 'WFS',
      request: 'DescribeFeatureType'
    });
  }

  /**
   * @param  {Array.<String>|String}  layers
   * @return {DescribeFeatureType}
   */

  _createClass(DescribeFeatureType, [{
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.typeNames = _layers;
      return this;
    }
  }]);

  return DescribeFeatureType;
})(_Task2.Task);

exports.DescribeFeatureType = DescribeFeatureType;

function describeFeatureType(endpoint) {
  return new DescribeFeatureType(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Task":61,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],57:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getCapabilities = getCapabilities;

var _wmsCapabilities = require('wms-capabilities');

var _Task2 = require('./Task');

/**
 * @class OgcLeaflet.Tasks.GetCapabilities
 * @extends {OgcLeaflet.Tasks.Task}
 */

var GetCapabilities = (function (_Task) {
  _inherits(GetCapabilities, _Task);

  /**
   * @param  {Object|String} endpoint
   */

  function GetCapabilities(endpoint) {
    _classCallCheck(this, GetCapabilities);

    _get(Object.getPrototypeOf(GetCapabilities.prototype), 'constructor', this).call(this, endpoint);

    L.Util.extend(this.params, {
      request: 'GetCapabilities',
      f: 'text'
    });

    if (this._service) {
      this.service(this._service.options.type);
    }
  }

  /**
   * @param  {String} type
   * @return {GetCapabilities}
   */

  _createClass(GetCapabilities, [{
    key: 'service',
    value: function service() {
      var type = arguments.length <= 0 || arguments[0] === undefined ? 'WMS' : arguments[0];

      this.params.service = type;
      return this;
    }

    /**
     * @param  {String} xml
     * @return {Object}
     */
  }, {
    key: '_parseCapabilities',
    value: function _parseCapabilities(xml) {
      return new _wmsCapabilities.WMSCapabilities(xml).toJSON();
    }

    /**
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {GetCapabilites}
     */
  }, {
    key: 'run',
    value: function run(callback, context) {
      var _this = this;

      return _get(Object.getPrototypeOf(GetCapabilities.prototype), 'request', this).call(this, function (error, capabilities) {
        // parse capabilities here
        if (!error) {
          capabilities = _this._parseCapabilities(capabilities);
        }
        callback.call(context, error, capabilities);
      }, context);
    }
  }]);

  return GetCapabilities;
})(_Task2.Task);

exports.GetCapabilities = GetCapabilities;

function getCapabilities(endpoint) {
  return new GetCapabilities(endpoint);
}

},{"./Task":61,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"wms-capabilities":38}],58:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getFeature = getFeature;

var _Task2 = require('./Task');

var _Util = require('../Util');

/**
 * @class OgcLeaflet.Tasks.GetFeature
 */
var L = global.L || require('leaflet');

var GetFeature = (function (_Task) {
  _inherits(GetFeature, _Task);

  /**
   * @param  {String|Service} endpoint
   */

  function GetFeature(endpoint) {
    _classCallCheck(this, GetFeature);

    _get(Object.getPrototypeOf(GetFeature.prototype), 'constructor', this).call(this, endpoint);

    /**
     * @type {Object}
     */
    L.Util.extend(this.params, {
      srs: 'EPSG:4326',
      request: 'GetFeature',
      outputFormat: 'application/json'
    });

    if (this._service && this._service.options) {
      this.version(endpoint.options.version);
    }
  }

  /**
   * @param  {String} version
   * @return {GetFeature}
   */

  _createClass(GetFeature, [{
    key: 'version',
    value: function version() {
      var _version = arguments.length <= 0 || arguments[0] === undefined ? '2.0.0' : arguments[0];

      this.params.version = _version;
      return this;
    }

    /**
     * @param  {Number} max
     * @return {GetFeature}
     */
  }, {
    key: 'limit',
    value: function limit() {
      var max = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (max) {
        this[parseFloat(this.params.version) >= 2 ? 'count' : 'maxFeatures'] = max;
      }
      return this;
    }

    /**
     * @param  {String} srs
     * @return {GetFeature}
     */
  }, {
    key: 'srs',
    value: function srs(_srs) {
      this.params.srsName = _srs;
      return this;
    }

    /**
     * @param  {String} srs
     * @return {GetFeature}
     */
  }, {
    key: 'sr',
    value: function sr(srs) {
      return this.srs(srs);
    }

    /**
     * @param  {Array.<String>|String}  layers
     * @return {GetFeature}
     */
  }, {
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.typeName = _layers;
      return this;
    }

    /**
     * @param  {String}   attribute
     * @param  {Boolean=} descending
     * @return {GetFeature}
     */
  }, {
    key: 'sortBy',
    value: function sortBy(attribute) {
      var descending = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      this.params.sortBy = attribute;
      if (descending) {
        this.params.sortBy += '+D';
      }
      return this;
    }

    /**
     * @param  {String|Array.<String>} property
     * @return {GetFeature}
     */
  }, {
    key: 'property',
    value: function property() {
      var _property = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      if (L.Util.isArray(_property)) {
        _property = _property.join(',');
      }
      this.params.propertyName = _property;
      return this;
    }

    /**
     * @param  {String|Array.<String>} fields
     * @return {GetFeature}
     */
  }, {
    key: 'fields',
    value: function fields(_fields) {
      return this.property(_fields);
    }

    /**
     * @param  {L.LatLngBounds|L.Bounds} bounds
     * @return {GetFeature}
     */
  }, {
    key: 'bounds',
    value: function bounds(_bounds) {
      this.params.cql_filter = this._getBBoxFilter(_bounds);
      return this;
    }

    /**
     * @param  {Array.<Number>} bbox
     * @return {GetFeature}
     */
  }, {
    key: 'bbox',
    value: function bbox(_bbox) {
      this.params.bbox = _bbox.join(',');
      return this;
    }

    /**
     * @param  {L.LatLngBounds} bounds
     * @param  {L.CRS}          crs
     * @return {Array.<Number>}
     */
  }, {
    key: '_boundsToBBox',
    value: function _boundsToBBox(bounds, crs) {
      var nw = crs.project(bounds.getNorthWest());
      var se = crs.project(bounds.getSouthEast());

      if (parseFloat(this.params.version) >= 1.3 && crs === L.CRS.EPSG4326) {
        return [se.y, nw.x, nw.y, se.x];
      } else {
        return [nw.x, se.y, se.x, nw.y];
      }
    }

    /**
    * BBox CQL filter
    * @param  {L.LatLngBounds} bounds
    * @return {String}
    */
  }, {
    key: '_getBBoxFilter',
    value: function _getBBoxFilter(bounds) {
      var bbox = this._boundsToBBox(bounds, this._map.options.crs);
      return 'BBOX(the_geom,' + bbox + ',\'' + this.params.srs + '\')';
    }

    /**
     * @param  {L.Map} map
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'on',
    value: function on(map) {
      _get(Object.getPrototypeOf(GetFeature.prototype), 'on', this).call(this, map);
      this.srs(map.options.crs.code);
      return this;
    }
  }, {
    key: 'where',
    value: function where(_where) {
      return this.filter(_where);
    }
  }, {
    key: 'filter',
    value: function filter() {
      return this;
    }
  }, {
    key: 'run',
    value: function run(callback, context) {
      return this.request(callback, context);
    }
  }]);

  return GetFeature;
})(_Task2.Task);

exports.GetFeature = GetFeature;

function getFeature(endpoint) {
  return new GetFeature(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Util":62,"./Task":61,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],59:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getFeatureInfo = getFeatureInfo;

var _Task2 = require('./Task');

var _Util = require('../Util');

var _Support = require('../Support');

var L = global.L || require('leaflet');

var DEFAULT_WMS_VERSION = 1.3;

/**
 * @class ogc.Tasks.GetFeatureInfo
 * @extends {ogc.Tasks.Task}
 */

var GetFeatureInfo = (function (_Task) {
  _inherits(GetFeatureInfo, _Task);

  /**
   * @param  {ObgLeaflet.Services.WMS|String} endpoint
   */

  function GetFeatureInfo(endpoint) {
    _classCallCheck(this, GetFeatureInfo);

    _get(Object.getPrototypeOf(GetFeatureInfo.prototype), 'constructor', this).call(this, endpoint);

    L.Util.extend(this.params, {
      service: 'WMS',
      version: _Support.WMS_VERSION,
      info_format: 'application/json',
      request: 'GetFeatureInfo',
      crs: 'EPSG:4326',
      buffer: 0
    });
  }

  /**
   * @param  {String} srs
   * @return {GetFeatureInfo}
   */

  _createClass(GetFeatureInfo, [{
    key: 'srs',
    value: function srs(_srs) {
      this.params[parseFloat(this.params.version) >= DEFAULT_WMS_VERSION ? 'crs' : 'srs'] = _srs;
      return this;
    }
  }, {
    key: 'crs',
    value: function crs(_crs) {
      return this.srs(_crs);
    }

    /**
     * @param  {L.Map} map
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'on',
    value: function on(map) {
      _get(Object.getPrototypeOf(GetFeatureInfo.prototype), 'on', this).call(this, map);

      this.size(map.getSize());
      this.bbox(this._boundsToBBox(map.getBounds(), map.options.crs));
      this.srs(map.options.crs.code);

      return this;
    }

    /**
     * @param  {L.LatLngBounds} bounds
     * @param  {L.CRS}          crs
     * @return {Array.<Number>}
     */
  }, {
    key: '_boundsToBBox',
    value: function _boundsToBBox(bounds, crs) {
      var nw = crs.project(bounds.getNorthWest());
      var se = crs.project(bounds.getSouthEast());

      if (parseFloat(this.params.version) >= 1.3 && crs === L.CRS.EPSG4326) {
        return [se.y, nw.x, nw.y, se.x];
      } else {
        return [nw.x, se.y, se.x, nw.y];
      }
    }

    /**
     * @param  {L.LatLng} latlng
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'at',
    value: function at(latlng) {
      var px = undefined;
      var isv13 = parseFloat(this.params.version) >= DEFAULT_WMS_VERSION;
      if (latlng instanceof L.LatLng) {
        if (this._map) {
          // project
          px = this._map.latLngToContainerPoint(latlng);
        } else {
          throw new Error('Cannot project latlng to map pixels');
        }
      } else {
        px = latlng;
      }

      this.params[isv13 ? 'I' : 'X'] = px.x;
      this.params[isv13 ? 'J' : 'Y'] = px.y;

      return this;
    }

    /**
     * @param  {Number} buffer
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'buffer',
    value: function buffer() {
      var _buffer = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this.params.buffer = _buffer;
      return this;
    }

    /**
     * Buffer alias
     * @param  {Number} tolerance
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'tolerance',
    value: function tolerance(_tolerance) {
      return this.buffer(_tolerance);
    }

    /**
     * @param  {Array.<String>|String} layers
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'layers',
    value: function layers() {
      var _layers = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (L.Util.isArray(_layers)) {
        _layers = _layers.join(',');
      }
      this.params.query_layers = this.params.layers = _layers;
      return this;
    }

    /**
     * @param  {Number} limit
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'limit',
    value: function limit() {
      var _limit = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this.params.feature_count = _limit;
      return this;
    }

    /**
     * @param  {L.Point} size
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'size',
    value: function size(_size) {
      this.params.width = _size.x;
      this.params.height = _size.y;
      return this;
    }

    /**
     * @param  {Array.<String>|String} properties
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'returnProperties',
    value: function returnProperties() {
      var properties = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      this.params.propertyName = L.Util.isArray(properties) ? properties.join(',') : properties;
      return this;
    }

    /**
     * @param  {L.LatLngBounds|L.Bounds} bounds
     * @param  {L.Map=}                  map
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'bounds',
    value: function bounds(_bounds, map) {
      map = map || this._map;
      if (map) {
        return this.bbox(this._boundsToBBox(_bounds, this._map.options.crs));
      } else {
        throw new Error('Cannot project bounds');
      }
    }

    /**
     * @param  {Array.<Number>} bbox
     * @return {GetFeatureInfo}
     */
  }, {
    key: 'bbox',
    value: function bbox(_bbox) {
      this.params.bbox = _bbox.join(',');
      return this;
    }
  }, {
    key: 'run',
    value: function run(callback, context) {
      return this.request(callback, context);
    }
  }]);

  return GetFeatureInfo;
})(_Task2.Task);

exports.GetFeatureInfo = GetFeatureInfo;

function getFeatureInfo(endpoint) {
  return new GetFeatureInfo(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Support":55,"../Util":62,"./Task":61,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],60:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getLegendGraphic = getLegendGraphic;

var _Task2 = require('./Task');

var _Request = require('../Request');

var _Support = require('../Support');

/**
 * @class ogc.Tasks.GetLegendGrapic
 * @extends {ogc.Tasks.Task}
 */
var L = global.L || require('leaflet');

var GetLegendGraphic = (function (_Task) {
  _inherits(GetLegendGraphic, _Task);

  /**
   * @param  {ogc.Services.Service|String} endpoint
   */

  function GetLegendGraphic(endpoint) {
    _classCallCheck(this, GetLegendGraphic);

    _get(Object.getPrototypeOf(GetLegendGraphic.prototype), 'constructor', this).call(this, endpoint);

    if (endpoint.options) {
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
      version: _Support.WMS_VERSION
    });
  }

  /**
   * @param  {String} format
   * @return {GetLegendGraphic}
   */

  _createClass(GetLegendGraphic, [{
    key: 'format',
    value: function format(_format) {
      this.params.format = _format;
      return this;
    }

    /**
     * @param  {String} layer
     * @return {GetLegendGraphic}
     */
  }, {
    key: 'layer',
    value: function layer(_layer) {
      this.params.layer = _layer;
      return this;
    }

    /**
     * @param  {Array.<String>|String} layers
     * @return {GetLegendGraphic}
     */
  }, {
    key: 'layers',
    value: function layers(_layers) {
      this._layers = L.Util.isArray(_layers) ? _layers : [_layers];
      return this;
    }

    /**
     * @static
     * @param  {Object} options
     * @return {String}
     */
  }, {
    key: 'styles',

    /**
     * @param  {Object} styles
     * @return {GetLegendGraphic}
     */
    value: function styles() {
      var _styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this.params.legend_options = GetLegendGraphic._formatLegendOptions(L.Util.extend({}, this.defaultLegendStyles, _styles));
      return this;
    }

    /**
     * @param  {L.Point|Object} size
     * @return {GetLegendGraphic}
     */
  }, {
    key: 'size',
    value: function size(_size) {
      this.params.width = _size.x;
      this.params.height = _size.y;
      return this;
    }

    /**
     * Generates graphics url
     * @param  {String} layer
     * @return {String}
     */
  }, {
    key: '_getLegendUrl',
    value: function _getLegendUrl(layer) {
      this.layer(layer);
      var url = this.options.proxy ? this.options.proxy + '?' + this.options.url : this.options.url;
      return url + '?' + (0, _Request.serialize)(this.params);
    }

    /**
     * @override
     * @param  {Function} callback
     * @param  {*=}       context
     * @return {GetLegendGraphic}
     */
  }, {
    key: 'request',
    value: function request(callback, context) {
      var _this = this;

      if (!(this._layers || this.params.layer)) {
        throw new Error('GetLegendGraphic: layer must be defined');
      }

      L.Util.requestAnimFrame(function () {
        var layers = _this._layers || [_this.params.layer];
        _this.styles();
        callback.call(context, null, {
          layers: layers.map(function (layer) {
            return {
              name: layer,
              url: _this._getLegendUrl(layer)
            };
          }, _this)
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
  }, {
    key: 'run',
    value: function run(callback, context) {
      return this.request(callback, context);
    }
  }], [{
    key: '_formatLegendOptions',
    value: function _formatLegendOptions(options) {
      var paramString = '';
      var params = ['dpi', 'fontAntiAliasing', 'fontName', 'bgColor', 'fontSize', 'fontStyle', 'dx', 'dy', 'mx', 'my', 'fontColor', 'forceRule', 'borderColor'];

      for (var i = 0, len = params.length; i < len; i++) {
        var key = params[i];
        if (options.hasOwnProperty(key)) {
          paramString += key + ':' + options[key] + ';';
        }
      }
      return paramString;
    }
  }]);

  return GetLegendGraphic;
})(_Task2.Task);

exports.GetLegendGraphic = GetLegendGraphic;

function getLegendGraphic(endpoint) {
  return new GetLegendGraphic(endpoint);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Request":51,"../Support":55,"./Task":61,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"babel-runtime/helpers/get":10,"babel-runtime/helpers/inherits":11,"leaflet":"leaflet"}],61:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.task = task;

var _Support = require('../Support');

var _Util = require('../Util');

var _Request = require('../Request');

/**
 * @class ogc.Tasks.Task
 */
var L = global.L || require('leaflet');

var Task = (function () {

  /**
   * @param  {ogc.Services.Service|String} endpoint
   */

  function Task(endpoint) {
    _classCallCheck(this, Task);

    this.options = {
      proxy: false,
      useCors: _Support.cors
    };

    this.path = '';

    // endpoint can be either a url (and options) for an
    // OGC Service or an instance of OgcLeaflet.Service
    if (endpoint.request && endpoint.options) {
      this._service = endpoint;
      L.Util.setOptions(this, endpoint.options);
    } else {
      L.Util.setOptions(this, endpoint);
      this.options.url = (0, _Util.cleanUrl)(endpoint.url);
    }

    // clone default params into this object
    this.params = L.Util.extend({}, this.params || {});

    // generate setter methods based on the setters object
    // implimented a child class
    if (this.setters) {
      for (var setter in this.setters) {
        var param = this.setters[setter];
        this[setter] = this.generateSetter(param, this);
      }
    }
  }

  // Generate a method for each methodName:paramName in the setters for this task.

  _createClass(Task, [{
    key: 'generateSetter',
    value: function generateSetter(param, context) {
      return L.Util.bind(function (value) {
        this.params[param] = value;
        return this;
      }, context);
    }
  }, {
    key: 'token',
    value: function token(_token) {
      if (this._service) {
        this._service.authenticate(_token);
      } else {
        this.params.token = _token;
      }
      return this;
    }

    /**
     * @param  {L.Map} map
     * @return {ogc.Tasks.Task}
     */
  }, {
    key: 'on',
    value: function on(map) {
      this._map = map;
      return this;
    }
  }, {
    key: 'request',
    value: function request(callback, context) {
      if (this._service) {
        return this._service.request(this.path, this.params, callback, context);
      }
      return this._request('request', this.path, this.params, callback, context);
    }
  }, {
    key: '_request',
    value: function _request(method, path, params, callback, context) {
      var proxy = this.options.proxy;
      var url = (0, _Request.applyProxy)(this.options.proxy, this.options.url + path);

      if ((method === 'get' || method === 'request') && !this.options.useCors) {
        return _Request.Request.get.JSONP(url, params, callback, context);
      }

      return _Request.Request[method](url, params, callback, context);
    }
  }]);

  return Task;
})();

exports.Task = Task;

function task(options) {
  return new Task(options);
}

exports['default'] = task;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Request":51,"../Support":55,"../Util":62,"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8,"leaflet":"leaflet"}],62:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.shallowClone = shallowClone;
exports.cleanUrl = cleanUrl;
exports.boundsToBBox = boundsToBBox;
exports.reduce = reduce;
var L = global.L || require('leaflet');

// checks if 2 x,y points are equal
function pointsEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// determine if polygon ring coordinates are clockwise.
// clockwise signifies outer ring, counter-clockwise an inner ring
// or hole. this logic was found at
// http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order
function ringIsClockwise(ringToTest) {
  var total = 0;
  var i = 0;
  var rLength = ringToTest.length;
  var pt1 = ringToTest[i];
  var pt2 = undefined;
  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }
  return total >= 0;
}

// shallow object clone for feature properties and attributes
// from http://jsperf.com/cloning-an-object/2

function shallowClone(obj) {
  var target = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i];
    }
  }
  return target;
}

// trim url whitespace and add a trailing slash if needed

function cleanUrl(url) {
  // trim leading and trailing spaces, but not spaces inside the url
  url = L.Util.trim(url);

  // add a trailing slash to the url if the user omitted it
  if (url[url.length - 1] !== '/') {
    url += '/';
  }

  return url;
}

/**
 * @param  {L.LatLngBounds|L.Bounds} bounds
 * @return {Array.<Number>}
 */

function boundsToBBox(bounds) {
  return bounds._min && bounds._max ? [bounds._min.x, bounds._min.y, bounds._max.x, bounds._max.y] : [bounds._southWest.lng, bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat];
}

/**
 * @example
 * <code>
 * reduce(
 *   [1, 2, 3], [], function(curr, item, cb){
 *     setTimeout(function(){
 *       cb(null, curr.concat([item + 10]));
 *     }, 200);
 *   }, function(err, result) {
 *     console.log(result); // [11, 12, 13]
 * });
 * </code>
 * @param  {Array.<*>} values
 * @param  {*}         initial
 * @param  {Function}  fn       process item fn(memo, item, callback)
 * @param  {Function}  done     queue complete
 * @param  {*=}        context
 */

function reduce(values, initial, fn, cb, context) {
  var curr = initial;

  function next(index) {
    var sync = true;
    for (var i = index; i < values.length; i++) {
      var done = false;
      fn(curr, values[i], function (err, val) {
        if (err) {
          return cb.call(context, err, curr);
        }
        done = true;
        curr = val;
        if (!sync) {
          next(i + 1);
        }
      });
      sync = done;
      if (!sync) {
        return;
      }
    }
    cb.call(context, null, curr);
  }

  next(0);
}

var Util = {
  shallowClone: shallowClone,
  cleanUrl: cleanUrl,
  boundsToBBox: boundsToBBox,
  reduce: reduce
};

exports.Util = Util;
exports['default'] = Util;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"leaflet":"leaflet"}],63:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// import base

var _Support = require('./Support');

var _Util = require('./Util');

var _Request = require('./Request');

// import tasks

var _TasksTask = require('./Tasks/Task');

var _TasksGetFeature = require('./Tasks/GetFeature');

var _TasksGetCapabilities = require('./Tasks/GetCapabilities');

var _TasksDescribeFeatureType = require('./Tasks/DescribeFeatureType');

var _TasksGetFeatureInfo = require('./Tasks/GetFeatureInfo');

var _TasksGetLegendGraphic = require('./Tasks/GetLegendGraphic');

//import { Find, find } from './Tasks/Find';
//import { Identify, identify } from './Tasks/Identify';
//import { IdentifyFeatures, identifyFeatures } from './Tasks/IdentifyFeatures';
//import { IdentifyImage, identifyImage } from './Tasks/IdentifyImage';

// import services

var _ServicesService = require('./Services/Service');

var _ServicesWFS = require('./Services/WFS');

var _ServicesWMS = require('./Services/WMS');

//import { ImageService, imageService } from './Services/ImageService';
//import { FeatureLayerService, featureLayerService } from './Services/FeatureLayerService';

// import layers

var _LayersDynamicMapLayer = require('./Layers/DynamicMapLayer');

var _LayersFeatureLayer = require('./Layers/FeatureLayer');

//import { FeatureGrid } from './Layers/FeatureLayer/FeatureGrid';
//import { FeatureManager } from './Layers/FeatureLayer/FeatureManager';
//import { FeatureLayer, featureLayer } from './Layers/FeatureLayer/FeatureLayer';

// import controls

var _ControlsLegend = require('./Controls/Legend');

var L = global.L || require('leaflet');

L.ogc = {
  Service: _ServicesService.Service, service: _ServicesService.service,
  WFSService: _ServicesWFS.WFSService, wfsService: _ServicesWFS.wfsService,
  WMSService: _ServicesWMS.WMSService, wmsService: _ServicesWMS.wmsService,
  Task: _TasksTask.Task, task: _TasksTask.task,
  Util: _Util.Util,
  get: _Request.get, post: _Request.post, request: _Request.request,
  Support: _Support.Support,

  // Tasks
  GetCapabilities: _TasksGetCapabilities.GetCapabilities, getCapabilities: _TasksGetCapabilities.getCapabilities,
  GetLegendGraphic: _TasksGetLegendGraphic.GetLegendGraphic, getLegendGraphic: _TasksGetLegendGraphic.getLegendGraphic,
  GetFeatureInfo: _TasksGetFeatureInfo.GetFeatureInfo, getFeatureInfo: _TasksGetFeatureInfo.getFeatureInfo,
  GetFeature: _TasksGetFeature.GetFeature, getFeature: _TasksGetFeature.getFeature,
  DescribeFeatureType: _TasksDescribeFeatureType.DescribeFeatureType, describeFeatureType: _TasksDescribeFeatureType.describeFeatureType,

  // Controls
  Legend: _ControlsLegend.Legend, legend: _ControlsLegend.legend,

  // Layers
  DynamicMapLayer: _LayersDynamicMapLayer.DynamicMapLayer, dynamicMapLayer: _LayersDynamicMapLayer.dynamicMapLayer,
  FeatureLayer: _LayersFeatureLayer.FeatureLayer, featureLayer: _LayersFeatureLayer.featureLayer,

  // aliases

  Controls: {
    Legend: _ControlsLegend.Legend
  },
  controls: {
    legend: _ControlsLegend.legend
  },

  // namespaced
  Tasks: {
    GetCapabilities: _TasksGetCapabilities.GetCapabilities,
    GetLegendGraphic: _TasksGetLegendGraphic.GetLegendGraphic,
    GetFeatureInfo: _TasksGetFeatureInfo.GetFeatureInfo,
    GetFeature: _TasksGetFeature.GetFeature,
    DescribeFeatureType: _TasksDescribeFeatureType.DescribeFeatureType
  },

  Layers: {
    DynamicMapLayer: _LayersDynamicMapLayer.DynamicMapLayer,
    FeatureLayer: _LayersFeatureLayer.FeatureLayer
  },
  layers: {
    dynamicMapLayer: _LayersDynamicMapLayer.dynamicMapLayer,
    featureLayer: _LayersFeatureLayer.featureLayer
  }
};

exports['default'] = L.ogc;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Controls/Legend":47,"./Layers/DynamicMapLayer":48,"./Layers/FeatureLayer":49,"./Request":51,"./Services/Service":52,"./Services/WFS":53,"./Services/WMS":54,"./Support":55,"./Tasks/DescribeFeatureType":56,"./Tasks/GetCapabilities":57,"./Tasks/GetFeature":58,"./Tasks/GetFeatureInfo":59,"./Tasks/GetLegendGraphic":60,"./Tasks/Task":61,"./Util":62,"leaflet":"leaflet"}]},{},[1])(1)
});


//# sourceMappingURL=ogc-leaflet-src.js.map
