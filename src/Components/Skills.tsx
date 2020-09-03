import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
 
const useStyles = makeStyles({
  skills: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
  },
  langsandtools: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  langs: {
    flex: '1 0 auto',
    width: '280px',
  },
  tools: {
    flex: '0 1 auto',
  },
});

const progLangs = [
  'Python',
  'Java',
  'C',
  'Bash',
  'MySQL',
  'PostgreSQL',
  'Scala',
  'JavaScript',
  'TypeScript',
  'jQuery',
  'React.js',
  'HTML',
  'CSS',
];

const tools = [
  'Vim',
  'Git',
  'Subversion',
  'Webpack',
  'Atlassian Bamboo',
  'Docker',
  'Linux (Ubuntu and CentOS)',
  'MacOS',
  'Windows',
  'Apache Tomcat',
  'Eclipse',
  'IntelliJ IDEA',
  'Bitbucket',
  'JIRA',
  'Node.js',
  'NPM / Yarn',
]
 
export const Skills = () => {
  const classes = useStyles();
  return(
    <div className={classes.skills}>
      <Typography
        variant='h1'
        color='primary'
        classes={{
          h1: classes.header
        }}
      >
        Skills
      </Typography>
      <Divider/>
      <div className={classes.langsandtools}>
        <div className={classes.langs}>
          <Typography
            variant='h4'
            align='left'
            color='primary'
          >
            Programming / Scripting Languages
          </Typography>
          {progLangs.map(lang =>
            <Typography
              variant='h6'
              gutterBottom
            >
              - {lang}
            </Typography>
          )}
        </div>
        <div className={classes.tools}>
          <Typography
            variant='h4'
            align='left'
            color='primary'
          >
            Tools
          </Typography>
          {tools.map(tool =>
            <Typography
              variant='h6'
              gutterBottom
            >
              - {tool}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}