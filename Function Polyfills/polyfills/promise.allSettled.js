// returned promise fulfills when all of the input's promises settle,
//  with an array of objects that describe the outcome of each promise.

Promise.myAllSettled = function (promisesArray) {
  return new Promise((resolve, reject) => {
    let allResult = new Array(promisesArray.length);
    let totalPromisesSettled = 0;

    if (promisesArray.length === 0) {
      resolve([]);
    }
    promisesArray.forEach((individualPromise, index) => {
      individualPromise
        .then((value) => {
          allResult[index] = {
            status: "fulfilled",
            value: value,
          };
          totalPromisesSettled++;
        })
        .catch((error) => {
          allResult[index] = {
            status: "rejected",
            reason: error,
          };
          totalPromisesSettled++;
        })
        .finally(() => {
          if (totalPromisesSettled === promisesArray.length) resolve(allResult);
        });
    });
  });
};
