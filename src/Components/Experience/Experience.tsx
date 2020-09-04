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
    margin: '1em 0',
  },
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
        details={
          `When I started at Wingspan (later acquired by IQVIA), I was immediately exposed to a full stack environment, working on reformatting older JavaScript to ES6,
          while also working on bash scripts to organize and publish said JavaScript to our repository automatically through Bamboo. My work in this company has taken me
          through multiple support and patch releases, which involved fixing issues ranging from database issues to frontend CSS and JavaScript bugs. I helped to improve the
          build process using bash scripts and docker, and helped implement differerent features in our Scala and Java code as well. I also created the entire UI portion of a
          large new feature in one of our applications using TypeScript, MobX, and React.js, and coordinated to wire everything together with the backend.`
        }
      />
      <ExperienceSection
        place='IBM'
        time='Aug 2015 - Dec 2015'
        role='Intern Programmer'
        details={`I worked with the IBM Doors Next Generation Platform, wrote a number of JUnit tests and fixed defects and helped with support.`}
      />
      <ExperienceSection
        place='IMSWorkX, Inc.'
        time='Jun 2014 - Dec 2014'
        role='Software Engineering Co-op'
        details={
          `I worked to redesign and improve their existing testing infrastructure using a combination of Ansible and bash scripts.
          I did some server management on CentOS, including setting up new ones and worked a bit with firewalls.
          I also wrote a Python script using BeautifulSoup to scrape the web for certain data and format it into a spreadsheet.`
        }
      />
      <ExperienceSection
        place='SI at RIT'
        time='Sep 2013 - Dec 2013'
        role='Supplemental Instructor'
        details={
          `I sat in on Intro to Computer Science classes with students and acted as a 'model student' for them.
          I also held two 1 hour sessions a week helping students develop better study skills and helping them out with course material.`
        }
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
        details={
          `I took courses for a variety of coursework including Computer Science Theory, Computer Graphics, Computer Security, Distributed Systems, Data Mining, Intelligent Systems, Data Management, and a fair bit more.
          My education here covered many of the data structures and algorithms that are commonplace in software today, including Maps, N-ary trees, Dijkstra's Algorithm, etc., and was taught mostly in Java,
          with a good bit of Python and some C.`
        }
      />
    </div>
  );
}