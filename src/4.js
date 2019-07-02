// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palindromeNumbers() {
  const numbers = [];
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      numbers.push(i * j);
    }
  }
  return numbers;
}

function findMaxPalindrome(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i].toString() ===
      numbers[i]
        .toString()
        .split("")
        .reverse()
        .join("")
    ) {
      if (max < numbers[i]) {
        max = numbers[i];
      }
    }
  }
  return max;
}

module.exports = function eulerFour() {
  return findMaxPalindrome(palindromeNumbers());
};
