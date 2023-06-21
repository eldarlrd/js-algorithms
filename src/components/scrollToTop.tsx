import { Button } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useCallback, useEffect } from 'preact/hooks';

export const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [visible, setVisible] = useState(false);
  const prevScrollPosition = useRef(0);

  const handleScroll = useCallback(() => {
    prevScrollPosition.current = scrollPosition;
    setScrollPosition(window.scrollY);
  }, [scrollPosition]);

  const instantTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log(scrollPosition);
    console.log(prevScrollPosition.current);
    scrollPosition < prevScrollPosition.current
      ? setIsScrollingUp(true)
      : setIsScrollingUp(false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition > 250 && isScrollingUp) setVisible(true);
    else setVisible(false);
  }, [scrollPosition]);

  return visible ? (
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
  ) : null;
};
