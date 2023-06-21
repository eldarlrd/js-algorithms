import { Heading, VStack } from '@chakra-ui/react';
import { CodeCard } from './codeCard';
// Number Functions
import { convertCtoFObj } from '../algorithms/inputNumber/celsius-to-fahrenheit';
import { convertFtoCObj } from '../algorithms/inputNumber/fahrenheit-to-celsius';
import { diceRollObj } from '../algorithms/inputNumber/dice-roll';
import { factorializeObj } from '../algorithms/inputNumber/factorialize-numbers';
import { fibonacciObj } from '../algorithms/inputNumber/fibonacci';
import { fiboEvenSumObj } from '../algorithms/inputNumber/evenFibonacci';
import { fizzBuzzObj } from '../algorithms/inputNumber/fizzBuzz';
import { gcdObj } from '../algorithms/inputNumber/greatest-common-divisor';
import { convertToRomanObj } from '../algorithms/inputNumber/roman-numeral-converter';
import { sumPrimesObj } from '../algorithms/inputNumber/sum-all-primes';
import { multiplesOf3and5Obj } from '../algorithms/inputNumber/sum-multiples';

export const InputNumber = () => {
  const numFuncArr = [
    convertCtoFObj,
    convertFtoCObj,
    diceRollObj,
    factorializeObj,
    fibonacciObj,
    fiboEvenSumObj,
    fizzBuzzObj,
    gcdObj,
    convertToRomanObj,
    sumPrimesObj,
    multiplesOf3and5Obj
  ];

  const numberCards: Array<JSX.Element> = [];
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
