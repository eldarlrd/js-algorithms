import { Box, Heading, Spinner, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy, Suspense } from 'preact/compat';
import { useContext, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { useInView } from 'react-intersection-observer';

import {
  type CategoryDetails,
  CATEGORIES,
  kebabize
} from '@/algorithms/categories.ts';
import { InViewCategory } from '@/app.tsx';
const CodeView = lazy(() => import('@/components/cards/codeView.tsx'));

const CategoryView = ({
  category
}: {
  category: CategoryDetails;
}): JSX.Element => {
  const kebabCaseName = kebabize(category.title);

  const categoryCards = category.funcArr.map(func => (
    <CodeView
      key={func.name}
      name={func.name}
      placeholder={func.placeholder}
      // eslint-disable-next-line @typescript-eslint/unbound-method
      code={func.myFunc}
      raw={func.raw}
    />
  ));

  const { setInViewCategory } = useContext(InViewCategory);
  const { ref, inView } = useInView({
    threshold: 0.25
  });

  useEffect(() => {
    if (inView) {
      window.history.replaceState({}, '', kebabCaseName);
      setInViewCategory(kebabCaseName);
    }
  }, [inView, setInViewCategory, kebabCaseName]);

  return (
    <Box as='main' id={kebabCaseName.slice(1)}>
      <Heading
        display='flex'
        fontFamily='main'
        userSelect='none'
        alignItems='center'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        _selection={{ bg: 'yellow.300' }}
        mx={{ base: 4, md: 8 }}
        gap='2.5'
        my='8'>
        <FontAwesomeIcon icon={category.icon} fixedWidth />
        {category.title}
      </Heading>
      <VStack
        ref={ref}
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

const CustomSpinner = (): JSX.Element => (
  <VStack
    w={['21.5rem', 'md', 'xl']}
    justify='center'
    color='gray.900'
    flex='1'>
    <Spinner size='xl' />
  </VStack>
);

export const CategoryList = (): JSX.Element => (
  <Suspense fallback={<CustomSpinner />}>
    {CATEGORIES.map((category: CategoryDetails) => (
      <CategoryView key={category.title} category={category} />
    ))}
  </Suspense>
);
