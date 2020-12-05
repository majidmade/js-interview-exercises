import pollingFunction from './'

describe("pollingFunction", () => {

  const checkFn = jest.fn();
  const interval = 100;
  const timeout = 2000;

  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it("should not return undefined", () => {
    const actual = pollingFunction(checkFn, interval, timeout);
    expect(actual).toBeDefined();
  });

  it("should return a promise", () => {
    const actual = pollingFunction(checkFn, interval, timeout);
    expect(actual instanceof Promise).toBe(true);
  });

  it("should call the given checkFn at the given interval", () => {
    pollingFunction(checkFn, interval, timeout);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(3);
  });

  it("should stop calling the checkFn once it returns true", () => {
    checkFn
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    pollingFunction(checkFn, interval, timeout);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(3);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(4);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(4);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(4);
  });

  it("should resolve once the checkFn returns true", () => {
    checkFn.mockReturnValueOnce(true);
    const promise = pollingFunction(checkFn, interval, timeout);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(1);
    return expect(promise).resolves.toBeUndefined();
  });

  it("should reject if the checkFn doesn't return true before the timeout", () => {
    checkFn.mockReturnValue(false);
    const promise = pollingFunction(checkFn, interval, timeout);
    jest.advanceTimersByTime(timeout);
    expect(checkFn).toHaveBeenCalledTimes(timeout / interval);
    jest.advanceTimersByTime(interval);
    expect(checkFn).toHaveBeenCalledTimes(timeout / interval);
    return expect(promise).rejects.toBeUndefined();
  });

});