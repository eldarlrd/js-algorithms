import { Box, Heading, VStack } from '@chakra-ui/react';
import { useContext, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { useInView } from 'react-intersection-observer';

import { CATEGORIES, type CategoryDetails } from '@/algorithms/categories.ts';
import { kebabize, InViewCategory } from '@/app.tsx';
import { CodeView } from '@/components/cards/codeView.tsx';

const CategoryView = ({
  category
}: {
  category: CategoryDetails;
}): JSX.Element => {
  const kebabCaseName = kebabize(category.title);

  const categoryCards: JSX.Element[] = [];
  category.funcArr.forEach(e => {
    categoryCards.push(
      <CodeView
        name={e.name}
        placeholder={e.placeholder}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  });

  const { setInViewCategory } = useContext(InViewCategory);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      window.history.replaceState({}, '', kebabCaseName);
      setInViewCategory(kebabCaseName);
    }
  }, [inView, setInViewCategory, kebabCaseName]);

  return (
    <Box as='main' ref={ref} id={kebabCaseName.slice(1)}>
      <Heading
        fontFamily='main'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        _selection={{ bg: 'yellow.300' }}
        mx={{ base: 4, md: 8 }}
        my='8'>
        {category.title}
      </Heading>
      <VStack
        as='section'
        align='flex-start'
        w={['initial', 'fit-content']}
        mx={[2, 4, 8]}
        spacing='8'>
        {categoryCards}
      </VStack>
    </Box>
  );
};

export const CategoryList = (): JSX.Element => (
  <>
    {CATEGORIES.map((category: CategoryDetails) => (
      <CategoryView key={category.title} category={category} />
    ))}
  </>
);
