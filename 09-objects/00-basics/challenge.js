module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
 
  object[newProp] = newValue;
  
  return object;
};

module.exports.formLetter = function(letter)  {
  var newLetter = {
    recipient: letter,
    sender: letter,
    msg: letter
  };
  return newLetter = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.myVar = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };

module.exports.canIGet = function(item, money) {

  return module.exports.myVar[item] <= money;

};