import React, { useMemo } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

import Icon from '@mui/material/Icon';

import Sections from '../../constants/sections';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
  ListItemIcon,
  IconButton,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
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

  // TODO: Determine if using icons or text for nav links
  const showIcon = true;
  const showText = true;

  const navLinks = (
    <ul>
      {sections.map((item) => (
        <li key={item.route}>
          <Link href={'/' + item.route}>
            <a>
              {showIcon && <Icon>{item.icon}</Icon>}
              {showText && (
                <span className={styles.headerLinkText}>{item.name}</span>
              )}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );

  const container = () => window.document.body;

  return (
    <React.Fragment>
      <AppBar className={styles.header} component="nav" position="fixed">
        <Toolbar sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1, alignSelf: 'flex-start' }}>
            <SiteTitle variant="h1" />
          </Box>
          {/* Mobile Button */}
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="sections"
            className={styles.menuButton}
            sx={{
              display: { sm: 'none' },
              alignSelf: 'center',
            }}
          >
            <MenuRounded />
          </IconButton>
          {/* Regular Nav Links */}
          <Box
            role="navigation"
            className={styles.navbar}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {navLinks}
          </Box>
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
