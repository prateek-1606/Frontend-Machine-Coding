Promise.myRace = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};
