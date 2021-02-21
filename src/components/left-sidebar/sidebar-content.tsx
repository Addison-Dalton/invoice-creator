import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { throttle } from 'throttle-debounce';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Home, Description } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';

const MOBILE_BREAKPOINT = 600;

const $ListWrapper = styled(List)(({ theme }: StyledMuiTheme) => `
  ${theme.breakpoints.up('sm')} {
    margin-top: ${theme.mixins.toolbar.minHeight}px;
  }
`);

export const SidebarContent = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = throttle(500, () => {
      if (!window) return;
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    });

    window.addEventListener('resize', () => handleResize());
    const unsubscribe = () => window.removeEventListener('resize', () => handleResize());

    handleResize();
    unsubscribe();
  }, []);

  const closeMobileSidebar = () => {
    if (!isMobile) return;

    dispatch(handleLeftSidebarToggle());
  };

  return (
    <$ListWrapper onClick={() => closeMobileSidebar()}>
      <ListItem key="Dashboard" button component={Link} to="/">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem key="Invoice" button component={Link} to="/invoices">
        <ListItemIcon>
          <Description />
        </ListItemIcon>
        <ListItemText primary="Invoice" />
      </ListItem>
    </$ListWrapper>
  );
};
