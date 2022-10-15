import React, { useMemo } from 'react';
import Link from 'next/link';
import { g } from '../../constants/global';
import styles from './header.module.scss';

import Icon from '@mui/material/Icon';

import Sections from '../../constants/sections';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
  ListItemIcon,
  IconButton,
  Stack,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import MenuRounded from '@mui/icons-material/MenuRounded';
import SiteTitle from '../title';

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const sections = useMemo(() => Sections());

  const handleDrawerToggle = () => {
    console.log('toggling mobileOpen');
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className={styles.linkDrawer} onClick={handleDrawerToggle}>
      <List>
        {sections.map((item) => (
          <ListItem key={item.route} disablePadding>
            <Link href={'/' + item.route} passHref>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  className={styles.headerLinkText}
                  primary={item.name}
                ></ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navLinks = (
    <Stack direction="row" spacing={2} className={styles.navLinks}>
      {sections.map((item) => (
        <Link href={'/' + item.route}>{item.name}</Link>
      ))}
    </Stack>
  );

  const container = () => window.document.body;

  return (
    <React.Fragment>
      <AppBar className={styles.header} component="nav" position="fixed">
        <Toolbar sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1, alignSelf: 'flex-start' }}>
            <Link href="/">
              <a>
                <SiteTitle variant="h1" />
              </a>
            </Link>
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="sections"
            className={styles.menuButton}
            sx={{
              display: { sm: 'none' },
              alignSelf: 'flex-end',
            }}
          >
            <MenuRounded />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{navLinks}</Box>
        </Toolbar>
      </AppBar>
      {/* Drawer container */}
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { sm: 'none' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}
