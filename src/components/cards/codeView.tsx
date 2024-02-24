import {
  useBoolean,
  useDisclosure,
  useClipboard,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Button,
  Tooltip,
  Collapse,
  ScaleFade,
  Input,
  VStack,
  HStack,
  Box
} from '@chakra-ui/react';
import {
  faEye,
  faEyeSlash,
  faClipboard,
  faClipboardCheck,
  faPlay,
  faHandHolding,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type StateUpdater, useState, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeProps {
  name: string;
  placeholder: string;
  code: (argument: string[]) => string;
  raw: string;
}

const CodeView = (props: CodeProps): JSX.Element => {
  const [isVisible, { toggle: setIsVisible }] = useBoolean();
  const { isOpen, onOpen } = useDisclosure();
  const [result, setResult] = useState('');
  const [argument, setArgument] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clipboardIcon, setClipboardIcon] = useState(faClipboard);

  const codeClipboard = useClipboard(props.raw);
  const resultClipboard = useClipboard(result);

  const kebabCaseName = `#${props.name.toLowerCase().replaceAll(' ', '-')}`;

  const runCode = (): void => {
    if (argument) {
      onOpen();
      setIsSpinner(true);
      setTimeout(() => {
        setIsSpinner(false);
      }, 200);
      setResult(props.code(argument.split(',')));
    }
  };

  const copyToClipboard = (
    text: string,
    clipboard: typeof codeClipboard
  ): void => {
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
    if (!isError && result) copyToClipboard(result, resultClipboard);
  };

  const handleInput = (e: JSX.TargetedInputEvent<HTMLInputElement>): void => {
    setArgument((e.target as HTMLInputElement).value);
  };

  const handleKey = (e: JSX.TargetedKeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') runCode();
  };

  useEffect(() => {
    const isErrorStr = result.toString().split(' ');
    setIsError(isErrorStr[0] === 'ERROR:');
  }, [result]);

  return (
    <Card
      id={kebabCaseName.slice(1)}
      w={['21.5rem', 'md', 'xl']}
      borderColor='gray.200'
      borderWidth={1}>
      <CardHeader
        as='h3'
        fontFamily='main'
        fontWeight='bold'
        fontSize={{ base: '2xl', md: '3xl' }}
        _selection={{ bg: 'yellow.300' }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}>
        {`${props.name} `}
        {isHovered && (
          <Link
            _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
            _selection={{ bg: 'gray.900' }}
            href={kebabCaseName}
            color='yellow.400'
            borderRadius='6'
            onDragStart={(e: DragEvent) => {
              e.preventDefault();
            }}>
            #
          </Link>
        )}
      </CardHeader>

      <CardBody fontSize={[9.4, 12.8, 16]} my='-6'>
        <VStack align='flex-start' gap='2'>
          <Box>
            <Button
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              fontSize={{ base: 14, md: 16 }}
              minW={{ base: 32, md: 36 }}
              onClick={setIsVisible}
              verticalAlign='middle'
              whiteSpace='pre-wrap'
              colorScheme='yellow'
              fontFamily='main'
              me='2'>
              <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
              {isVisible ? ' Hide' : ' Show'} Code
            </Button>

            <Tooltip
              placement='right'
              fontFamily='main'
              borderRadius='6'
              label='Copy Code'>
              <Button
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                fontSize={{ base: 14, md: 16 }}
                onClick={handleCopyCode}
                aria-label='Copy Code'
                colorScheme='yellow'>
                <FontAwesomeIcon icon={clipboardIcon} />
              </Button>
            </Tooltip>
          </Box>

          <Collapse in={isVisible}>
            <SyntaxHighlighter
              style={gml}
              showLineNumbers
              showInlineLineNumbers
              language='javascript'
              customStyle={{ borderRadius: 6 }}
              codeTagProps={{
                style: { fontFamily: 'Ubuntu Mono, monospace' }
              }}>
              {props.raw}
            </SyntaxHighlighter>
          </Collapse>
        </VStack>
      </CardBody>

      <CardFooter>
        <VStack align='flex-start' w='full' gap='2'>
          <HStack w='full' mb='2' gap='2'>
            <Input
              _selection={{ bg: 'yellow.300' }}
              placeholder={props.placeholder}
              focusBorderColor='yellow.300'
              errorBorderColor='red.300'
              onInput={handleInput}
              onKeyDown={handleKey}
              aria-label={argument}
              fontFamily='main'
              value={argument}
              bg='gray.100'
            />

            <Tooltip
              isDisabled={isSpinner}
              fontFamily='main'
              label='Run Code'
              borderRadius='6'>
              <Button
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                aria-label='Run Code'
                isLoading={isSpinner}
                colorScheme='yellow'
                onClick={runCode}>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </HStack>

          <Collapse in={isOpen}>
            <ScaleFade in={!isSpinner}>
              <Tooltip
                label='Copy to Clipboard'
                isDisabled={isError}
                fontFamily='main'
                borderRadius='6'>
                <Button
                  colorScheme={isError ? 'red' : 'green'}
                  onClick={handleCopyResult}
                  overflowWrap='anywhere'
                  verticalAlign='middle'
                  whiteSpace='pre-wrap'
                  fontFamily='main'
                  py='2.5'
                  h='full'>
                  <FontAwesomeIcon
                    icon={isError ? faCircleExclamation : faHandHolding}
                  />
                  {`  ${result.toString().replace('ERROR:', '')}`}
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
