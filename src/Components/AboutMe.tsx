import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  aboutme: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
  },
  bio: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  img: {
    flex: '0 0 auto',
    margin: '2.5em',
    maxWidth: '200px',
    maxHeight: '200px',
    width: 'auto',
    height: 'auto',
    borderRadius: '50%',
  },
  description: {
    flex: '1 1 auto',
    marginTop: '1.5em',
    maxWidth: '950px',
  },
});
 
export const AboutMe = () => {
  const classes = useStyles();
  return(
    <div className={classes.aboutme}>
      <Typography
        variant='h1'
        color='primary'
        classes={{
          h1: classes.header
        }}
      >
        About Me
      </Typography>
      <Divider/>
      <div className={classes.bio}>
        <img
          className={classes.img}
          src='https://i.imgur.com/An13jso.jpg'
          alt=''
        />
        <Typography
          variant='h6'
          classes={{
            h6: classes.description
          }}
        >
          Hello and welcome to my website! My name is Abeer Ahmed, and I'm a software engineer.
          I currently live and work near Philadelphia, PA, but I'm originally from New York State.
          When I'm not writing code, I enjoy learning new languages (currently French and a little German), practicing
          Historical European Martial Arts (HEMA), and playing tabletop rpgs and video games.
        </Typography>
      </div>
    </div>
  );
}