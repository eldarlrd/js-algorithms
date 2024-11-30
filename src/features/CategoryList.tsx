import {
  Box,
  Heading,
  Spinner,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy, type ReactElement, Suspense } from 'preact/compat';

import { type CategoryDetails } from '@/algorithms/categories.ts';
const CodeView = lazy(() => import('@/components/cards/CodeView.tsx'));

const CategoryView = ({
  category
}: {
  category: CategoryDetails;
}): ReactElement => {
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

  return (
    <Box as='main'>
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

const CustomSpinner = (): ReactElement => (
  <VStack
    w={['21.5rem', 'md', 'xl']}
    justify='center'
    color='gray.900'
    flex='1'>
    <Spinner size='xl' />
  </VStack>
);

export const CategoryList = ({
  category
}: {
  category: CategoryDetails;
}): ReactElement => (
  <Suspense fallback={<CustomSpinner />}>
    <VisuallyHidden fontFamily='Ubuntu Mono, monospace'>
      Prevent FOUT
    </VisuallyHidden>

    <CategoryView key={category.title} category={category} />
  </Suspense>
);
