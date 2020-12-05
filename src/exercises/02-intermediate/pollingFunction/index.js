/*

  Implement a function that takes a check function, an interval, and a timeout.
  It should return a promise.

  The check function should be called at the given interval.
  The returned promise should resolve once the check function returns true.
  The returned promise should reject if the check function doesn't return true before the given timeout.
  (Don't resolve or reject to any particular value -- the tests are expecting undefined.)

  Our goal is to get as many of the unit tests to pass as possible given the time available.
  Don't worry if you don't get through all of them; prioritize each test case as you see fit.

  Feel free to look at the tests themselves -- think of them as your story requirements!

*/

const pollingFunction = (checkFn, interval, timeout) => undefined;

export default pollingFunction;