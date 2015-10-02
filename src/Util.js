import L from 'leaflet';

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
  var pt2;
  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }
  return (total >= 0);
}

// shallow object clone for feature properties and attributes
// from http://jsperf.com/cloning-an-object/2
export function shallowClone(obj) {
  var target = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i];
    }
  }
  return target;
}

// trim url whitespace and add a trailing slash if needed
export function cleanUrl(url) {
  // trim leading and trailing spaces, but not spaces inside the url
  url = L.Util.trim(url);

  // add a trailing slash to the url if the user omitted it
  if (url[url.length - 1] !== '/') {
    url += '/';
  }

  return url;
}

export var Util = {
  shallowClone: shallowClone,
  cleanUrl: cleanUrl
};

export default Util;
