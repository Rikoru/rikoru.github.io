import React, { useMemo } from 'react';
import Link from 'next/link';
import { g } from '../../constants/global';
import styles from './header.module.scss';

import Icon from '@mui/material/Icon';

import Sections from '../../constants/sections';
import { IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import MenuRounded from '@mui/icons-material/MenuRounded';

const prepHeaderLinks = (pageLabels) => {
  return pageLabels.map((item) => {
    const { name, route, icon } = item;
    return (
      <li key={name}>
        <Link href={route} passHref>
          <Button startIcon={<Icon>{icon}</Icon>}>{name}</Button>
        </Link>
      </li>
    );
  });
};

export default function Header() {
  const pageLabels = useMemo(() => Sections());
  const headerLinks = useMemo(() => prepHeaderLinks(pageLabels), pageLabels);

  return (
    // <div className={styles.headerWrapper}>
    //   <div className={styles.header}>
    //     <div className={styles.headerTitle}>
    //       <Typography variant="h1">
    //         <Link href="/">{g.titleCool}</Link>
    //       </Typography>
    //     </div>
    //     <div className={styles.navbar}>
    //       <ul>{headerLinks}</ul>
    //     </div>
    //   </div>
    // </div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h1"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: '2rem',
              }}
            >
              <Link href="/">{g.titleCool}</Link>
            </Typography>
            <div className={styles.navbar}>
              <ul>{headerLinks}</ul>
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h1" noWrap sx={{ fontSize: '1.4rem' }}>
              <Link href="/">{g.titleCool}</Link>
            </Typography>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <MenuRounded />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
