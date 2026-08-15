import { Box, Heading, Spinner, VStack, VisuallyHidden } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type VNode } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import { type CategoryDetails } from '@/algorithms/categories.ts';

const CodeView = lazy(() => import('@/components/cards/CodeView.tsx'));

const CategoryView = ({ category }: { category: CategoryDetails }): VNode => {
  const categoryCards = category.funcArr.map((func) => (
    <CodeView
      // eslint-disable-next-line @typescript-eslint/unbound-method
      code={func.myFunc}
      key={func.name}
      name={func.name}
      placeholder={func.placeholder}
      raw={func.raw}
    />
  ));

  return (
    <Box as='main'>
      <Heading
        _selection={{ bg: 'yellow.300' }}
        alignItems='center'
        display='flex'
        fontFamily='main'
        gap='2.5'
        mx={{ base: 4, md: 8 }}
        my='8'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        userSelect='none'>
        <FontAwesomeIcon fixedWidth icon={category.icon} />
        {category.title}
      </Heading>
      <VStack
        align='flex-start'
        as='section'
        mx={[2, 4, 8]}
        spacing='8'
        w={['initial', 'fit-content']}>
        {categoryCards}
      </VStack>
    </Box>
  );
};

const CustomSpinner = (): VNode => (
  <VStack color='gray.900' flex='1' justify='center' w={['21.5rem', 'md', 'xl']}>
    <Spinner size='xl' />
  </VStack>
);

export const CategoryList = ({ category }: { category: CategoryDetails }): VNode => (
  <Suspense fallback={<CustomSpinner />}>
    <VisuallyHidden fontFamily='Ubuntu Mono, monospace'>Prevent FOUT</VisuallyHidden>

    <CategoryView category={category} key={category.title} />
  </Suspense>
);
