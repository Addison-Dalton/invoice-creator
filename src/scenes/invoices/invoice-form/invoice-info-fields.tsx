import React, { FunctionComponent } from 'react';
import { Grid, FormLabel } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import { $TextField } from './text-field';

export const InvoiceInfoFields: FunctionComponent<InvoiceFormFields> = ({
  values,
  handleInputChange,
  handleDateChange
}) => (
  <>
    <Grid item xs={12}>
      <FormLabel>{'Invoice Info'}</FormLabel>
    </Grid>
    <Grid item sm={12} md={6}>
      <$TextField
        variant="outlined"
        label="Invoice No."
        name="invoiceNo"
        value={values.invoiceNo}
        onChange={(e) => handleInputChange(e, 'change_base_info')}
      />
    </Grid>
    <Grid item sm={12} md={6}>
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Invoice date"
        name="date"
        format="MM/dd/yyyy"
        value={values.date}
        onChange={(date) => handleDateChange('date', date as Date, 'change_base_info')}
      />
    </Grid>
    <Grid item sm={12} md={6}>
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Start date"
        name="termStart"
        format="MM/dd/yyyy"
        value={values.termStart}
        onChange={(date) => handleDateChange('termStart', date as Date, 'change_base_info')}
      />
    </Grid>
    <Grid item sm={12} md={6}>
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="End date"
        name="termEnd"
        format="MM/dd/yyyy"
        value={values.termEnd}
        onChange={(date) => handleDateChange('termEnd', date as Date, 'change_base_info')}
      />
    </Grid>
  </>
);
