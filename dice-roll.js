const diceRoll = (rolls, sides) => {
  if (typeof rolls !== 'number' ||
      typeof sides !== 'number')
    return 'ERROR: Inputs must be (number, number).';
  const arr = [];
  let total = 0;
  let i = 1;
  // Roll Dice
  if (rolls > 0 && sides >= 2)
    while (i <= rolls) {
      const roll = Math.floor(Math.random() * sides) + 1;
      console.log(`Roll ${i}: ${roll}`);
      arr.push(roll);
      total += roll;
      i++;
    } else return 'ERROR: Input values too low.';
  // Bonus Roll
  const uniqArr = [...new Set(arr)];
  if (uniqArr.length === 1) {
    const bonus = Math.floor(Math.random() * sides) + 1;
    console.log(`Bonus Roll: ${bonus}`);
    total += bonus;
  } return `Total: ${total}`;
}