import { Highlight, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type VNode } from 'preact';

export const Footer = (): VNode => (
  <Stack
    align='center'
    as='footer'
    bg='gray.900'
    color='gray.100'
    direction={['column', 'row']}
    fontFamily='main'
    gap='1'
    maxW='full'
    mt='12'
    px={{ md: 4 }}
    py='6'
    spacing='0'
    userSelect='none'>
    <Text fontWeight='bold'>
      <Highlight
        query='JS'
        styles={{ bg: 'yellow.300', borderRadius: '6', pb: '0.5', pe: '0.5', ps: '3', pt: '2.5' }}>
        JS Algorithms
      </Highlight>
    </Text>
    © 2022 - 2026
    <Tooltip borderRadius='6' fontFamily='main' label='Source'>
      <Link
        _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
        borderRadius='6'
        color='yellow.300'
        href='https://github.com/eldarlrd/js-algorithms'
        isExternal
        onDragStart={(e: DragEvent): void => {
          e.preventDefault();
        }}>
        eldarlrd <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Tooltip>
  </Stack>
);
