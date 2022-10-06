import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Typography from '@mui/material/Typography';

const projects = [
  {
    title: 'Personal Site',
    subTitle: 'React JS',
    body: (
      <React.Fragment>
        <Typography paragraph>
          I built this site with NextJS + React + Material UI. If you look
          through the source code (in the "old" folder) you can see the previous
          version of the site, which was built with HTML and a makefile. It'll
          continue to evolve, so I recommend checking in every now and again.
        </Typography>
        <>
          <Link href="/posts">I've started blogging about the process!</Link>
        </>
      </React.Fragment>
    ),
    pageLink: 'https://github.com/Rikoru/rikoru.github.io',
  },
  // {
  //   title: 'Searchable Card React Component',
  //   subTitle: 'React JS',
  //   body: (
  //     <React.Fragment>
  //       <Typography paragraph>Details TBD</Typography>
  //     </React.Fragment>
  //   ),
  // },
  // {
  //   title: 'Other',
  //   subTitle: 'React JS',
  //   body: (
  //     <React.Fragment>
  //       <Typography paragraph>Details TBD</Typography>
  //     </React.Fragment>
  //   ),
  // },
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
