import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import { Icon } from '@mui/material';

export default function Card({ title, icon, children }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardFrame}>
        <div className={styles.cardHeader}>
          <Icon className={styles.cardIcon}>{icon}</Icon>
          <h2>{title}</h2>
        </div>
        <div className={styles.cardBody}>{children}</div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.element,
};
