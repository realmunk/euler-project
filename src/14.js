function collatsSequencer(n) {
  if (n % 2 === 0) {
    return n / 2;
  }

  return n * 3 + 1;
}

module.exports = function collatsSequence(n) {
  const sequence = [n];
  while (sequence[sequence.length - 1] !== 1) {
    sequence.push(collatsSequencer(sequence[sequence.length - 1]));
  }
};
