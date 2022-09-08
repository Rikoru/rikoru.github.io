import React from 'react';
import Typography from '@mui/material/Typography';

const projects = [
  {
    title: 'Personal Site',
    subTitle: 'React JS',
    body: (
      <>
        <Typography paragraph>
          I built this site with NextJS + React + Material UI. If you look
          through the source you can see the old version of the site, which was
          built with HTML and a makefile.
        </Typography>
        <Typography paragraph>
          A lot has changed since I first made it, given that I was still in
          University when I started working on the original version. I think it
          will continue to evolve with time, but this is where it has currently
          landed.
        </Typography>
      </>
    ),
    pageLink: 'https://github.com/Rikoru/rikoru.github.io',
  },
  {
    title: 'Searchable Card React Component',
    subTitle: 'React JS',
    body: (
      <>
        <Typography paragraph>Details TBD</Typography>
      </>
    ),
  },
  {
    title: 'Other',
    subTitle: 'React JS',
    body: (
      <>
        <Typography paragraph>Details TBD</Typography>
      </>
    ),
  },
];

export default function getProjects() {
  return projects;
}
