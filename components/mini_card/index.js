import React from 'react';
import PropTypes from 'prop-types';

import styles from './mini_card.module.scss';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CodeRounded from '@mui/icons-material/CodeRounded';

const prepTitleSection = (title) =>
  title && (
    <div className={styles.miniCardTitle}>
      <h3>{title}</h3>
    </div>
  );

const prepFooterSection = (pageLink) =>
  pageLink && (
    <>
      <Divider />
      <div className={styles.miniCardFooter}>
        <Button variant="outlined" href={pageLink} startIcon={<CodeRounded />}>
          Source
        </Button>
      </div>
    </>
  );

export default function MiniCard({ title, pageLink, children }) {
  return (
    <>
      <div className={styles.miniCardFrame}>
        {prepTitleSection(title)}
        <div className={styles.miniCardBody}>{children}</div>
        {prepFooterSection(pageLink)}
      </div>
    </>
  );
}
MiniCard.propTypes = {
  title: PropTypes.string,
  pageLink: PropTypes.string,
  children: PropTypes.element,
};
