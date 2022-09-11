import React, { useMemo } from 'react';
import Link from 'next/link';

import { getProjects } from '../components/projects/projects';
import SectionCard from '../components/section_card';
import ExpandPanel from '../components/expand_panel';

import leaves from '../public/leaves.png';

import Typography from '@mui/material/Typography';

export default function Index() {
  const projects = useMemo(() => getProjects().slice(0, 2));
  const projectsList = useMemo(
    () => <ExpandPanel items={projects} />,
    projects
  );

  return (
    <>
      <SectionCard title="Projects" icon="list" background={leaves}>
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
