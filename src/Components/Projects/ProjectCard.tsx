import React, { FunctionComponent } from 'react';
import { makeStyles, Card, CardActionArea, CardMedia, CardActions, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '85vw',
    maxWidth: '1150px',
  },
  media: {
    height: '40vw',
  }
});

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  projectLink: string;
  downloadLink: string;
  downloadName: string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  image,
  title,
  description,
  projectLink,
  downloadLink,
  downloadName,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
        href={projectLink}
      >
        <CardMedia
          classes={{
            root: classes.media
          }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            variant='h4'
            gutterBottom
            color='primary'
          >
            {title}
          </Typography>
          <Typography
            variant='body1'
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color='primary'
          href={downloadLink}
        >
          {downloadName}
        </Button>
      </CardActions>
    </Card>
  );
}