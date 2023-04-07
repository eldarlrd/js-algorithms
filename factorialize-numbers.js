const factorialize = num => {
  if (typeof num === 'number') {
    num = Math.abs(num.toFixed(0));
    return num > 0 ? num * factorialize(num - 1) : 1;
  } return 'ERROR: Input must be a number.';
}