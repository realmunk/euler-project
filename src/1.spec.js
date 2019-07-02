const eulerOne = require("./1");

describe("euler project - 1", () => {
  it("should sum all 3's and 5's up to 1000", () => {
    expect(eulerOne()).toEqual(233168);
  });
});
