const primeFactors = require("./lib/prime-factor");

module.exports = function eulerThree(nr) {
  return primeFactors(nr).reduce((a, b) => {
    return a > b ? a : b;
  }, 0);
};
