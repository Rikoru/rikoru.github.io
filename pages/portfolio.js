import React, { useMemo } from 'react';
import MiniCard from '../components/mini_card';
import SectionCard from '../components/section_card';
import { getSectionByRoute } from '../constants/sections';

import { getProjects } from '../components/projects/projects';
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

export default function Portfolio({ sectionTitle, icon }) {
  const projects = useMemo(() => getProjects());
  const projectsSection = useMemo(() => prepProjects(projects), [projects]);

  return (
    <SectionCard title={sectionTitle} icon={icon}>
      <Grid2 container spacing={2} columns={{ xs: 6, sm: 12 }}>
        {projectsSection}
      </Grid2>
    </SectionCard>
  );
}

export async function getStaticProps() {
  const section = getSectionByRoute('portfolio');
  return {
    props: {
      sectionTitle: section.name,
      icon: section.icon,
    },
  };
}
