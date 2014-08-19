module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
  var not_between_10_and_20 =! module.exports.inBetween(9, number, 21);
  var not_between_42_and_75 = number <= 42 || number > 75;
  var not_between_1_and_6 = number <= 1 || number >= 6;
  
  return not_between_10_and_20 && not_between_42_and_75 && not_between_1_and_6;
};

module.exports.nameAndPrice = function(name, price) {
  var nyTimesOrLaTimes = name === "NYTimes" || name === "LATimes";
  var priceIsGreaterOrEqualToOne = price >= 1;
  
  return nyTimesOrLaTimes && priceIsGreaterOrEqualToOne;
  
//   return (name === "NYTimes" || name === "LATimes") && price >= 1;
};

