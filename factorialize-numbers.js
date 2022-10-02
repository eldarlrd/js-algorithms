const factorialize = num => {
  num = Math.abs(num.toFixed(0));
  return num > 0 ? num * factorialize(num - 1) : 1;
}