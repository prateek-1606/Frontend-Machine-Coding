function memoize(callback) {
  let cache = {};
  return function (...args) {
    let argCache = JSON.stringify(args);

    if (!cache.hasOwnProperty(argCache)) {
      cache[argCache] = callback(...args);
    }

    return cache[argCache];
  };
}
