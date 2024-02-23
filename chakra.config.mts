import {
  extendTheme,
  theme as defaultTheme,
  type StyleFunctionProps
} from '@chakra-ui/react';

// https://chakra-ui.com/docs/styled-system/theme
export default extendTheme({
  fonts: { main: 'Ubuntu, sans-serif' },
  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
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