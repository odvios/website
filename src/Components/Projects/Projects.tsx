import React from 'react';
import { useTheme, makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import { ProjectCard } from './ProjectCard';
 
const useStyles = makeStyles(theme => ({
  projects: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: theme.palette?.neutral?.main,
  },
  grid: {
    margin: '1em 0',
  },
}));

export const Projects = () => {
  const theme = useTheme()
  const classes = useStyles(theme);
  return (
    <div className={classes.projects}>
      <Typography
        variant='h1'
        classes={{
          h1: classes.header
        }}
      >
        Projects
      </Typography>
      <Divider/>
      <Grid
        className={classes.grid}
        container
        spacing={4}
      >
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard/>
        </Grid>
      </Grid>
    </div>
  );
}