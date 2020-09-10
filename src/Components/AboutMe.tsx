import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import profilePic from '../Images/profile_pic.jpg';

const useStyles = makeStyles({
  aboutme: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '50vh',
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
    marginTop: '2.5em',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '200px',
    maxHeight: '200px',
    width: 'auto',
    height: 'auto',
    borderRadius: '50%',
  },
  description: {
    flex: '1 1 auto',
    marginTop: '1.5em',
    maxWidth: '900px',
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
          src={profilePic}
          alt=''
        />
        <Typography
          variant='h6'
          classes={{
            h6: classes.description
          }}
        >
          Hello and welcome to my website! My name is Abeer Ahmed, and I'm a software engineer.
          I've done a lot of backend OOP work using Java, but lately I've gotten more into frontend work using React and TypeScript.
          I currently live and work near Philadelphia, PA, but I'm originally from New York State.
          When I'm not writing code, I enjoy learning new languages (currently French and a little German), practicing
          Historical European Martial Arts (HEMA), and playing tabletop rpgs and video games.
        </Typography>
      </div>
    </div>
  );
}