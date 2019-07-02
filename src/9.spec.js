const eulerNine = require("./9");

describe("Largest product in a series", () => {
  it("There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product of a, b, c", () => {
    expect(eulerNine()).toEqual(31875000);
  });
});
