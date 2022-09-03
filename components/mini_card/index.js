import React from 'react';
import PropTypes from 'prop-types';

import styles from './mini_card.module.scss';

import { Button, Divider } from '@mui/material';
import { CodeRounded } from '@mui/icons-material';

const prepTitleSection = (title) =>
  !!title && (
    <div className={styles.miniCardTitle}>
      <h3>{title}</h3>
    </div>
  );

export default function MiniCard({ title, pageLink, children }) {
  return (
    <>
      <div className={styles.miniCardFrame}>
        {prepTitleSection(title)}
        <div className={styles.miniCardBody}>{children}</div>
        <Divider />
        <div className={styles.miniCardFooter}>
          <Button
            variant="outlined"
            href={pageLink}
            startIcon={<CodeRounded />}
          >
            Source
          </Button>
        </div>
      </div>
    </>
  );
}
MiniCard.propTypes = {
  title: PropTypes.string,
  pageLink: PropTypes.string,
  children: PropTypes.element,
};
