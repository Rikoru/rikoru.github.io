import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { g } from '../../constants/global';
import styles from './header.module.scss';

import Icon from '@mui/material/Icon';

import Sections from '../../constants/sections';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Drawer,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import MenuRounded from '@mui/icons-material/MenuRounded';

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

  const container = () => window.document.body;

  return (
    <>
      <AppBar className={styles.header} component="nav" position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h1"
              className={styles.headerTitle}
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link href="/">{g.titleCool}</Link>
            </Typography>

            <IconButton
              onClick={handleDrawerToggle}
              aria-label="sections"
              className={styles.menuButton}
            >
              <MenuRounded />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
