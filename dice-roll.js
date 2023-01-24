const diceRoll = (rolls, side) => {
  const arr = [];
  let total = 0;
  let i = 1;
// Roll Dice
  if (rolls > 0 && side >= 2) {
    while (i <= rolls) {
      const roll = Math.floor(Math.random() * side) + 1;
      console.log(`Roll ${i}: ${roll}`);
      arr.push(roll);
      total += roll;
      i++;
  }} else return "Input values incorrect.";
// Bonus Roll
  const uniqArr = [...new Set(arr)];
  if (uniqArr.length === 1) {
    const bonus = Math.floor(Math.random() * side) + 1;
    console.log(`Bonus Roll: ${bonus}`);
    total += bonus;
  } return `Total: ${total}`;
}