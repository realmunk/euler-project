module.exports = {
  generateFibonacciSequence: max => {
    const numbers = [];
    let sum = 0;
    for (let i = 1; i <= max; i++) {
      if (numbers.length < 2) {
        numbers.push(i);
      } else {
        sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];

        if (sum > max) {
          break;
        }
        numbers.push(sum);
      }
    }

    return numbers;
  },
  sumOfEvenNumbers: sequence =>
    sequence.reduce((acc, nr) => {
      if (nr === 1) {
        return acc;
      }
      if (nr % 2 === 0) {
        return nr + acc;
      }
      return acc;
    }, 0)
};
