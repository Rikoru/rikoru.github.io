import React, { useMemo } from 'react';
import MiniCard from '../components/mini_card';
import SectionCard from '../components/section_card';

import getProjects from '../constants/projects';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';
import { IconButton, Stack } from '@mui/material';
import CodeRounded from '@mui/icons-material/CodeRounded';

const prepProjects = (projects) => {
  return projects.map((item) => {
    const { title, subTitle, pageLink } = item;
    return (
      <Grid2 xs={6} key={title}>
        <MiniCard title={title} subTitle={subTitle}>
          <>
            <Stack direction="row" justifyContent="flex-end">
              <Link href={pageLink || ''} passHref>
                <IconButton aria-label="source">
                  <CodeRounded />
                </IconButton>
              </Link>
            </Stack>
          </>
        </MiniCard>
      </Grid2>
    );
  });
};

export default function Portfolio() {
  const projects = useMemo(() => getProjects());
  const projectsSection = useMemo(() => prepProjects(projects), [projects]);

  return (
    <SectionCard title="Portfolio" icon="list">
      <Grid2 container spacing={2}>
        {projectsSection}
      </Grid2>
    </SectionCard>
  );
}
