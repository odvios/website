import React from 'react';
import { makeStyles, Typography, Divider, IconButton, Link } from '@material-ui/core';
import { Copyright, LinkedIn, GitHub } from '@material-ui/icons';
import { ContactForm } from './ContactForm';

const useStyles = makeStyles({
  contact: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto',
    minHeight: '50vh',
  },
  header: {
    textAlign: 'center',
  },
  footer: {
    display: 'flex',
  },
  iconGroup: {
    display: 'flex',
  },
  links: {
    display: 'flex',
  },
  linkParts: {
    paddingLeft: '1em',
    wordBreak: 'break-all',
  },
  copyrightFull: {
    flex: '1 1 auto',
    paddingTop: '1.5em',
    paddingLeft: '1em',
    margin: 0,
    textAlign: 'left',
  },
  copyright: {
    paddingRight: '5px',
    fontSize: 'small',
  },
});
 
export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Typography
        variant='h1'
        color='primary'
        classes={{
          h1: classes.header
        }}
      >
        Contact Me
      </Typography>
      <Divider/>
      <ContactForm/>
      <Divider/>
      <div className={classes.footer}>
        <p className={classes.copyrightFull}>
          <Copyright className={classes.copyright}/>
          Abeer Ahmed 2020 
        </p>
        <div className={classes.iconGroup}>
          <Link
            className={classes.links}
            href='https://www.linkedin.com/in/abeer-m-ahmed'
          >
            <IconButton
              aria-label='LinkedIn'
            >
              <LinkedIn fontSize='large'/>
            </IconButton>
          </Link>
          <Link
            className={classes.links}
            href='https://github.com/odvios'
          >
            <IconButton
              aria-label='GitHub'
            >
              <GitHub fontSize='large'/>
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}