import React, { useState } from 'react';
import { makeStyles, TextField, InputAdornment, Button } from '@material-ui/core';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        value={name}
        onChange={e => setName(e.target.value)}
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
        value={email}
        onChange={e => setEmail(e.target.value)}
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
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        classes={{
          root: classes.field,
        }}
        variant='contained'
        color='primary'
        aria-label='Send'
        // onClick={() => sendMail(name, email, message)}
      >
        <Send fontSize='large'/>
      </Button>
    </div>
  );
}