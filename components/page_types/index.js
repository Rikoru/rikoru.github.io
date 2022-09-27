import React from 'react';
import PropTypes from 'prop-types';

import styles from './page_types.module.scss';
import SectionCard from '../section_card';

export default function Page({
  sectionTitle,
  icon,
  pageType = 'card',
  children,
}) {
  const CardPage = ({ sectionTitle, icon, children }) => (
    <>
      <SectionCard
        className={styles.cardPageWrapper}
        sectionTitle={sectionTitle}
        icon={icon}
      >
        {children}
      </SectionCard>
    </>
  );

  const BasicPage = ({ children }) => (
    <>
      <div className={styles.basicPageWrapper}>
        <div className={styles.basicPageContent}>{children}</div>
      </div>
    </>
  );

  const preparePageType = ({ sectionTitle, icon, children, pageType }) => {
    switch (pageType) {
    case 'card':
      return (
        <CardPage sectionTitle={sectionTitle} icon={icon}>
          {children}
        </CardPage>
      );

    default:
      return <BasicPage>{children}</BasicPage>;
    }
  };

  return (
    <div className={styles.pageType}>
      {preparePageType({ sectionTitle, icon, children, pageType })}
    </div>
  );
}

Page.propTypes = {
  sectionTitle: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  pageType: PropTypes.string,
};
