import React from 'react';

import { g } from '../../../constants/global';
import styles from './footer.module.scss';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Typography>
        A site by <strong>Mircea Taras</strong>&nbsp;&ndash;&nbsp;
        <Link sx={{ fontWeight: 600 }} color="inherit" href={g.licenseUri}>
          {g.license}
        </Link>
      </Typography>
    </section>
  );
}
