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
        <Grid item xs={12} sm={12} md={12}>
          <ProjectCard
            image='https://i.imgur.com/LeYqvlE.png'
            title='PDF-Splicer'
            description={
              `PDF-Splicer is a Java application that can combine pages from multiple existing pdfs to create a new one.
              It is able to handle loading multiple pdfs, displaying a preview of each one, adding specific page ranges from different pdfs,
              and then preview the final pdf before actually saving. I used Apache PDFBox to parse through the pdfs, and used an MVC design in my code.`
            }
            projectLink='https://github.com/odvios/pdf-splicer'
            downloadLink='https://github.com/odvios/pdf-splicer/releases/download/v0.2.0/PDF-Splicer.jar'
            downloadName='Download Version 0.2'
          />
        </Grid>
      </Grid>
    </div>
  );
}

// https://i.imgur.com/LeYqvlE.png
// https://i.imgur.com/nSlNacJ.png
// https://i.imgur.com/0bh6PJo.png