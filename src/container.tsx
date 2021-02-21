import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from './components/nav-bar';
import { LeftSidebar } from './components/left-sidebar';
import { Dashboard } from './scenes/dashboard';
import { Invoices } from './scenes/invoices';

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#007466'
    },
    secondary: {
      main: '#ffb300'
    }
  }
});

const $MainContent = styled.div(({ theme }: StyledMuiTheme) => `
  display: flex;
  margin-top: ${theme.mixins.toolbar.minHeight}px;
`);

export const App = () => (
  <StylesProvider injectFirst>
    {/* Materiual UI Theme Provider */}
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline />
      {/* styled-components Theme Provider using MUI theme */}
      <ThemeProvider theme={customTheme}>
        <Router>
          <NavBar />
          <$MainContent>
            <LeftSidebar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/invoices" component={Invoices} />
            </Switch>
          </$MainContent>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
