function greatestCommonFactor(array) {
  function gcf(a, b) {
    if (b === 0) return a;
    return gcf(b, a % b);
  }
  return array.reduce(gcf);
};