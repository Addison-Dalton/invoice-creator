import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Heading5 } from '../typography';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';

const $NavBar = styled(Toolbar)``;

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export const NavBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <AppBar position="absolute" className={classes.appBar}>
        <$NavBar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(handleLeftSidebarToggle())}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Heading5>{'Invoice App'}</Heading5>
        </$NavBar>
      </AppBar>
      {/* This Toolbar component is here to provide space behind the AppBar */}
      <Toolbar />
    </>
  );
};
