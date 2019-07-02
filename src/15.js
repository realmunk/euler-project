/**
 *
 * lattice paths
 *
 * */

function factorial(n) {
  if (n <= 1) {
    return i;
  }

  let sum = n;

  for (let i = n - 1; i >= 1; i--) {
    sum = sum * i;
  }

  return sum;
}

function latticePaths(x, y) {
  return factorial(x + y) / (factorial(x) * factorial(y));
}

console.log(latticePaths(20, 20));
