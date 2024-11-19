import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',  // This sets the color mode to dark by default
  useSystemColorMode: false, // Disable system color mode so it doesn't override
};

const styles = {
  global: {
    body: {
      bg: 'dark', // Ensure the background is set to black globally
      color: 'white', // Set text color to white
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
