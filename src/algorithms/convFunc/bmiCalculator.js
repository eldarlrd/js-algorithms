export const bmiCalculatorObj = {
  name: 'BMI Calculator',
  placeholder: 'Weight (kg), Height (m)',
  myFunc(inputArr) {
    const weight = +inputArr[0];
    const height = +inputArr[1];
    if (inputArr.length !== 2 ||
        !weight || !height)
      return 'ERROR: Inputs must be (number, number)';
    if (weight <= 0 || height <= 0)
      return 'ERROR: Inputs must be positive numbers';
    else if (weight > 635 || height > 2.72)
      return 'ERROR: Input values too high';
    const bmi = (weight / (height * height)).toFixed(2);
    return bmi < 18.5
      ? `${bmi} Underweight`
      : bmi <= 25
        ? `${bmi} Healthy`
        : bmi <= 30
          ? `${bmi} Overweight`
          : `${bmi} Obese`;
  },
  raw:
`const bmiCalculator = (weight, height) => {
  const weight = +weight;
  const height = +height;
  if (!weight || !height)
    return 'ERROR: Inputs must be (number, number)';
  if (weight <= 0 || height <= 0)
    return 'ERROR: Inputs must be positive numbers';
  else if (weight > 635 || height > 2.72)
    return 'ERROR: Input values too high';
  const bmi = (weight / (height * height)).toFixed(2);
  return bmi < 18.5
    ? \`\${bmi} Underweight\`
    : bmi <= 25
      ? \`\${bmi} Healthy\`
      : bmi <= 30
        ? \`\${bmi} Overweight\`
        : \`\${bmi} Obese\`;
}`
}