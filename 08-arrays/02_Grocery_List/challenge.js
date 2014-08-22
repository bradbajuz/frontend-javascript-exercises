module.exports.addItem = function(item, list) {
  if (list.lastIndexOf(item)) {
    list.push(item);
  };
  return list;
};

module.exports.reverseSortedList = function(a) {
  return a.sort().reverse();
};