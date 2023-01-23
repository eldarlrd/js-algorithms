const diceRoll = (rolls, side) => {
  const dupes = {};
  const arr = [];
  let total = 0;
  let i = 1;

  if (rolls > 0 && side >= 2) {
    while (i <= rolls) {
      const roll = Math.floor(Math.random() * side) + 1;
      console.log(`Roll ${i}: ${roll}`);
      arr.push(roll);
      total += roll;
      i++;
    } arr.forEach(x => {dupes[x] = (dupes[x] || 0) + 1});
  } else return "Input values incorrect.";

  if (Object.keys(dupes).length === 1) {
    const bonus = Math.floor(Math.random() * side) + 1;
    console.log(`Bonus Roll: ${bonus}`);
    total += bonus;
  } return `Total: ${total}`;
}