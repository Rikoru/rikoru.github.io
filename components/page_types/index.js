import React from 'react';
import PropTypes from 'prop-types';

import styles from './page_types.module.scss';
import SectionCard from '../section_card';
import { Icon, Stack, Typography } from '@mui/material';

export const CardPage = ({ sectionTitle, icon, children }) => (
  <React.Fragment>
    <SectionCard
      className={styles.cardPageWrapper}
      sectionTitle={sectionTitle}
      icon={icon}
    >
      <Page>{children}</Page>
    </SectionCard>
  </React.Fragment>
);

export const ModernPage = ({ sectionTitle, icon, children }) => (
  <React.Fragment>
    <div className={styles.modernPageWrapper}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Icon className={styles.modernPageIcon} aria-hidden="true">
          {icon}
        </Icon>
        <Typography variant="h2">{sectionTitle}</Typography>
      </Stack>
      {children}
    </div>
  </React.Fragment>
);

export const Page = ({ children }) => (
  <React.Fragment>
    <div className={styles.pageWrapper}>{children}</div>
  </React.Fragment>
);

CardPage.propTypes = {
  sectionTitle: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
};

Page.propTypes = {
  children: PropTypes.node,
};
