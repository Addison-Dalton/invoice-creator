import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Home, Description } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const $NavBar = styled(Toolbar)`
  
`;

const $Title = styled(Typography)`
  margin-right: 1rem;
`;

export const NavBar = () => {
  return (
    <>
      <AppBar>
        <$NavBar>
          <$Title variant="h5">{'Invoice App'}</$Title>
          <Button component={Link} to="/" startIcon={<Home />}>
            {'Dashboard'}
          </Button>
          <Button component={Link} to="/invoices" startIcon={<Description />}>
            {'Invoices'}
          </Button>
        </$NavBar>
      </AppBar>
      {/* This Toolbar component is here to provide space behind the AppBar */}
      <Toolbar />
    </>
  );
};
