// @ts-nocheck
import {
  extendTheme,
  theme as defaultTheme,
} from '@chakra-ui/react';

// https://chakra-ui.com/docs/styled-system/theme
export default extendTheme({
  fonts: { main: 'Ubuntu, sans-serif' },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          '@media (hover: none)': {
            _hover: {
              bg: defaultTheme.components.Button.variants?.solid(props).bg
            }
          }
        })
      }
    }
  }
});