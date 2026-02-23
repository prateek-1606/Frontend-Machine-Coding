Array.prototype._reduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i]);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
