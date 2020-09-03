import React, { FunctionComponent, useState } from 'react';
import { useTheme, makeStyles, AppBar, FormControlLabel, Switch, useMediaQuery, Drawer, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { MainProps } from '../Main';
import { HeaderTabs } from './HeaderTabs';

const useStyles = makeStyles({
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
    zIndex: 1400,
  },
  menuButton: {
    flex: '0 0 auto',
  },
  switch: {
    flex: '0 0 auto',
  },
  drawer: {
    marginTop: '64px',
  }
});

export interface HeaderProps extends MainProps {
  section: number;
  setSection: (newSection: number) => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  section,
  setSection,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const isWide = useMediaQuery(theme.breakpoints.up('md'));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar className={classes.appbar}>
      {isWide
        ? <HeaderTabs
          section={section}
          setSection={setSection}
          isHorizontal={isWide}
        />
      : <>
        <IconButton
          className={classes.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu fontSize='large'/>
        </IconButton>
        <Drawer
          anchor='top'
          open={isOpen}
          onClose={() => setIsOpen(false)}
          disableScrollLock
          hideBackdrop
          classes={{
            paperAnchorTop: classes.drawer,
          }}
        >
          <HeaderTabs
            onClickTab={() => setIsOpen(false)}
            section={section}
            setSection={setSection}
            isHorizontal={isWide}
          />
        </Drawer>
      </>
    }
    <FormControlLabel
      className={classes.switch}
      control={
        <Switch
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      }
      label={'Dark Mode'}
    />
    </AppBar>
  );
}