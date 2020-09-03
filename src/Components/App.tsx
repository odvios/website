import React, { useState } from 'react';
import { CssBaseline, Paper, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import { DarkTheme } from '../Themes/DarkTheme';
import { LightTheme } from '../Themes/LightTheme';
import { Main } from './Main';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode
    ? responsiveFontSizes(DarkTheme)
    : responsiveFontSizes(LightTheme)
    ;

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Paper>
          <Main
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </Paper>
      </ThemeProvider>
    </CssBaseline>
  );
}