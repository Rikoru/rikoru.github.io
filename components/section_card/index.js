import React from 'react';
import PropTypes from 'prop-types';

import styles from './section_card.module.scss';

import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

export default function SectionCard({ title, icon, children }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardFrame}>
        <div className={styles.cardHeader}>
          <Icon className={styles.cardIcon}>{icon}</Icon>
          <Typography variant="h2">{title}</Typography>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyContent}>{children}</div>
        </div>
      </div>
    </div>
  );
}
SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.element,
};
