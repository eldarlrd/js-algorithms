import { Box, Button } from '@chakra-ui/react';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';
import { InViewCategory } from '@/app.tsx';

export const ScrollToTop = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const { setInViewCategory } = useContext(InViewCategory);
  const prevScrollPosition = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollPosDiff = prevScrollPosition.current - scrollPosition;
    const isScrollingUp = scrollPosDiff > 50;
    const isScrollingDown = -scrollPosDiff > 50;

    if (isScrollingUp !== isScrollingDown) setIsScrollingUp(isScrollingUp);

    setScrollPosition(window.scrollY);
    prevScrollPosition.current = scrollPosition;
  }, [scrollPosition]);

  const instantTop = (): void => {
    setInViewCategory(kebabize(CATEGORIES[0].title));
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

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      transition='easeInOut 0.2s'
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      pos='fixed'
      bottom='8'
      right='8'
      zIndex='1'>
      <Button
        size={{ base: 'sm', md: 'md' }}
        onClick={instantTop}
        colorScheme='yellow'
        borderWidth={1}
        borderRadius='100%'
        borderColor='gray.700'>
        <FontAwesomeIcon icon={faAnglesUp} size='xs' />
      </Button>
    </Box>
  );
};
