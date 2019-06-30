const isTriangle = require("./is-triangle");

describe("isTriangle Number Validator", () => {
  it("should validate triangleNumbers prime", () => {
    expect(isTriangle(1)).toBe(true);
    expect(isTriangle(2)).toBe(false);
    expect(isTriangle(3)).toBe(true);
    expect(isTriangle(4)).toBe(false);
  });

  it("should be able to validate high numbers – quickly", () => {
    expect(isTriangle(17377)).toBe(false);
    expect(isTriangle(10101528)).toBe(false);
    expect(isTriangle(52546626)).toBe(true);
  });
});
