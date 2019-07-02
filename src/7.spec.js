const eulerSeven = require("./7");

describe("10001st prime", () => {
  it("What is the 10 001st prime number?", () => {
    expect(eulerSeven()).toEqual(104743);
  });
});
