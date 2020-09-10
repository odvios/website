import React, { useState } from 'react';
import { makeStyles, Typography, TextField, InputAdornment, Button } from '@material-ui/core';
import { AccountCircle, Email, Send } from '@material-ui/icons';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1.5em auto',
    maxWidth: '500px',
    minHeight: '25vh',
  },
  field: {
    flex: '1 1 auto',
    margin: '1em 1em',
  },
});

emailjs.init('user_draNQTKqfmIONytpPSarE');

const sendMail = async (name: string, email: string, message?: string): Promise<EmailJSResponseStatus> =>
  await emailjs.send('website_email', 'template_i1ywfom', {
    name,
    email,
    message,
  });

const validateEmail = (email: string): boolean => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

export const ContactForm = () => {
  const classes = useStyles();
  const [hasSent, setHasSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div
      className={classes.form}
    >
      {hasSent
        ? <Typography
            variant='h4'
            align='center'
          >
            Thanks!
          </Typography>
        : <>
            <TextField
              classes={{
                root: classes.field,
              }}
              required
              error={showErrors && !name}
              helperText={showErrors && !name ? 'Field is required.' : ''}
              variant='standard'
              label='Name'
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
              error={showErrors && (!email || !validateEmail(email))}
              helperText={
                showErrors && !email
                  ? 'Field is required.'
                  : showErrors && !validateEmail(email)
                    ? 'Invalid email address.'
                    : ''
              }
              variant='standard'
              label='E-Mail'
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
              variant='standard'
              label='Message'
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
              onClick={() => {
                if (name && email && validateEmail(email)) {
                  sendMail(name, email, message)
                    .then(() => {
                      setHasSent(true);
                      setName('');
                      setEmail('');
                      setMessage('');
                    })
                    .catch(err => alert(err.text))
                } else {
                  setShowErrors(true);
                }
              }}
            >
              <Send fontSize='large'/>
            </Button>
          </>
      }
    </div>
  );
}