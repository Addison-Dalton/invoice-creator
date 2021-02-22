import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import store from '../../store';
import { customTheme } from '../theme/custom-theme';

const Providers: FunctionComponent = ({ children }) => (
  <ReduxProvider store={store}>
    <StylesProvider injectFirst>
      {/* Materiual UI Theme Provider */}
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        {/* styled-components Theme Provider using MUI theme */}
        <ThemeProvider theme={customTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router>
              {children}
            </Router>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </ReduxProvider>
);

export default Providers;
