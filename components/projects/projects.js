import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const projects = [
  {
    title: 'Personal Site',
    subTitle: 'React JS',
    body: (
      <React.Fragment>
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
      </React.Fragment>
    ),
    pageLink: 'https://github.com/Rikoru/rikoru.github.io',
  },
  {
    title: 'Searchable Card React Component',
    subTitle: 'React JS',
    body: (
      <React.Fragment>
        <Typography paragraph>Details TBD</Typography>
      </React.Fragment>
    ),
  },
  {
    title: 'Other',
    subTitle: 'React JS',
    body: (
      <React.Fragment>
        <Typography paragraph>Details TBD</Typography>
      </React.Fragment>
    ),
  },
];

export function getProjects() {
  return projects;
}

/**
 * { title: '', subTitle: '', body: (), pageLink: ''}
 */
export const projectProp = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  body: PropTypes.node,
  pageLink: PropTypes.node,
};

/**
 * { items: [ {}]}
 */
export const projectArrayProp = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...projectProp,
    })
  ),
};
