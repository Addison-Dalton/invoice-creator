import React, { FunctionComponent } from 'react';
import { Field } from 'react-final-form';
import {
  Grid,
  FormLabel
} from '@material-ui/core';

import { $TextField } from './text-field';

export const PersonalInfoFields: FunctionComponent = () => (
  <>
    <Grid item xs={12}>
      <FormLabel>{'Personal Info'}</FormLabel>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<string> name="personalInfo.name">
        {({ input }) => (
          <$TextField
            required
            variant="outlined"
            label="Full name"
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<string> name="personalInfo.email">
        {({ input }) => (
          <$TextField
            required
            variant="outlined"
            label="Email"
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<string> name="personalInfo.phone">
        {({ input }) => (
          <$TextField
            required
            variant="outlined"
            label="Phone"
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
    <Grid item sm={12} md={6}>
      <Field<string> name="personalInfo.address">
        {({ input }) => (
          <$TextField
            required
            variant="outlined"
            label="Address"
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        )}
      </Field>
    </Grid>
  </>
);
