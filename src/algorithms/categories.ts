import {
  type IconDefinition,
  faSquareRootVariable,
  faDiceFive,
  faComment,
  faDatabase
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

const mathFuncArr = [
  BMICalculatorObj,
  fiboEvenSumObj,
  factorializeObj,
  fibonacciObj,
  gcdObj,
  largestPalindromeProductObj,
  largestPrimeFactorObj,
  smallestMultObj,
  sumPrimesObj
];

const convFuncArr = [
  convertCtoFObj,
  convertFtoCObj,
  diceRollObj,
  fizzBuzzObj,
  isLeapYearObj,
  multiplesOf3and5Obj
];

const textFuncArr = [
  convertToRomanObj,
  rot13Obj,
  palindromeObj,
  translatePigLatinObj,
  spinalCaseObj
];

const sortFuncArr = [
  bubbleSortObj,
  mergeSortObj,
  passwordVerifyObj,
  telephoneCheckObj,
  checkCashRegisterObj
];

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
    title: 'Math & Numbers',
    funcArr: mathFuncArr,
    icon: faSquareRootVariable
  },
  {
    title: 'Conversion & Randomization',
    funcArr: convFuncArr,
    icon: faDiceFive
  },
  {
    title: 'Text Operations & Analysis',
    funcArr: textFuncArr,
    icon: faComment
  },
  {
    title: 'Sorting & Data Validation',
    funcArr: sortFuncArr,
    icon: faDatabase
  }
];

export { type CategoryDetails, CATEGORIES };
