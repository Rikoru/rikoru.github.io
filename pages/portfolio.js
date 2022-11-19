import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MiniCard from '../components/mini_card';
import { getSectionPropsByRoute } from '../constants/sections';
import { ModernPage } from '../components/page_types';

import { getProjects } from '../components/projects/projects';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const prepProjects = (projects) => {
  return projects.map((item) => {
    const { title, subTitle, pageLink, body } = item;
    return (
      <Grid xs={6} key={title}>
        <MiniCard title={title} subTitle={subTitle} pageLink={pageLink}>
          {body}
        </MiniCard>
      </Grid>
    );
  });
};

export default function Portfolio({ sectionTitle, icon }) {
  const projects = useMemo(() => getProjects());
  const projectsSection = useMemo(() => prepProjects(projects), [projects]);

  return (
    <ModernPage sectionTitle={sectionTitle} icon={icon}>
      <Grid container spacing={2} columns={{ xs: 6, sm: 6 }}>
        {projectsSection}
      </Grid>
    </ModernPage>
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
