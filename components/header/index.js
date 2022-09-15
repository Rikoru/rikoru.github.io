import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { g } from '../../constants/global';
import styles from './header.module.scss';

import Icon from '@mui/material/Icon';

import Sections from '../../constants/sections';
import {
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

const headerLinks = (sections, selectedIndex, handleMenuItemClick) => {
  return sections.map((option, index) => (
    <MenuItem
      key={option.route}
      disabled={index === selectedIndex}
      onClick={(event) => handleMenuItemClick(event, index)}
    >
      <ListItemIcon>
        <Icon>{option.icon}</Icon>
      </ListItemIcon>
      {option.name}
    </MenuItem>
  ));
};

export default function Header() {
  const router = useRouter();
  const sections = useMemo(() => Sections());

  const getIndexByPath = () => {
    const pathname = router.pathname;
    return sections.findIndex((item) => '/' + item.route === pathname);
  };

  const selectedIndex = getIndexByPath();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    router.push(sections[index].route);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={styles.header}>
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            className={styles.headerTitle}
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Link href="/">{g.titleCool}</Link>
          </Typography>
          <List component="nav" aria-label="Sections">
            <ListItem
              id="menu-section-button"
              aria-haspopup="listbox"
              aria-controls="section-menu"
              aria-label="Current section"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText sx={{ cursor: 'pointer' }}>
                <Typography sx={{ fontWeight: '600' }}>
                  {sections[selectedIndex]?.name || 'Home'}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Menu
            id="section-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'menu-section-button',
              role: 'listbox',
            }}
          >
            {headerLinks(sections, selectedIndex, handleMenuItemClick)}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
