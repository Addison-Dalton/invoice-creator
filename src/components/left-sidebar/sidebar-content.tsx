import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { throttle } from 'throttle-debounce';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Home, Description } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';

const MOBILE_BREAKPOINT = 600;

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar
}));

export const SidebarContent = () => {
  const classes = useStyles();
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
    <div>
      <div className={classes.toolbar} />
      <List onClick={() => closeMobileSidebar()}>
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
      </List>
    </div>
  );
};
