import React from 'react';

import { g } from '../../constants/global';
import style from './title.module.scss';

import Link from 'next/link';

import { Typography } from '@mui/material';

export default function SiteTitle({ variant }) {
  const splitTitle = g.title.split(' ');

  return (
    <div className={style.siteTitle}>
      <Typography variant={variant}>
        <Link href="/">
          <a>
            {splitTitle[0]}
            <br />
            {splitTitle[1]}
          </a>
        </Link>
      </Typography>
    </div>
  );
}
