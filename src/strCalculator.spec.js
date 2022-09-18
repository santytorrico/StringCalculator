import addstrings from "./addStrings.js";

describe("Add strings", () => {
    it("Should return 0 when string is empty", () => {
      const result= addstrings("");
      expect(result).toEqual(0);
    });
  });