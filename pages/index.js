import React, { useMemo } from 'react';
import Link from 'next/link';

import { getProjects } from '../components/projects/projects';
import SectionCard from '../components/section_card';
import ExpandPanel from '../components/expand_panel';
import About from './about';
import Contact from './contact';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Index() {
  const projects = useMemo(() => getProjects().slice(0, 2));
  const projectsList = useMemo(
    () => <ExpandPanel items={projects} />,
    projects
  );

  return (
    <>
      <SectionCard
        title="Projects"
        icon="list"
        background="../public/clouds.jpg"
      >
        <>
          <Typography paragraph>
            Here are a few of my recent projects. This area will continue to
            change as new ideas percolate. For a full list of projects,{' '}
            <Link href="/portfolio">check out my portfolio.</Link>
          </Typography>
          {projectsList}
        </>
      </SectionCard>
      <Box sx={{ width: '100%', height: '200px', background: 'black' }} />
      <About></About>
      <Box sx={{ width: '100%', height: '200px', background: 'black' }} />
      <Contact></Contact>
    </>
  );
}
