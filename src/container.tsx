import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/nav-bar';
import { LeftSidebar } from './components/left-sidebar';
import { Dashboard } from './scenes/dashboard';
import { Invoices } from './scenes/invoices';

const $MainContent = styled.div(
  ({ theme }: StyledMuiTheme) => `
  display: flex;
  margin-top: ${theme.mixins.toolbar.minHeight}px;
`
);

export const App = () => (
  <>
    <NavBar />
    <$MainContent>
      <LeftSidebar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/invoices" component={Invoices} />
      </Switch>
    </$MainContent>
  </>
);
