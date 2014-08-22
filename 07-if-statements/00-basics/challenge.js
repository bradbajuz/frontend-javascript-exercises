module.exports.favoriteNumber = function(fav, guess) {
  if (guess < fav) {
    return "Too low";
  }
  else if (guess > fav) {
    return "Too high";
  }
 
  return "You got it!";
};

module.exports.checkLock = function(a, b, c, d) {
  if ((a === 3 || a === 5 || a === 7) &&
      (b === 2) && (c >= 5 && c <= 100) &&
      (d < 9 || d > 20)) {
    return "correct";
  }
  
  return "incorrect";
};

module.exports.canIGet = function(item, money) {

  if (item === "MacBook Air" && money >= 999) return true;
  
  if (item === "MacBook Pro" && money >= 1299) return true;
  
  if (item === "Mac Pro" && money >= 2499) return true;
  
  if (item === "Apple Sticker" && money >= 1) return true;
  
  return false;
};