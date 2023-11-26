import { Heading, VStack } from '@chakra-ui/react';
import { type JSX } from 'preact/jsx-runtime';

// Number Functions
import { BMICalculatorObj } from '@/algorithms/inputNumber/bmi-calculator.js';
import { convertCtoFObj } from '@/algorithms/inputNumber/celsius-to-fahrenheit.js';
import { diceRollObj } from '@/algorithms/inputNumber/dice-roll.js';
import { fiboEvenSumObj } from '@/algorithms/inputNumber/even-fibonacci.js';
import { factorializeObj } from '@/algorithms/inputNumber/factorialize-numbers.js';
import { convertFtoCObj } from '@/algorithms/inputNumber/fahrenheit-to-celsius.js';
import { fibonacciObj } from '@/algorithms/inputNumber/fibonacci.js';
import { fizzBuzzObj } from '@/algorithms/inputNumber/fizz-buzz.js';
import { gcdObj } from '@/algorithms/inputNumber/greatest-common-divisor.js';
import { isLeapYearObj } from '@/algorithms/inputNumber/leap-year.js';
import { convertToRomanObj } from '@/algorithms/inputNumber/roman-numeral-converter.js';
import { sumPrimesObj } from '@/algorithms/inputNumber/sum-all-primes.js';
import { multiplesOf3and5Obj } from '@/algorithms/inputNumber/sum-multiples.js';
import { CodeCard } from '@/components/codeCard.tsx';

export const InputNumber = (): JSX.Element => {
  const numFuncArr = [
    BMICalculatorObj,
    convertCtoFObj,
    convertFtoCObj,
    diceRollObj,
    factorializeObj,
    fibonacciObj,
    fiboEvenSumObj,
    fizzBuzzObj,
    gcdObj,
    isLeapYearObj,
    convertToRomanObj,
    sumPrimesObj,
    multiplesOf3and5Obj
  ];

  const numberCards: JSX.Element[] = [];
  numFuncArr.forEach(e => {
    numberCards.push(
      <CodeCard
        name={e.name}
        placeholder={e.placeholder}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  });

  return (
    <>
      <Heading
        id='input-number'
        fontFamily='main'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        _selection={{ bg: 'yellow.300' }}
        mx={[2, 4, 8]}
        my='8'>
        Inputs with Numeric Arguments
      </Heading>
      <VStack
        w={['initial', 'fit-content']}
        mx={[2, 4, 8]}
        align='flex-start'
        spacing='8'>
        {numberCards}
      </VStack>
    </>
  );
};
