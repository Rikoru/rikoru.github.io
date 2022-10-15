import React from 'react';

import { g } from '../../constants/global';
import styles from './footer.module.scss';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Stack } from '@mui/material';

export default function Footer() {
  const footerLinks = []

  return (
    <section className={styles.footer}>
      <Typography>{g.author}</Typography>
      <Box sx={{ display: 'block' }}>
        <Stack direction="row" spacing={2}>
          {}
        </Stack>
      </Box>
    </section>
  );
}
