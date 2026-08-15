import { Box, Button } from '@chakra-ui/react';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { type VNode } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { useLocation } from 'react-router';

export const ScrollToTop = (): VNode => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const prevScrollPosition = useRef(0);

  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    const scrollPosDiff = prevScrollPosition.current - scrollPosition;
    const isScrollingUp = scrollPosDiff > 50;
    const isScrollingDown = -scrollPosDiff > 50;

    if (isScrollingUp !== isScrollingDown) setIsScrollingUp(isScrollingUp);

    setScrollPosition(window.scrollY);
    prevScrollPosition.current = scrollPosition;
  }, [scrollPosition]);

  const instantTop = (): void => {
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

  useEffect(() => {
    instantTop();
  }, [pathname]);

  return (
    <Box
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      as={motion.div}
      bottom='8'
      initial={{ opacity: 0 }}
      pos='fixed'
      right='8'
      transition='easeInOut 0.2s'
      zIndex='1'>
      <Button
        borderColor='gray.700'
        borderRadius='100%'
        borderWidth={1}
        colorScheme='yellow'
        onClick={instantTop}
        size={{ base: 'sm', md: 'md' }}>
        <FontAwesomeIcon icon={faAnglesUp} size='xs' />
      </Button>
    </Box>
  );
};
