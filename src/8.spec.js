const eulerEight = require("./8");

describe("Largest product in a series", () => {
  it("Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?  ", () => {
    expect(eulerEight()).toEqual(23514624000);
  });
});
