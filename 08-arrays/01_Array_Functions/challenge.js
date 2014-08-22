module.exports.reversePlusOne = function(a) {
  a.reverse().unshift(1);

  return a;  
};

module.exports.plusesEverywhere = function(a) {
  var myVar = a.join("+");
  return myVar;
};

module.exports.arrayQuantityPlusOne = function(a) {
  var myVar = a.length + 1;
  return myVar;
};