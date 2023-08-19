import { type JSX } from 'preact/jsx-runtime';
import { Heading, VStack } from '@chakra-ui/react';
import { CodeCard } from '@/components/codeCard.tsx';
// String Functions
import { rot13Obj } from '@/algorithms/inputString/caesar-cipher.js';
import { palindromeObj } from '@/algorithms/inputString/palindrome-checker.js';
import { telephoneCheckObj } from '@/algorithms/inputString/phone-number-validator.js';
import { passwordVerifyObj } from '@/algorithms/inputString/password-verifier.js';
import { translatePigLatinObj } from '@/algorithms/inputString/pig-latin.js';
import { spinalCaseObj } from '@/algorithms/inputString/spinal-tap-case.js';

export const InputString = (): JSX.Element => {
  const strFuncArr = [
    rot13Obj,
    palindromeObj,
    telephoneCheckObj,
    passwordVerifyObj,
    translatePigLatinObj,
    spinalCaseObj
  ];

  const stringCards: JSX.Element[] = [];
  strFuncArr.forEach(e => {
    stringCards.push(
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
        id='input-string'
        fontFamily='main'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        _selection={{ bg: 'yellow.300' }}
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
};
