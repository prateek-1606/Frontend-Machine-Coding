const DefaultDepth = 1;

function flattenRecursively(array, depth) {
  if (depth <= 0) return array;

  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      resultArray = [
        ...resultArray,
        ...flattenRecursively(array[i], depth - 1),
      ];
    } else if (array[i] !== undefined && array[i] !== null) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

Array.prototype._flat = function (depth = DefaultDepth) {
  return flattenRecursively(this, depth);
};
