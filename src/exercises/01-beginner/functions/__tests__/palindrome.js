import { isPalandrome } from "../palindrome";

describe("isPalindrome", () => {

  it("should confirm these texts as palindrome", () => {
    const phrases = [
      "Level",
      "Noon",
      "Amore, Roma.",
      "A nut for a jar of tuna",
      `Al lets Della call Ed "Stella."`,
    ];
    phrases.forEach(str => {
      expect(isPalandrome(str)).toBeTruthy();
    });
  });

  it("should confirm these texts as not plaindrome", () => {
    const phrases = [
      "Levels",
      "None",
      "Nut for a jar of tuna",
      `Al lets Della call Ed "Stella."`,
    ];
    phrases.forEach(str => {
      expect(isPalandrome(str)).toBeFalsy();
    });
  });

});