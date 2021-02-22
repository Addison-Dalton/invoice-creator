import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Paper, Box, Container, Grid, Divider } from '@material-ui/core';

import { reducer } from '../../../services/invoice/new-invoice-form/reducer';

import { PersonalInfoFields } from './personal-info-fields';
import { InvoiceInfoFields } from './invoice-info-fields';

const initialValues: InvoiceFormValues = {
  id: 0,
  invoiceNo: '000',
  date: new Date(),
  termStart: new Date(),
  termEnd: new Date(),
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
  const [values, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange: HandleInputChange = (e, type) => {
    if (!e || !e.target) return;
    const { name: key, value } = e.target;

    dispatch({ type, key, value });
  };

  const handleDateChange: HandleDateChange = (inputName, date, type) => {
    if (!inputName || !date) return;
    dispatch({ type, key: inputName, value: date.toString() });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={2}>
        <Box p={2}>
          <form>
            <Grid container spacing={2}>
              <InvoiceInfoFields
                handleInputChange={handleInputChange}
                handleDateChange={handleDateChange}
                values={values}
              />
              <Grid item xs={12}>
                <$Divider />
              </Grid>
              <PersonalInfoFields
                handleInputChange={handleInputChange}
                handleDateChange={handleDateChange}
                values={values}
              />
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};
