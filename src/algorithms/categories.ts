import {
  type IconDefinition,
  faSquareRootVariable,
  faDiceFive,
  faComment,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

import { bmiCalculatorObj } from '@/algorithms/convFunc/bmiCalculator.js';
import { convertCtoFObj } from '@/algorithms/convFunc/convertCtoF.js';
import { convertFtoCObj } from '@/algorithms/convFunc/convertFtoC.js';
import { diceRollObj } from '@/algorithms/convFunc/diceRoll.js';
import { fizzBuzzObj } from '@/algorithms/convFunc/fizzBuzz.js';
import { isLeapYearObj } from '@/algorithms/convFunc/isLeapYear.js';
import { factorializeObj } from '@/algorithms/mathFunc/factorialize.js';
import { fiboEvenSumObj } from '@/algorithms/mathFunc/fiboEvenSum.js';
import { fibonacciObj } from '@/algorithms/mathFunc/fibonacci.js';
import { gcdObj } from '@/algorithms/mathFunc/gcd.js';
import { largestPalindromeProductObj } from '@/algorithms/mathFunc/largestPalindromeProduct.js';
import { largestPrimeFactorObj } from '@/algorithms/mathFunc/largestPrimeFactor.js';
import { multiplesOf3and5Obj } from '@/algorithms/mathFunc/multiplesOf3and5.js';
import { smallestMultObj } from '@/algorithms/mathFunc/smallestMult.js';
import { sumPrimesObj } from '@/algorithms/mathFunc/sumPrimes.js';
import { bubbleSortObj } from '@/algorithms/sortFunc/bubbleSort.js';
import { checkCashRegisterObj } from '@/algorithms/sortFunc/checkCashRegister.js';
import { mergeSortObj } from '@/algorithms/sortFunc/mergeSort.js';
import { passwordVerifyObj } from '@/algorithms/sortFunc/passwordVerify.js';
import { telephoneCheckObj } from '@/algorithms/sortFunc/telephoneCheck.js';
import { convertToRomanObj } from '@/algorithms/textFunc/convertToRoman.js';
import { palindromeObj } from '@/algorithms/textFunc/palindrome.js';
import { rot13Obj } from '@/algorithms/textFunc/rot13.js';
import { spinalCaseObj } from '@/algorithms/textFunc/spinalCase.js';
import { translatePigLatinObj } from '@/algorithms/textFunc/translatePigLatin.js';

const mathFuncArr = [
  factorializeObj,
  gcdObj,
  largestPalindromeProductObj,
  largestPrimeFactorObj,
  fibonacciObj,
  smallestMultObj,
  multiplesOf3and5Obj,
  sumPrimesObj,
  fiboEvenSumObj
];

const convFuncArr = [
  bmiCalculatorObj,
  convertCtoFObj,
  convertFtoCObj,
  diceRollObj,
  fizzBuzzObj,
  isLeapYearObj
];

const textFuncArr = [
  palindromeObj,
  translatePigLatinObj,
  convertToRomanObj,
  rot13Obj,
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

const kebabize = (title: string): string =>
  title.toLowerCase().replaceAll(' ', '-');

export { type CategoryDetails, CATEGORIES, kebabize };
