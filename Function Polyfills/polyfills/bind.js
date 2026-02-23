Function.prototype._bind = function (ownerObj, ...args) {
  const func = this;
  return function (...newArgs) {
    return func.call(ownerObj, [...args, ...newArgs]);
  };
};
