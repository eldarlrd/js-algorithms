import {
  type IconDefinition,
  faInfinity,
  faComment,
  faBlender
} from '@fortawesome/free-solid-svg-icons';

import { checkCashRegisterObj } from '@/algorithms/inputMixed/cash-register.js';
import { BMICalculatorObj } from '@/algorithms/inputNumber/bmi-calculator.js';
import { bubbleSortObj } from '@/algorithms/inputNumber/bubble-sort.js';
import { convertCtoFObj } from '@/algorithms/inputNumber/celsius-to-fahrenheit.js';
import { diceRollObj } from '@/algorithms/inputNumber/dice-roll.js';
import { fiboEvenSumObj } from '@/algorithms/inputNumber/even-fibonacci.js';
import { factorializeObj } from '@/algorithms/inputNumber/factorialize-numbers.js';
import { convertFtoCObj } from '@/algorithms/inputNumber/fahrenheit-to-celsius.js';
import { fibonacciObj } from '@/algorithms/inputNumber/fibonacci.js';
import { fizzBuzzObj } from '@/algorithms/inputNumber/fizz-buzz.js';
import { gcdObj } from '@/algorithms/inputNumber/greatest-common-divisor.js';
import { largestPalindromeProductObj } from '@/algorithms/inputNumber/largest-palindrome.js';
import { largestPrimeFactorObj } from '@/algorithms/inputNumber/largest-prime-factor.js';
import { isLeapYearObj } from '@/algorithms/inputNumber/leap-year.js';
import { mergeSortObj } from '@/algorithms/inputNumber/merge-sort.js';
import { convertToRomanObj } from '@/algorithms/inputNumber/roman-numeral-converter.js';
import { smallestMultObj } from '@/algorithms/inputNumber/smallest-multiple.js';
import { sumPrimesObj } from '@/algorithms/inputNumber/sum-all-primes.js';
import { multiplesOf3and5Obj } from '@/algorithms/inputNumber/sum-multiples.js';
import { rot13Obj } from '@/algorithms/inputString/caesar-cipher.js';
import { palindromeObj } from '@/algorithms/inputString/palindrome-checker.js';
import { passwordVerifyObj } from '@/algorithms/inputString/password-verifier.js';
import { telephoneCheckObj } from '@/algorithms/inputString/phone-number-validator.js';
import { translatePigLatinObj } from '@/algorithms/inputString/pig-latin.js';
import { spinalCaseObj } from '@/algorithms/inputString/spinal-tap-case.js';

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
  largestPrimeFactorObj,
  largestPalindromeProductObj,
  smallestMultObj,
  bubbleSortObj,
  mergeSortObj,
  multiplesOf3and5Obj
];

const strFuncArr = [
  rot13Obj,
  palindromeObj,
  telephoneCheckObj,
  passwordVerifyObj,
  translatePigLatinObj,
  spinalCaseObj
];

const mixFuncArr = [checkCashRegisterObj];

interface CategoryDetails {
  title: string;
  funcArr: {
    name: string;
    placeholder: string;
    myFunc(): string;
    raw: string;
  }[];
  icon: IconDefinition;
}
[];

const CATEGORIES: CategoryDetails[] = [
  {
    title: 'Inputs with Numeric Arguments',
    funcArr: numFuncArr,
    icon: faInfinity
  },
  {
    title: 'Inputs with String Arguments',
    funcArr: strFuncArr,
    icon: faComment
  },
  {
    title: 'Inputs with Mixed Arguments',
    funcArr: mixFuncArr,
    icon: faBlender
  }
];

export { type CategoryDetails, CATEGORIES };
