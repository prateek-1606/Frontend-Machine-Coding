Array.prototype._map = function (callback) {
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }

  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};
