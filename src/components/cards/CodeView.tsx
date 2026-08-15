import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  HStack,
  Input,
  Link,
  ScaleFade,
  Tooltip,
  VStack,
  useBoolean,
  useClipboard,
  useDisclosure
} from '@chakra-ui/react';
import {
  faCircleExclamation,
  faClipboard,
  faClipboardCheck,
  faEye,
  faEyeSlash,
  faHandHolding,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type TargetedInputEvent, type TargetedKeyboardEvent, type VNode } from 'preact';
import { type StateUpdater, useEffect, useRef, useState } from 'preact/hooks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { kebabize } from '@/algorithms/categories.ts';

interface CodeProps {
  code: (argument: string[]) => string;
  name: string;
  placeholder: string;
  raw: string;
}

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: a hassle to refactor
const CodeView = (props: CodeProps): VNode => {
  const [isVisible, { toggle: setIsVisible }] = useBoolean();
  const { isOpen, onOpen } = useDisclosure();
  const [argument, setArgument] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [result, setResult] = useState<string | number>('');
  const [clipboardIcon, setClipboardIcon] = useState(faClipboard);

  const codeClipboard = useClipboard(props.raw);
  const resultClipboard = useClipboard(result.toString());

  const inputRef = useRef<HTMLInputElement>(null);

  const kebabCaseName = '#' + kebabize(props.name);

  const runCode = (): void => {
    inputRef.current?.focus();
    if (argument) {
      onOpen();
      setIsSpinner(true);

      setTimeout(() => {
        setIsSpinner(false);
      }, 200);

      setResult(props.code(argument.split(',')));
    }
  };

  const copyToClipboard = (text: string, clipboard: typeof codeClipboard): void => {
    clipboard.setValue(text as unknown as StateUpdater<string>);
    clipboard.onCopy();
  };

  const handleCopyCode = (): void => {
    copyToClipboard(props.raw, codeClipboard);
    setClipboardIcon(faClipboardCheck);

    setTimeout(() => {
      setClipboardIcon(faClipboard);
    }, 1000);
  };

  const handleCopyResult = (): void => {
    if (!isError && result) copyToClipboard(result.toString(), resultClipboard);
  };

  const handleInput = (e: TargetedInputEvent<HTMLInputElement>): void => {
    setArgument((e.target as HTMLInputElement).value);
  };

  const handleKey = (e: TargetedKeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') runCode();
  };

  useEffect(() => {
    const isErrorStr = result.toString().split(' ');

    setIsError(isErrorStr[0] === 'ERROR:');
  }, [result]);

  return (
    <Card
      borderColor='gray.200'
      borderWidth={1}
      id={kebabCaseName.slice(1)}
      w={['21.5rem', 'md', 'xl']}>
      <CardHeader
        _selection={{ bg: 'yellow.300' }}
        as='h3'
        fontFamily='main'
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight='bold'
        onMouseEnter={(): void => {
          setIsHovered(true);
        }}
        onMouseLeave={(): void => {
          setIsHovered(false);
        }}>
        {props.name}{' '}
        {isHovered && (
          <Link
            _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
            borderRadius='6'
            color='yellow.400'
            href={kebabCaseName}
            onDragStart={(e: DragEvent): void => {
              e.preventDefault();
            }}
            userSelect={'none'}>
            #
          </Link>
        )}
      </CardHeader>

      <CardBody fontSize={[9.4, 12.8, 16]} my='-6'>
        <VStack align='flex-start' gap='2'>
          <Box>
            <Button
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              colorScheme='yellow'
              fontFamily='main'
              fontSize={{ base: 14, md: 16 }}
              me='2'
              minW={{ base: 32, md: 36 }}
              onClick={setIsVisible}
              verticalAlign='middle'
              whiteSpace='pre-wrap'>
              <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
              {isVisible ? ' Hide' : ' Show'} Code
            </Button>

            <Tooltip borderRadius='6' fontFamily='main' label='Copy Code' placement='right'>
              <Button
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                aria-label='Copy Code'
                colorScheme='yellow'
                fontSize={{ base: 14, md: 16 }}
                onClick={handleCopyCode}>
                <FontAwesomeIcon icon={clipboardIcon} />
              </Button>
            </Tooltip>
          </Box>

          <Collapse in={isVisible}>
            <SyntaxHighlighter
              codeTagProps={{
                style: { fontFamily: 'Ubuntu Mono, monospace' }
              }}
              customStyle={{ borderRadius: 6, paddingLeft: 16 }}
              language='javascript'
              style={gml}>
              {props.raw}
            </SyntaxHighlighter>
          </Collapse>
        </VStack>
      </CardBody>

      <CardFooter>
        <VStack align='flex-start' gap='2' w='full'>
          <HStack gap='2' mb='2' w='full'>
            <Input
              _selection={{ bg: 'yellow.300' }}
              aria-label={argument}
              bg='gray.100'
              errorBorderColor='red.300'
              focusBorderColor='yellow.300'
              fontFamily='main'
              onInput={handleInput}
              onKeyDown={handleKey}
              placeholder={props.placeholder}
              ref={inputRef}
              value={argument}
            />

            <Tooltip borderRadius='6' fontFamily='main' isDisabled={isSpinner} label='Run Code'>
              <Button
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                aria-label='Run Code'
                colorScheme='yellow'
                isLoading={isSpinner}
                onClick={runCode}>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </HStack>

          <Collapse in={isOpen}>
            <ScaleFade in={!isSpinner}>
              <Tooltip
                borderRadius='6'
                fontFamily='main'
                isDisabled={isError}
                label='Copy to Clipboard'>
                <Button
                  colorScheme={isError ? 'red' : 'green'}
                  fontFamily='main'
                  h='full'
                  onClick={handleCopyResult}
                  overflowWrap='anywhere'
                  py='2.5'
                  verticalAlign='middle'
                  whiteSpace='pre-wrap'>
                  <FontAwesomeIcon icon={isError ? faCircleExclamation : faHandHolding} />{' '}
                  {result.toString().replace('ERROR:', '')}
                </Button>
              </Tooltip>
            </ScaleFade>
          </Collapse>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default CodeView; // eslint-disable-line import/no-default-export
