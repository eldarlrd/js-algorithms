import { Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { useInView } from 'react-intersection-observer';

import { rot13Obj } from '@/algorithms/inputString/caesar-cipher.js';
import { palindromeObj } from '@/algorithms/inputString/palindrome-checker.js';
import { passwordVerifyObj } from '@/algorithms/inputString/password-verifier.js';
import { telephoneCheckObj } from '@/algorithms/inputString/phone-number-validator.js';
import { translatePigLatinObj } from '@/algorithms/inputString/pig-latin.js';
import { spinalCaseObj } from '@/algorithms/inputString/spinal-tap-case.js';
import { type ViewCategoryOrder } from '@/app.tsx';
import { CodeCard } from '@/components/cards/codeCard.tsx';
import { LINK_ITEMS } from '@/features/navbar.tsx';

export const InputString = ({
  setInViewCategory
}: ViewCategoryOrder): JSX.Element => {
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

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && setInViewCategory) {
      window.history.replaceState({}, '', LINK_ITEMS[1].id);
      setInViewCategory(1);
    }
  }, [inView, setInViewCategory]);

  return (
    <div ref={ref}>
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
    </div>
  );
};