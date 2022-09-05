import React, { useMemo } from 'react';

import SectionCard from '../components/section_card';
import ExpandPanel from '../components/expand_panel';
import MiniCard from '../components/mini_card';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const about = (
  <div>
    <Typography>(Photo goes here)</Typography>
    <Typography>Mircea Taras</Typography>
    <Typography variant="body2">Software Developer &amp; Consultant</Typography>
    <Divider />
  </div>
);

const projects = [
  {
    title: 'Personal Site',
    subTitle: 'React JS',
    body: (
      <>
        <MiniCard pageLink="https://github.com/Rikoru/rikoru.github.io">
          <>
            <Typography paragraph>
              I built this site with NextJS + React + Material UI. If you look
              through the source you can see the old version of the site, which
              was built with HTML and a makefile.
            </Typography>
            <Typography paragraph>
              A lot has changed since I first made it, given that I was still in
              University when I started working on the original version. I think
              it will continue to evolve with time, but this is where it has
              currently landed.
            </Typography>
          </>
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
  const projectsList = useMemo(() => {
    return <ExpandPanel items={projects}></ExpandPanel>;
  }, projects);

  return (
    <>
      <SectionCard title="About" icon="person">
        {about}
      </SectionCard>

      <SectionCard title="Projects" icon="list">
        <>
          <Typography paragraph>
            Here are a few of my recent projects, in no particular order. This
            area will continue to change as new ideas percolate.
          </Typography>
          {projectsList}
        </>
      </SectionCard>

      <SectionCard title="Portfolio" icon="book">
        <p>Can I also do a portfolio.</p>
      </SectionCard>
    </>
  );
}

Index.getLayout;
