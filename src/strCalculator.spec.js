import addstrings from "./addStrings.js";

describe("Add strings", () => {
    it("Should return 0 when string is empty", () => {
      const result= addstrings("");
      expect(result).toEqual(0);
    });

    it("Should return the input string number", () => {
        const result= addstrings("4");
        expect(result).toEqual(4);
      });

  });