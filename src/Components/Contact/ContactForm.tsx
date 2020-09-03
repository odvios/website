import React from 'react';
import { makeStyles, Paper, TextField, InputAdornment, Button } from '@material-ui/core';
import { AccountCircle, Email, Send } from '@material-ui/icons';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1.5em auto',
    maxWidth: '500px',
  },
  field: {
    flex: '1 1 auto',
    margin: '1em 1em',
  },
});

export const ContactForm = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.form}
    >
      <TextField
        classes={{
          root: classes.field,
        }}
        required
        variant='standard'
        placeholder='Name'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        classes={{
          root: classes.field,
        }}
        required
        variant='standard'
        placeholder='E-Mail'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        classes={{
          root: classes.field,
        }}
        required
        variant='standard'
        multiline
        rows={4}
        placeholder='Message'
      />
      <Button
        classes={{
          root: classes.field,
        }}
        variant='contained'
        color='primary'
        aria-label='Send'
      >
        <Send fontSize='large'/>
      </Button>
    </div>
  );
}