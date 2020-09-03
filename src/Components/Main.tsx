import React, { FunctionComponent, useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core';
import { Header } from './Header/Header';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },

  content: {
    flex: '1 1 auto',
    marginTop: '3em',
  },

  section: {
    padding: '1em 0 2em 0',
  },

  offSection: {
    padding: '1em 0 2em 0',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export interface MainProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const Main: FunctionComponent<MainProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  const theme = useTheme()
  const classes = useStyles(theme);
  const [section, setSection] = useState(0);

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        section={section}
        setSection={setSection}
      />
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.section} id='aboutme'>
            <AboutMe/>
          </div>
          <div className={classes.offSection} id='experience'>
            <Experience/>
          </div>
          <div className={classes.section} id='skills'>
            <Skills/>
          </div>
          <div className={classes.offSection} id='projects'>
            <Projects/>
          </div>
          <div className={classes.section} id='contact'>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
}