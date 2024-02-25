export const largestPalindromeProductObj = {
  name: 'Largest Palindrome Product',
  placeholder: 'Number',
  myFunc(n) {
    n = +n;
    if (n <= 0 || n % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    if (n > 3)
      return 'ERROR: Input value too high'
    const highLim = (10 ** n) - 1;
    const lowLim = (10 ** n) / 10;
    let maxProd = 0;
  
    for (let i = highLim; i >= lowLim; i--)
      for (let j = highLim; j >= lowLim; j--) {
        const prod = i * j;
        const bwdProdStr = prod.toString().split('')
                               .reverse().join('');
        if (prod.toString() === bwdProdStr) {
          maxProd = Math.max(+maxProd, +prod);
          break;
        }
      } return maxProd;
  },
  raw:
`const largestPalindromeProduct = n => {
  n = +n;
  if (n <= 0 || n % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  if (n > 3)
    return 'ERROR: Input value too high'
  const highLim = (10 ** n) - 1;
  const lowLim = (10 ** n) / 10;
  let maxProd = 0;

  for (let i = highLim; i >= lowLim; i--)
    for (let j = highLim; j >= lowLim; j--) {
      const prod = i * j;
      const bwdProdStr = prod.toString().split('')
                             .reverse().join('');
      if (prod.toString() === bwdProdStr) {
        maxProd = Math.max(+maxProd, +prod);
        break;
      }
    } return maxProd;
}`
}