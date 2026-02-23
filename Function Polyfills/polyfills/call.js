Function.prototype._call = function (ownerObj, ...args) {
  ownerObj.tempFunction = this;
  const result = ownerObj.tempFunction(...args);
  delete ownerObj.tempFunction;
  return result;
};
