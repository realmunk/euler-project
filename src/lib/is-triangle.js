function isTriangle(n) {
  let x = (Math.sqrt(8 * n + 1) - 1) / 2;

  if (x - parseInt(x, 10) > 0) {
    return false;
  }

  return !!parseInt(x, 10);
}

module.exports = isTriangle;
