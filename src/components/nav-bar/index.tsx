import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Heading5 } from '../typography';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';

const $AppBar = styled(AppBar)(({ theme }: StyledMuiTheme) => `
  z-index: ${theme.zIndex.drawer + 1};

  .menu-button {
    margin-right: ${theme.spacing(2)};
    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  }
`);

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <$AppBar position="absolute">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(handleLeftSidebarToggle())}
          className={'menu-button'}
        >
          <MenuIcon />
        </IconButton>
        <Heading5>{'Invoice App'}</Heading5>
      </Toolbar>
    </$AppBar>
  );
};
