import React, { FunctionComponent } from 'react';
import { Grid, FormLabel } from '@material-ui/core';

import { $TextField } from './text-field';

export const InvoiceInfoFields: FunctionComponent<FormFields> = ({
  handleInputChange,
  values
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
      <$TextField
        variant="outlined"
        label="Date"
        name="date"
        type="date"
        value={values.date}
        onChange={(e) => handleInputChange(e, 'change_base_info')}
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
  </>
);
