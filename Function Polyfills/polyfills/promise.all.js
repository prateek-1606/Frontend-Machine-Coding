// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise1 resolved");
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise2 resolved");
//   }, 2000);
// });

// const time1 = Date.now();
// console.log(time1);
// Promise.myAll([promise1, promise2]).then((value) => {
//   const time2 = Date.now();
//   console.log("Time taken:", time2 - time1);
//   console.log("All promises resolved", value);
// });

// returned promise fulfills when all of the input's promises fulfill, with an array of the fulfillment values.
// It rejects when any of the input's promises reject, with this first rejection reason.

Promise.myAll = function (promisesArray) {
  return new Promise((resolve, reject) => {
    const finalResult = new Array(promisesArray.length);
    let totalPromisesResolved = 0;

    if (promisesArray.length === 0) {
      return resolve([]);
    }
    promisesArray.forEach((indiviualPromise, index) => {
      indiviualPromise
        .then((value) => {
          totalPromisesResolved++;
          finalResult[index] = value;

          if (totalPromisesResolved === promisesArray.length)
            resolve(finalResult);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
