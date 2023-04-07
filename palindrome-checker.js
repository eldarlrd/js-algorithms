const palindrome = str => {
  if (typeof str === 'string') {
    const fwd = str.replace(/[\W_]/g, '').toLowerCase();
    const bwd = fwd.split('').reverse().join('');
    return fwd === bwd ? true : false;
  } return 'ERROR: Input must be a string.';
}