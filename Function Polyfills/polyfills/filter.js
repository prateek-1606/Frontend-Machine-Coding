Array.prototype._filter = function (callback) {
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};
