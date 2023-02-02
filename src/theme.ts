import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: 'black',
    onPrimary: 'white',
    secondary: '#4fb848',
    onSecondary: 'white',
    background: 'white',
    onBackground: 'black',
    surface: 'white',
    onSurface: 'black',
    textSecondary: 'grey',
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'primary',
          color: 'onPrimary'
        }
      }
    }
  },
});
