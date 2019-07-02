const eulerThirteen = require("./13");

describe("Large sum", () => {
  it("Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.", async () => {
    const sum = await eulerThirteen();
    expect(sum).toBe(5537376230);
  });
});
