import { Heading, Highlight } from '@chakra-ui/react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'preact/compat';

export const Header = (): ReactElement => (
  <Heading
    as='header'
    bg='yellow.100'
    userSelect='none'
    borderBottomWidth={1}
    borderColor='gray.200'
    px={{ base: 4, md: 8 }}
    py='8'
    textAlign={['center', 'start']}
    fontFamily='main'>
    <FontAwesomeIcon style={{ marginInlineEnd: '10px' }} icon={faCode} />
    <Highlight
      query='JS'
      styles={{
        px: 2,
        py: 1,
        rounded: 6,
        bg: 'yellow.300',
        color: 'gray.900'
      }}>
      Interactive JS Algorithms
    </Highlight>
  </Heading>
);
