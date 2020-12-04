/*

  Javascript has a native `Promises.allSettled` function that receives an array of promises,
  and returns a single promise that resolves when every promise in the array has completed.

  We're going to reimplement this function.

  Our goal is to get as many of the unit tests to pass as possible given the time available.
  Don't worry if you don't get through all of them; prioritize each test case as you see fit.

  Feel free to look at the tests themselves -- think of them as your story requirements!

  Reference:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

*/

const promiseAllSettled = promises => Promise.allSettled(promises);

export default promiseAllSettled;
