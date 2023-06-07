import {
  Heading,
  VStack
} from '@chakra-ui/react';
import { CodeCard } from './codeCard';
// String Functions
import { rot13Obj } from '../algorithms/inputString/caesar-cipher';
import { palindromeObj } from '../algorithms/inputString/palindrome-checker';
import { telephoneCheckObj } from '../algorithms/inputString/phone-number-validator';
import { translatePigLatinObj } from '../algorithms/inputString/pig-latin';
import { spinalCaseObj } from '../algorithms/inputString/spinal-tap-case';

export const InputString = () => {
  const strFuncArr = [
    rot13Obj,
    palindromeObj,
    telephoneCheckObj,
    translatePigLatinObj,
    spinalCaseObj,
  ];

  const stringCards: Array<JSX.Element> = [];
  {strFuncArr.forEach(e => {
    stringCards.push(
      <CodeCard
        name={e.name}
        placeholder={e.placeholder}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  })}

  return (
    <>
    <Heading
      fontFamily='main'
      textDecoration='3px underline'
      textDecorationColor='yellow.400'
      mx={[2, 4, 8]}
      my='8'>
      Inputs with String Arguments
    </Heading>
    <VStack
      w={['initial', 'fit-content']}
      mx={[2, 4, 8]}
      align='flex-start'
      spacing='8'>
      {stringCards}
    </VStack>
    </>
  );
}