import React, { FunctionComponent } from 'react';
import { Grid, FormLabel } from '@material-ui/core';
import { Field } from 'react-final-form';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { $TextField } from './text-field';

export const InvoiceInfoFields: FunctionComponent = () => (
  <>
    <Grid item xs={12}>
      <FormLabel>{'Invoice Info'}</FormLabel>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<string> name="invoiceNo">
        {({ input }) => (
          <$TextField
            variant="outlined"
            label="Invoice No."
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<Date> name="date">
        {({ input }) => (
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Invoice date"
            name={input.name}
            format="MM/dd/yyyy"
            value={input.value}
            InputAdornmentProps={{ position: 'start' }}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<Date> name="termStart" allowNull>
        {({ input }) => (
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Start date"
            name={input.name}
            format="MM/dd/yyyy"
            value={input.value}
            InputAdornmentProps={{ position: 'start' }}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<Date> name="termEnd" allowNull>
        {({ input }) => (
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="End date"
            name={input.name}
            format="MM/dd/yyyy"
            value={input.value}
            InputAdornmentProps={{ position: 'start' }}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
  </>
);
