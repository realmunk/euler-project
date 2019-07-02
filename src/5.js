// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallDivisibleNumber(limit) {
  let number = 1;
  while (true) {
    for (let i = 2; i <= limit; i++) {
      if (number % i !== 0) {
        break;
      }
      if (limit === i) {
        return number;
      }
    }
    number++;
  }
}
module.exports = {
  smallDivisibleNumber
};
console.log(smallDivisibleNumber(20));
