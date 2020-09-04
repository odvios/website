import React, { FunctionComponent } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { useTheme, makeStyles, Tabs, Tab } from '@material-ui/core';
import { HeaderProps } from './Header';

const useStyles = makeStyles(theme => ({
  tabs: {
    flex: '0 0 auto',
    backgroundColor: theme.palette.primary.main,
  },
  indicator: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  horizontalTab: {
    display: 'inline',
    listStyleType: 'none',
    padding: '20px',
    zIndex: 1,
  },
  verticalTab: {
    display: 'inline',
    listStyleType: 'none',
    maxWidth: 'none',
    width: '100%',
    padding: '20px',
    margin: 'auto',
    zIndex: 1,
  },
}));

interface HeaderTabsProps extends Pick<HeaderProps, 'section' | 'setSection'> {
  isHorizontal: boolean;
  onClickTab?: () => void;
}

export const HeaderTabs: FunctionComponent<HeaderTabsProps> = ({
  section,
  setSection,
  isHorizontal,
  onClickTab,
}) => {
  const theme = useTheme()
  const classes = useStyles(theme);

  return (
    <Tabs
      className={classes.tabs}
      classes={{
        indicator: classes.indicator,
      }}
      orientation={isHorizontal ? 'horizontal' : 'vertical'}
      value={section}
    >
      <Tab
        classes={{
          root: isHorizontal ? classes.horizontalTab : classes.verticalTab,
        }}
        label='About Me'
        component={Link}
        to='aboutme'
        onSetActive={() => setSection(0)}
        spy
        hashSpy
        smooth
        offset={-100}
        onClick={onClickTab}
      />
      <Tab
        classes={{
          root: isHorizontal ? classes.horizontalTab : classes.verticalTab,
        }}
        label='Experience'
        component={Link}
        to='experience'
        onSetActive={() => setSection(1)}
        spy
        hashSpy
        smooth
        offset={-70}
        onClick={onClickTab}
      />
      <Tab
        classes={{
          root: isHorizontal ? classes.horizontalTab : classes.verticalTab,
        }}
        label='Skills'
        component={Link}
        to='skills'
        onSetActive={() => setSection(2)}
        spy
        hashSpy
        smooth
        offset={-70}
        onClick={onClickTab}
      />
      <Tab
        classes={{
          root: isHorizontal ? classes.horizontalTab : classes.verticalTab,
        }}
        label='Projects'
        component={Link}
        to='projects'
        onSetActive={() => setSection(3)}
        spy
        hashSpy
        smooth
        offset={-70}
        onClick={onClickTab}
      />
      <Tab
        classes={{
          root: isHorizontal ? classes.horizontalTab : classes.verticalTab,
        }}
        label='Contact'
        component={Link}
        to='contact'
        onSetActive={() => setSection(4)}
        spy
        hashSpy
        smooth
        offset={-700}
        onClick={() => {
          if (onClickTab) {
            onClickTab();
          }
          animateScroll.scrollToBottom();
        }}
       />
    </Tabs>
  );
}