export const diceRollObj = {
  name: 'Dice Roller',
  placeholder: 'Rolls, Sides',
  myFunc(inputArr) {
    const rolls = +inputArr[0];
    const sides = +inputArr[1];
    if (inputArr.length !== 2 ||
        !rolls || !sides ||
        rolls % 1 !== 0 ||
        sides % 1 !== 0)
      return 'ERROR: Inputs must be (number, number)';
    else if (rolls > 1000 || sides > 1000)
      return 'ERROR: Input values too high';

    const textArr = [];
    const arr = [];
    let total = 0;
    let i = 1;

    // Roll Dice
    if (rolls > 0 && sides >= 2)
      while (i <= rolls) {
        const roll = ~~(Math.random() * sides) + 1;
        textArr.push(` Roll ${i}: ${roll}`);
        arr.push(roll);
        total += roll;
        i++;
      } else return 'ERROR: Input values too low';

    return `${textArr} = Total: ${total}`;
  },
  raw:
`const diceRoll = (rolls, sides) => {
  const textArr = [];
  const arr = [];
  let total = 0;
  let i = 1;

  // Roll Dice
  if (rolls > 0 && sides >= 2)
    while (i <= rolls) {
      const roll = ~~(Math.random() * sides) + 1;
      textArr.push(\` Roll \${i}: \${roll}\`);
      arr.push(roll);
      total += roll;
      i++;
    }

  return \`\${textArr} = Total: \${total}\`;
}`
}
