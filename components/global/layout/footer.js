import React from 'react';
import Link from 'next/link';
import { g } from '../../../constants/global';
import styles from './footer.module.scss';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Typography>
        <Link href={g.licenseUri}>
          <a>
            <strong>{g.license}</strong>
          </a>
        </Link>
      </Typography>
    </section>
  );
}
