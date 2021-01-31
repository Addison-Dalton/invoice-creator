import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NavBar } from './components/nav-bar';
import { Dashboard } from './scenes/dashboard';
import { Invoices } from './scenes/invoices';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00695c'
    },
    secondary: {
      main: '#ffb300'
    }
  }
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/invoices">
            <Invoices />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
