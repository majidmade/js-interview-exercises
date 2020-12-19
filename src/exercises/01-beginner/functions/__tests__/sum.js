import { sumOfUnique } from "../sum";

describe("sumOfUnique", () => {

  it("should tally unique values", () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    expect(sumOfUnique(numbers)).toEqual(15);
  });

  it("should handle undefined input", () => {
    expect(sumOfUnique(undefined)).toEqual(0);
  });

  it("should handle null input", () => {
    expect(sumOfUnique(null)).toEqual(0);
  });

  it("should handle object input", () => {
    expect(sumOfUnique({ length: 1, 0: 5 })).toEqual(0);
  });

});