module.exports.newArray = function(a, b , c ,d) {
  var array = [a, b, c, d];

  return array;
};

module.exports.firstAndLast = function(a) {
  
  var first = a[0];
  var last = a[a.length - 1];
  var array = [first, last];
  
  return array;
};