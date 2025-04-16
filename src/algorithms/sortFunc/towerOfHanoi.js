export const towerOfHanoiObj = {
  name: 'Tower of Hanoi',
  placeholder: 'N Discs',
  myFunc(inputArr) {
    const result = towerOfHanoiObj.getMoves(inputArr);
    return typeof result === 'string' ? result : (
        towerOfHanoiObj.formatMoves(result)
      );
  },
  getMoves(inputArr) {
    const n = Math.abs(inputArr[0]);
    const src = inputArr[1];
    const tgt = inputArr[2];
    const aux = inputArr[3];

    if (n <= 0 || n % 1 !== 0) return 'ERROR: Input must be a natural number';
    else if (n > 1000) return 'ERROR: Input value too high';

    if (n === 1) return [[src, tgt]];

    return [
      ...towerOfHanoiObj.getMoves([n - 1, src, aux, tgt]),
      [src, tgt],
      ...towerOfHanoiObj.getMoves([n - 1, aux, tgt, src])
    ];
  },
  formatMoves(moves) {
    return `[${moves.map(([from, to]) => `['${from}', '${to}']`).join(', ')}]`;
  },
  raw: `const towerOfHanoi = n => {
  const src = 'Source';
  const tgt = 'Target';
  const aux = 'Auxiliary';

  if (n === 1) return [[src, tgt]];

  return [
    ...towerOfHanoi(n - 1, src, aux, tgt),
    [src, tgt],
    ...towerOfHanoi(n - 1, aux, tgt, src)
  ];
}`
};
