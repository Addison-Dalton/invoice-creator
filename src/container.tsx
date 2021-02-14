import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
  createMuiTheme,
  makeStyles,
  createStyles
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from './components/nav-bar';
import { LeftSidebar } from './components/left-sidebar';
import { Dashboard } from './scenes/dashboard';
import { Invoices } from './scenes/invoices';

const customTheme = createMuiTheme({
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

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      display: 'flex'
    }
  }));

export const App = () => {
  const sidebarWidth = 240;
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      {/* Materiual UI Theme Provider */}
      <MuiThemeProvider theme={customTheme}>
        {/* styled-components Theme Provider using MUI theme */}
        <ThemeProvider theme={customTheme}>
          <Router>
            <NavBar />
            <div className={classes.content}>
              <LeftSidebar width={sidebarWidth} />
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/invoices">
                  <Invoices />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
