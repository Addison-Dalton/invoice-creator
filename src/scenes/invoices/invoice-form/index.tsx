import React from 'react';
import styled from 'styled-components';
import { Paper, Box, Container, Grid, Divider } from '@material-ui/core';
import { Form } from 'react-final-form';

import { PersonalInfoFields } from './personal-info-fields';
import { InvoiceInfoFields } from './invoice-info-fields';

const initialValues: InvoiceFormValues = {
  id: 0,
  invoiceNo: '000',
  date: new Date(),
  termStart: null,
  termEnd: null,
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    address: ''
  },
  workItems: []
};

const $Divider = styled(Divider)(
  ({ theme }: StyledMuiTheme) => `
  margin: ${theme.spacing(1)}px auto;
  width: 80%;
`
);

export const InvoiceForm = () => {
  const onSubmit = async (values: InvoiceFormValues) => {
    console.log('TODO: submit');
  };

  const validate = () => {
    // TODO validation
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={2}>
        <Box p={2}>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            // validate={validate}
            render={({ handleSubmit, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <InvoiceInfoFields />
                  <Grid item xs={12}>
                    <$Divider />
                  </Grid>
                  <PersonalInfoFields />
                </Grid>
                <div>{JSON.stringify(values, null, 2)}</div>
              </form>
            )}
          />
        </Box>
      </Paper>
    </Container>
  );
};
