import React from 'react';
import PropTypes from 'prop-types';

import styles from './mini_card.module.scss';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CodeRounded from '@mui/icons-material/CodeRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const prepTitleSection = (title, subTitle = '') =>
  title && (
    <div className={styles.miniCardTitle}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h3">{title}</Typography>
        <Typography className={styles.miniCardSubtitle}>{subTitle}</Typography>
      </Stack>
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

export default function MiniCard({ title, subTitle, pageLink, children }) {
  return (
    <div className={styles.miniCardFrame}>
      {prepTitleSection(title, subTitle)}
      <div className={styles.miniCardBody}>{children}</div>
      {prepFooterSection(pageLink)}
    </div>
  );
}
MiniCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  pageLink: PropTypes.string,
  children: PropTypes.element,
};
