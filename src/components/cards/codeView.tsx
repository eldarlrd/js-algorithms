import {
  useBoolean,
  useDisclosure,
  useClipboard,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Flex,
  Button,
  Text,
  Tooltip,
  Collapse,
  ScaleFade,
  Input
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

export const CodeView = (props: CodeProps): JSX.Element => {
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
    <Card w={['21.5rem', 'md', 'xl']} borderWidth={1} borderColor='gray.300'>
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
            href={kebabCaseName}
            color='yellow.400'
            borderRadius='6'>
            #
          </Link>
        )}
      </CardHeader>

      <CardBody fontSize={[9.4, 12.8, 16]} my='-6'>
        <Flex direction='column' align='flex-start' gap='2'>
          <Flex gap='2'>
            <Button
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              onClick={setIsVisible}
              colorScheme='yellow'
              minW={[32, 36]}
              fontFamily='main'
              fontSize={[14, 16]}>
              <Text display='flex' align='center' gap='2'>
                <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                {isVisible ? 'Hide Code' : 'Show Code'}
              </Text>
            </Button>
            <Tooltip placement='right' borderRadius='6' label='Copy Code'>
              <Button
                aria-label='Run Code'
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                onClick={handleCopyCode}
                colorScheme='yellow'>
                <FontAwesomeIcon icon={clipboardIcon} />
              </Button>
            </Tooltip>
          </Flex>

          <Collapse in={isVisible}>
            <SyntaxHighlighter
              customStyle={{ borderRadius: 6 }}
              codeTagProps={{
                style: { fontFamily: 'Ubuntu Mono' }
              }}
              language='javascript'
              showLineNumbers
              showInlineLineNumbers
              style={gml}>
              {props.raw}
            </SyntaxHighlighter>
          </Collapse>
        </Flex>
      </CardBody>

      <CardFooter as='footer'>
        <Flex direction='column' align='flex-start' w='full' gap='2'>
          <Flex w='full' mb='2' gap='2'>
            <Input
              fontFamily='main'
              focusBorderColor='yellow.300'
              errorBorderColor='red.300'
              aria-label={argument}
              value={argument}
              _selection={{ bg: 'yellow.300' }}
              placeholder={props.placeholder}
              onInput={handleInput}
              onKeyDown={handleKey}
              bg='gray.100'
            />
            <Tooltip isDisabled={isSpinner} borderRadius='6' label='Run Code'>
              <Button
                aria-label='Run Code'
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                onClick={runCode}
                isLoading={isSpinner}
                colorScheme='yellow'>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </Flex>

          <Collapse in={isOpen}>
            <ScaleFade in={!isSpinner}>
              <Tooltip
                isDisabled={isError}
                borderRadius='6'
                label='Copy to Clipboard'>
                <Button
                  onClick={handleCopyResult}
                  colorScheme={isError ? 'red' : 'green'}
                  whiteSpace='normal'
                  fontFamily='main'
                  h='full'
                  py='2.5'>
                  <Text display='flex' gap='2' overflowWrap='anywhere'>
                    <FontAwesomeIcon
                      icon={isError ? faCircleExclamation : faHandHolding}
                    />
                    {result.toString().replace('ERROR:', '')}
                  </Text>
                </Button>
              </Tooltip>
            </ScaleFade>
          </Collapse>
        </Flex>
      </CardFooter>
    </Card>
  );
};
