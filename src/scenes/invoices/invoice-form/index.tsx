import React, { useEffect, useReducer, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Paper, Box, Container, Grid, TextField } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const $TextField = styled(TextField)`
  ${({ theme }: { theme: Theme }) => `
    width: 80%;
    margin: ${theme.spacing(1)}px;
  `}
`;

const initialValues: InvoiceFormValues = {
  id: 0,
  invoiceNo: '000',
  date: new Date(),
  term: '',
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    address: ''
  },
  workItems: []
};

const reducer = (
  state: InvoiceFormValues,
  action: InvoiceFormAction
): InvoiceFormValues => {
  switch (action.type) {
    case 'change_base_info':
      return {
        ...state,
        [action.key]: action.value
      };

    case 'change_personal_info':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.key]: action.value
        }
      };

    default:
      return state;
  }
};

export const InvoiceForm = () => {
  const [values, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: InvoiceFormActionType
  ) => {
    const { name: key, value } = e.target;

    dispatch({ type, key, value });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={2}>
        <Box p={2}>
          <form>
            <Grid container>
              <Grid item xs={6}>
                <$TextField
                  variant="outlined"
                  label="Full name"
                  name="name"
                  value={values.personalInfo.name}
                  onChange={(e) => handleInputChange(e, 'change_personal_info')}
                />
                <$TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={values.personalInfo.email}
                  onChange={(e) => handleInputChange(e, 'change_personal_info')}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};
