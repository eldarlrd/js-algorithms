export const towerOfHanoiObj = {
  name: 'Tower of Hanoi',
  placeholder: 'N Discs',
  myFunc(n) {
    n = +n;
    const src = 'A';
    const tgt = 'B';
    const aux = 'C';

    if (n < 1 || n % 1 !== 0) return 'ERROR: Input must be a natural number';
    else if (n > 10) return 'ERROR: Input value too high';

    const moves = towerOfHanoiObj.getMoves(n, src, tgt, aux);
    return moves.map(([from, to]) => `[${from} → ${to}]`).join(', ');
  },
  getMoves(n, src, tgt, aux) {
    if (n === 1) return [[src, tgt]];

    return [
      ...towerOfHanoiObj.getMoves(n - 1, src, aux, tgt),
      [src, tgt],
      ...towerOfHanoiObj.getMoves(n - 1, aux, tgt, src)
    ];
  },
  raw: `// Assemble the Tower of Hanoi
const towerOfHanoi = n => {
  const src = 'A';
  const tgt = 'B';
  const aux = 'C';

  const moves = getMoves(n, src, tgt, aux);
  return moves.map(([from, to]) =>
    \`[\${from} → \${to}]\`).join(', ');
}

// Calculate the Moves
const getMoves = (n, src, tgt, aux) => {
  if (n === 1) return [[src, tgt]];

  return [
    ...getMoves(n - 1, src, aux, tgt),
    [src, tgt],
    ...getMoves(n - 1, aux, tgt, src)
  ];
}`
};
