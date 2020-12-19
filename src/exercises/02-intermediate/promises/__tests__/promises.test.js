import { getUserRank, getUserRanks } from "../promises";

describe("getUserRank", () => {

  it("should return 1st", async () => {
    const result = await getUserRank("jane");
    expect(result).toEqual("1st");
  });

  it("should return 2nd", async () => {
    const result = await getUserRank("john");
    expect(result).toEqual("2nd");
  });

  it("should return blank", async () => {
    const result = await getUserRank("nobody");
    expect(result).toEqual("");
  });

  it("should return First", async () => {
    const result = await getUserRank("jane", true);
    expect(result).toEqual("First");
  });

  it("should return Second", async () => {
    const result = await getUserRank("john", true);
    expect(result).toEqual("Second");
  });

});

describe("getUserRanks", () => {

  it("should return array of ranks", async () => {
    const result = await getUserRanks(["jane", "john"]);
    expect(result.sort()).toEqual(["1st", "2nd"]);
  });

});