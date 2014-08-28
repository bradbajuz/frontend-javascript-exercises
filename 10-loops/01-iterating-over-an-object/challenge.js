module.exports.getKeys = function(myObject) {
  var keys = [];
  
  for (var key in myObject) {
    keys.push(key);
  } 
  return keys;
};

module.exports.getValues = function(myObject) {
  var array = [];
  
  for (var key in myObject) {
    array.push(myObject[key]);
  } 
  return array;
};

module.exports.objectToArray = function(myObject) {
  var array = [];
  
  for (var key in myObject) {
    var value = myObject[key];
    array.push(key + " is " + value);
  }
  return array;
};