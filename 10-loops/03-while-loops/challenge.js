module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn() === true) {
    actionFn(false);
  }
};

module.exports.sumNumbers = function(myArray) {
  var sum = 0;

  while (myArray != 0) {
    sum += myArray.pop();
  }
  return sum;
};

