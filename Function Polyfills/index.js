// note compareFunction is a function that takes two arguments (a, b) and
// returns a negative number if a should come before b, postive number a positive number If a should come after b
// and zero if a and b are considered equal

Array.prototype.mySort = function (compareFunction) {
  const arr = Array.from(this);

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (compareFunction(arr[i], arr[j]) > 0) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

var arr = [3, 2, 0];
// Array.prototype.sort
arr.sort((a, b) => b - a);
console.log(arr);
