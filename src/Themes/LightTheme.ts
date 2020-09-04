import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

export const LightTheme = createMuiTheme({
  typography: {
    h1: {
      margin: '.25em 0',
    },
  },
  palette: {
    primary: {
      main: lightBlue['A200'],
    },
    neutral: {
      main: lightBlue['800']
    },
    secondary: {
      main: lightBlue['50']
    }
  },
});