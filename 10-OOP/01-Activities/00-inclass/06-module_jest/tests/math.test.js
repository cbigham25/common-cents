const math = require("../math");

describe("Test all math functions", () => {
  describe("Test the Sum function", () => {
    it("Add up the Sum with Numbers", () => {
      expect(math.add(2, 2)).toEqual(4);
    });
    it("Add up non-numbers should throw error", () => {
      const cb = () => math.add("hi", "bye");
      const err = new Error("Numbers are needed for this function!");
      expect(cb).toThrow(err);
    });
  });

  describe("Test the Subtract function", () => {
    it("Sub up the Sum with Numbers", () => {
      expect(math.sub(2, 2)).toEqual(0);
    });
    it("Sub up non-numbers should throw error", () => {
      const cb = () => math.sub("hi", "bye");
      const err = new Error("Numbers are needed for this function!");
      expect(cb).toThrow(err);
    });
  });
});
