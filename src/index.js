module.exports = function reverse (n) {
  n = [...Math.abs(n).toString()];
  return Number(n.reverse().join(""));
}
