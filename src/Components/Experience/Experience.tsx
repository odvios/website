import React from 'react';
import { useTheme, makeStyles, Typography, Divider } from '@material-ui/core';
import { ExperienceSection } from './ExperienceSection';
 
const useStyles = makeStyles(theme => ({
  experience: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '100vh',
  },
  headerLarge: {
    textAlign: 'center',
    color: theme.palette?.neutral?.main,
  },
  header: {
    color: theme.palette?.neutral?.main,
  }
}));
 
export const Experience = () => {
  const theme = useTheme()
  const classes = useStyles(theme);
  return(
    <div className={classes.experience}>
      <Typography
        variant='h1'
        classes={{
          h1: classes.headerLarge
        }}
      >
        Experience
      </Typography>
      <Divider/>
      <Typography
        variant='h4'
        align='left'
        classes={{
          h4: classes.header
        }}
      >
        Work Experience
      </Typography>
      <ExperienceSection
        place='Wingspan Technology / IQVIA'
        time='Oct 2016 - Present'
        role='Software Engineer'
        details='hjsdfkiljashdfklashnf jklashjnfkl;ashjfkjlas hfjkashdfjkashdfkja shdfkjahsdklfj ashdjkfasfasdfasdf'
      />
      <ExperienceSection
        place='IBM'
        time='Aug 2015 - Dec 2015'
        role='Intern Programmer'
        details='hjsdfkiljashdfklashnf jklashjnfkl;ashjfkjlas hfjkashdfjkashdfkja shdfkjahsdklfj ashdjkfasfasdfasdf'
      />
      <ExperienceSection
        place='IMSWorkX, Inc.'
        time='Jun 2014 - Dec 2014'
        role='Software Engineering Co-op'
        details='hjsdfkiljashdfklashnf jklashjnfkl;ashjfkjlas hfjkashdfjkashdfkja shdfkjahsdklfj ashdjkfasfasdfasdf'
      />
      <ExperienceSection
        place='SI at RIT'
        time='Sep 2013 - Dec 2013'
        role='Supplemental Instructor'
        details={`I sat in on Intro to Computer Science classes with students and acted as a 'model student' for them. I also held two 1 hour sessions a week helping students develop better study skills and helping them out with course material.`}
      />
      <Divider/>
      <Typography
        variant='h4'
        align='left'
        classes={{
          h4: classes.header
        }}
      >
        Education
      </Typography>
      <ExperienceSection
        place='Rochester Institute of Technology'
        time='Sep 2012 - May 2016'
        role={`Bachelor's in Computer Science`}
        details='asdfshdfkjsdfkjasdfjk'
      />
    </div>
  );
}