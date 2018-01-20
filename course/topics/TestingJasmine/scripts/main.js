//Array.prototype.random() to randomly disorder an array into a new array.

Array.prototype.shuffle = function() {
  var self = this;
  var lenName = self.length;
  var newArray = [];

  for (var i = 0; i < lenName; i++) {
    randomize();
  }

  return newArray;

  function randomize() {
    var x = Math.floor(Math.random() * self.length);

    newArray.push(self[x]);
    self.splice(x, 1);
  }
};
