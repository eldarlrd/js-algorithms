export const bmiCalculatorObj = {
  myFunc(inputArr) {
    const weight = +inputArr[0];
    const height = +inputArr[1];
    if (inputArr.length !== 2 || !weight || !height)
      return 'ERROR: Inputs must be (number, number)';
    if (weight <= 0 || height <= 0) return 'ERROR: Inputs must be positive numbers';
    if (weight > 635 || height > 2.72) return 'ERROR: Input values too high';

    const bmi = (weight / (height * height)).toFixed(2);
    const state =
      bmi < 18.5 ? 'Underweight' : bmi <= 25 ? 'Healthy' : bmi <= 30 ? 'Overweight' : 'Obese';
    return `${bmi} ${state}`;
  },
  name: 'BMI Calculator',
  placeholder: 'Weight (kg), Height (m)',
  raw: `const bmiCalculator = (weight, height) => {
  const bmi = (weight / (height * height)).toFixed(2);
  const state = bmi < 18.5 ? 'Underweight' : bmi <= 25
    ? 'Healthy' : bmi <= 30 ? 'Overweight' : 'Obese';
  return \`\${bmi} \${state}\`;
}`
};
