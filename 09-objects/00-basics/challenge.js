module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  var myVar = {
    newProp: newValue
  };
  var myVar = object;
  return myVar;
};

module.exports.formLetter = function(letter)  {
  var newLetter = {
    recipient: letter,
    sender: letter,
    msg: letter
  };
  return newLetter = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

// module.exports.canIGet = function(item, money) {
//   return {
//     'MacBook Air': (>= money),
//     'MacBook Pro': money,
//     'Mac Pro': money,
//     'Apple Sticker': money
//   };
  
//   return {
//     macBookAir: (newItem['MacBook Air'] >= 999),
//     macBookPro: (newItem['MacBook Pro'] >= 1299),
//     macPro: (newItem['Mac Pro'] >= 2499),
//     appleSticker: (newItem['Apple Sticker'] >= 1),
//   }

//   return combine;

// };