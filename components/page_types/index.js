import React from 'react';
import PropTypes from 'prop-types';

import styles from './page_types.module.scss';
import SectionCard from '../section_card';

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
