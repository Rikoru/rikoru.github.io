import React, { useMemo } from 'react';
import Link from 'next/link';

import SectionCard from '../components/section_card';
import ExpandPanel from '../components/expand_panel';
import MiniCard from '../components/mini_card';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DrawIcon from '@mui/icons-material/BrushRounded';
import CraftIcon from '@mui/icons-material/ContentCutRounded';

const about = (
  <div>
    <Typography>(Photo goes here)</Typography>
    <Typography>Mircea Taras</Typography>
    <Typography sx={{ fontStyle: 'italic' }}>
      Full-stack Software Developer &amp; Consultant
    </Typography>

    <Divider sx={{ margin: '1rem 0' }} />

    <Typography paragraph>
      Hi, my name is Mircea, among my various interests, I also moonlight as a
      technical consultant. With 3+ years in software development, I&apos;ve got
      a decent list of skills I can share with anyone that needs them.
    </Typography>
    <Typography paragraph>
      I&apos;m aiming to become more of a generalist, but my skills fall more
      into software development than in dev-ops. I&apos;m available to chat,
      whether you need help with your internal tools or your customer-facing
      features.{' '}
    </Typography>
    <Link href="/contact" passHref>
      <Button variant="outlined">Reach out today!</Button>
    </Link>

    <Divider sx={{ margin: '1rem 0' }} />

    <Typography paragraph>
      If you&apos;re looking for my creative endeavours:
    </Typography>

    <Stack spacing={1} direction="row">
      <Link href="https://www.instagram.com/meerkat.art/" passHref>
        <Button variant="outlined" startIcon={<DrawIcon />}>
          Art Instagram
        </Button>
      </Link>
      <Link href="https://www.instagram.com/mircea.crafts/" passHref>
        <Button variant="outlined" startIcon={<CraftIcon />}>
          Crafts Instagram
        </Button>
      </Link>
    </Stack>
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
    title: 'TBD',
    subTitle: '...',
    body: (
      <>
        <MiniCard>
          <>
            <Typography>TBD</Typography>
          </>
        </MiniCard>
      </>
    ),
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
            Here are a few of my recent projects. This area will continue to
            change as new ideas percolate. For a full list of projects,{' '}
            <Link href="/portfolio">check out my portfolio.</Link>
          </Typography>
          {projectsList}
        </>
      </SectionCard>
    </>
  );
}

Index.getLayout;
