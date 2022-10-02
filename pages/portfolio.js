import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MiniCard from '../components/mini_card';
import { getSectionPropsByRoute } from '../constants/sections';
import { CardPage } from '../components/page_types';

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
          <React.Fragment>
            <Stack direction="row" justifyContent="flex-end">
              <Link href={pageLink || ''} passHref>
                <IconButton aria-label="source">
                  <CodeRounded />
                </IconButton>
              </Link>
            </Stack>
          </React.Fragment>
        </MiniCard>
      </Grid2>
    );
  });
};

export default function Portfolio({ sectionTitle, icon }) {
  console.log('loaded:', sectionTitle, icon);
  const projects = useMemo(() => getProjects());
  const projectsSection = useMemo(() => prepProjects(projects), [projects]);

  return (
    <CardPage sectionTitle={sectionTitle} icon={icon}>
      <Grid2 container spacing={2} columns={{ xs: 6, sm: 12 }}>
        {projectsSection}
      </Grid2>
    </CardPage>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...getSectionPropsByRoute('portfolio'),
    },
  };
}

Portfolio.propTypes = {
  sectionTitle: PropTypes.string,
  icon: PropTypes.string,
};
