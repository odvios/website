import React from 'react';
import { makeStyles, Card, CardHeader, CardActions, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    // minWidth: '100px',
  },
});

export const ProjectCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        
      />
      <CardContent>

      </CardContent>
    </Card>
  );
}