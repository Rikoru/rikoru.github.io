import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './mini_card.module.scss';

import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import CodeRounded from '@mui/icons-material/CodeRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const prepTitleSection = (title, subTitle = '') =>
  title && (
    <div className={styles.miniCardTitle}>
      <Stack direction="row" alignItems="flex-end" spacing={2}>
        <Typography variant="h3">{title}</Typography>
        <Typography className={styles.miniCardSubtitle}>{subTitle}</Typography>
      </Stack>
    </div>
  );

const prepFooterSection = (pageLink) =>
  pageLink && (
    <React.Fragment>
      <div className={styles.miniCardFooter}>
        <Divider sx={{ borderColor: 'rgba(0,0,0,0.14)' }} />
        <Stack direction="row" justifyContent="flex-end">
          <Link href={pageLink || ''} passHref>
            <IconButton aria-label="source">
              <CodeRounded />
            </IconButton>
          </Link>
        </Stack>
      </div>
    </React.Fragment>
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
