const eulerEleven = require("./11");

describe("Largest product in a grid", () => {
  it("What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?", async () => {
    const max = await eulerEleven();
    expect(max).toEqual(70600674);
  });
});
