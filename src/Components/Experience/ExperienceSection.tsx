import React, { FunctionComponent } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  experience: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '2em 0',
  },
  timeandplace: {
    flex: '0 0 auto',
    width: '270px',
    fontWeight: 'bold',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    flex: '0 1 auto',
    maxWidth: '700px',
  },
  role: {
  },
  description: {
    wordWrap: 'break-word',
  },
});

interface ExperienceSectionProps {
  place: string;
  time: string;
  role: string;
  details: string;
}

export const ExperienceSection: FunctionComponent<ExperienceSectionProps> = ({
  place,
  time,
  role,
  details,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.experience}>
      <div className={classes.timeandplace}>
        <Typography
          variant='h6'
          align='left'
        >
          {place}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
        >
          {time}
        </Typography>
      </div>
      <div className={classes.info}>
        <Typography
          variant='h6'
          align='left'
          classes={{
            h6: classes.role
          }}
        >
          {role}
        </Typography>
        <Typography
          variant='subtitle1'
          align='left'
          color='textSecondary'
          classes={{
            subtitle1: classes.description
          }}
        >
          {details}
        </Typography>
      </div>
    </div>
  );
}