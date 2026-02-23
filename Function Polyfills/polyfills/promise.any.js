// This returned promise fulfills when any of the input's promises fulfill, with this first fulfillment value.
// It rejects when all of the input's promises reject (including when an empty iterable is passed),
// with an AggregateError containing an array of rejection reasons.

Promise.myAny = function (promisesArray) {
  return new Promise((resolve, reject) => {
    let errors = new Array(promisesArray.length);
    let totalPromisesSettled = 0;
    promisesArray.forEach((promise, index) => {
      promise
        .then((value) => {
          resolve(value);
          totalPromisesSettled++;
        })
        .catch((error) => {
          errors[index] = error;
          totalPromisesSettled++;

          if (totalPromisesSettled === promisesArray.length) {
            reject(new AggregateError(errors), "All promises were rejected");
          }
        });
    });
  });
};
