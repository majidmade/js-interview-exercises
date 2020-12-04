import promiseAllSettled from './'

const getBasicPromises = () => [
  new Promise((resolve, reject) => setTimeout(() => resolve("abc"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("def"), 1000)),
];

const getTrickyPromises = () => [
  Promise.resolve(123),
  Promise.reject(456),
  789,
  null,
  ...getBasicPromises(),
];

describe("promiseAllSettled", () => {

  afterEach(jest.restoreAllMocks);

  it("should not return undefined", () => {
    const actual = promiseAllSettled(getBasicPromises());
    expect(actual).toBeDefined();
  });

  it("should return a promise", () => {
    const actual1 = promiseAllSettled(getBasicPromises());
    const actual2 = promiseAllSettled([]);
    expect(actual1 instanceof Promise).toBe(true);
    expect(actual2 instanceof Promise).toBe(true);
  });

  it("should not call the native Promise.allSettled", () => {
    const spy = jest.spyOn(Promise, "allSettled");
    promiseAllSettled([]);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should reimplement the native Promise.allSettled", async () => {
    const actual = await promiseAllSettled(getBasicPromises());
    const expected = await Promise.allSettled(getBasicPromises());
    expect(actual).toEqual(expected);
    expect(actual).toEqual([
      { status: "fulfilled", value: "abc"},
      { status: "rejected", reason: "def"},
    ]);
  });

  it("should reimplement the native Promise.allSettled (tricky)", async () => {
    const actual = await promiseAllSettled(getTrickyPromises());
    const expected = await Promise.allSettled(getTrickyPromises());
    expect(actual).toEqual(expected);
    expect(actual).toEqual([
      { status: "fulfilled", value: 123 },
      { status: "rejected", reason: 456},
      { status: "fulfilled", value: 789 },
      { status: "fulfilled", value: null },
      { status: "fulfilled", value: "abc"},
      { status: "rejected", reason: "def"},
    ]);
  });

  it("should reimplement the native Promise.allSettled (empty)", async () => {
    const actual = await promiseAllSettled([]);
    const expected = await Promise.allSettled([]);
    expect(actual).toEqual(expected);
    expect(actual).toEqual([]);
  });

});