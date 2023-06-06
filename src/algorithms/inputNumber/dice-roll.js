export const diceRollObj = {
  name: 'Dice Roller',
  placeholder: 'Rolls, Sides',
  myFunc(inputArr) {
    const rolls = +inputArr[0];
    const sides = +inputArr[1];
    if (inputArr.length !== 2 ||
        !rolls || !sides)
      return 'ERROR: Inputs must be (number, number)';
    const textArr = [];
    const arr = [];
    let total = 0;
    let i = 1;
    // Roll Dice
    if (rolls > 0 && sides >= 2)
      while (i <= rolls) {
        const roll = Math.floor(Math.random() * sides) + 1;
        textArr.push(` Roll ${i}: ${roll}`);
        arr.push(roll);
        total += roll;
        i++;
      } else return 'ERROR: Input values too low';
    // Bonus Roll
    const uniqArr = [...new Set(arr)];
    if (uniqArr.length === 1 && rolls !== 1) {
      const bonus = Math.floor(Math.random() * sides) + 1;
      textArr.push(` Bonus Roll: ${bonus}`);
      total += bonus;
    } return `${textArr} = Total: ${total}`;
  },
  raw:
`const diceRoll = inputArr => {
  const rolls = +inputArr[0];
  const sides = +inputArr[1];
  if (inputArr.length !== 2 ||
      !rolls || !sides)
    return 'ERROR: Inputs must be (number, number)';
  const textArr = [];
  const arr = [];
  let total = 0;
  let i = 1;
  // Roll Dice
  if (rolls > 0 && sides >= 2)
    while (i <= rolls) {
      const roll = Math.floor(Math.random() * sides) + 1;
      textArr.push(\` Roll \${i}: \${roll}\`);
      arr.push(roll);
      total += roll;
      i++;
    } else return 'ERROR: Input values too low';
  // Bonus Roll
  const uniqArr = [...new Set(arr)];
  if (uniqArr.length === 1 && rolls !== 1) {
    const bonus = Math.floor(Math.random() * sides) + 1;
    textArr.push(\` Bonus Roll: \${bonus}\`);
    total += bonus;
  } return \`\${textArr} = Total: \${total}\`;
}`
}