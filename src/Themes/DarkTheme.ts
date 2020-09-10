import { createMuiTheme } from '@material-ui/core/styles';
import { blue, blueGrey } from '@material-ui/core/colors'

export const DarkTheme = createMuiTheme({
  typography: {
    h1: {
      margin: '.25em 0',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: blue['A400'],
    },
    neutral: {
      main: blue['100']
    },
    secondary: {
      main: blueGrey['900']
    }
  },
});