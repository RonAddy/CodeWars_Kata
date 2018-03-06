var counter = function counter() {
  var count = 3;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};


console.log(counter().increment())
console.log(counter().getCount());
