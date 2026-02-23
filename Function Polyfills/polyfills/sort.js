Array.prototype.mySort = function (compareFunction) {
  const arr = Array.from(this);

  for (let i = 0; i < arr.length; i++) {
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
