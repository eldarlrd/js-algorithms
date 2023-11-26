import { Button } from '@chakra-ui/react';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useCallback, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const ScrollToTop = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const prevScrollPosition = useRef<number>(0);

  const handleScroll = useCallback(() => {
    prevScrollPosition.current - scrollPosition > 50
      ? setIsScrollingUp(true)
      : scrollPosition - prevScrollPosition.current > 50
        ? setIsScrollingUp(false)
        : null;
    setScrollPosition(window.scrollY);
    prevScrollPosition.current = scrollPosition;
  }, [scrollPosition]);

  const instantTop = (): void => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scrollPosition > 250 && isScrollingUp) setIsVisible(true);
    else setIsVisible(false);
  }, [scrollPosition, isScrollingUp]);

  return isVisible ? (
    <Button
      onClick={instantTop}
      colorScheme='yellow'
      pos='fixed'
      size={['sm', 'sm', 'md']}
      bottom='8'
      right='8'
      borderWidth={1}
      borderRadius='100%'
      borderColor='gray.900'
      zIndex='1'>
      <FontAwesomeIcon icon={faAnglesUp} size='xs' />
    </Button>
  ) : (
    <></>
  );
};
