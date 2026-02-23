function throttle(func, interval) {
  // A flag variable to track whether the function is running or not
  let isRunning = false;
  // Return a function that takes arguments
  return function (...args) {
    // If the function is not running
    if (!isRunning) {
      // Set the flag to true
      isRunning = true;
      // Apply the function with arguments
      func.apply(this, args);
      // Set a timer that will reset the flag after the interval
      setTimeout(() => {
        // Set the flag to false
        isRunning = false;
      }, interval);
    }
  };
}

function throttle(func, wait) {
  // your code here
  let isWaiting = false;
  let stashed = null;

  return function (...args) {
    if (!isWaiting) {
      isWaiting = true;
      func.apply(this, args);
      const timeout = () =>
        setTimeout(() => {
          isWaiting = false;
          if (stashed) {
            isWaiting = true;
            func.apply(this, stashed);
            stashed = null;
            timeout();
          }
        }, wait);
      timeout();
    } else {
      stashed = args;
    }
  };
}
