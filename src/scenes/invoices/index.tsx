import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { InvoiceForm } from './invoice-form';

export const Invoices = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <h2>{'Invoices'}</h2>

      <Switch>
        <Route exact path={path}>
          <Link to={`${url}/new`}>{'New Invoice'}</Link>
        </Route>
        <Route path={`${path}/new`} component={InvoiceForm} />
      </Switch>
    </Container>
  );
};
