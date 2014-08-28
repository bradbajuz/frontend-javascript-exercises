module.exports.copy = function(myObject) {
  var newObject = {};

  for (var key in myObject) {
    newObject[key] = myObject[key];
  }
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
  return dest
};

module.exports.hasElems = function(myObject, myArray) {
  for (i = 0; i < myArray.length; i++) {
    if (!myObject.hasOwnProperty(myArray[i])) {
      return false;
    }
  }
  return true;
};