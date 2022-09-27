import React from 'react';
import PropTypes from 'prop-types';

import styles from './section_card.module.scss';

import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

export default function SectionCard({ sectionTitle, icon, children }) {
  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.cardFrame}>
        <div className={styles.cardHeader}>
          <Icon className={styles.cardIcon}>{icon}</Icon>
          <Typography variant="h2">{sectionTitle}</Typography>
        </div>
        <Card className={styles.cardBody}>
          <CardContent className={styles.cardBodyContent}>
            {children}
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
SectionCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.element,
};
