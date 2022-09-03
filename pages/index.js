import React from 'react';
import SectionCard from '../components/card';

import { Typography } from '@mui/material';
import MiniCard from '../components/mini_card';
import ExpandPanel from '../components/expand_panel';

const about = (
  <div>
    <Typography>(Photo goes here)</Typography>
    <Typography sx={{ fontWeight: 600 }}>Mircea Taras</Typography>
    <Typography sx={{ fontStyle: 'italic' }}>
      Software Developer &amp; Consultant
    </Typography>
  </div>
);

const projects = [
  {
    title: 'Personal Site',
    subTitle: 'React JS',
    body: (
      <>
        <MiniCard pageLink="https://github.com/Rikoru/rikoru.github.io">
          <Typography>
            Need to figure out why this is escaping the bounds... respect the
            sizing please....
          </Typography>
          <Typography>
            Originally built with HTML and a makefile, I have attempted to
            demonstrate some of the things I can do.
          </Typography>
        </MiniCard>
      </>
    ),
  },
  {
    title: 'Something else',
    subTitle: 'React JS',
  },
];

export default function Index() {
  const projectsList = () => {
    return <ExpandPanel items={projects}></ExpandPanel>;
  };

  return (
    <>
      <SectionCard title="About" icon="person">
        {about}
      </SectionCard>

      <Card title="Projects" icon="list">
        <Typography>Here are a few of my recent projects.</Typography>
        {projectsList()}
      </Card>

      <Card title="Portfolio" icon="book">
        <p>Can I also do a portfolio.</p>
      </Card>
    </>
  );
}

Index.getLayout;
