import { Button } from '@chakra-ui/react';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { categories } from '@/algorithms/categories.ts';
import { kebabize, InViewCategory } from '@/app.tsx';

export const ScrollToTop = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPosition = useRef(0);
  const { setInViewCategory } = useContext(InViewCategory);

  const handleScroll = useCallback(() => {
    const scrollPosDiff = prevScrollPosition.current - scrollPosition;
    const isScrollingUp = scrollPosDiff > 50;
    const isScrollingDown = -scrollPosDiff > 50;

    isScrollingUp !== isScrollingDown && setIsScrollingUp(isScrollingUp);

    setScrollPosition(window.scrollY);
    prevScrollPosition.current = scrollPosition;
  }, [scrollPosition]);

  const instantTop = (): void => {
    setInViewCategory(kebabize(categories[0].title));
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const removeScroll = (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return removeScroll;
  }, [handleScroll]);

  useEffect(() => {
    setIsVisible(scrollPosition > 250 && isScrollingUp);
  }, [scrollPosition, isScrollingUp]);

  return isVisible ?
      <Button
        size={{ base: 'sm', md: 'md' }}
        onClick={instantTop}
        colorScheme='yellow'
        pos='fixed'
        bottom='8'
        right='8'
        borderWidth={1}
        borderRadius='100%'
        borderColor='gray.700'
        zIndex='1'>
        <FontAwesomeIcon icon={faAnglesUp} size='xs' />
      </Button>
    : <></>;
};
