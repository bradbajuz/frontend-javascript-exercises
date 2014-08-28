module.exports.sumNumbers = function(numArray) {
  for (var index = 0, sum = 0; index < numArray.length; sum += numArray[index++]); 
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  for (var myVar = inputString.toLowerCase(); myVar < 0; inputString[myVar++]);
  return myVar.split(",");
};

module.exports.addIndex = function(input) {
  var myArray = [];
  
  for (var index = 0; index < input.length; index++){
    var element = input[index];
    myArray[index] = index + " is " + element;
  }
  return myArray;
};
