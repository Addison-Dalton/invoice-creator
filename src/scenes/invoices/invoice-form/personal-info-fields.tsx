import React, { FunctionComponent } from 'react';
import {
  Grid,
  FormLabel
} from '@material-ui/core';

import { $TextField } from './text-field';

export const PersonalInfoFields: FunctionComponent<FormFields> = ({
  handleInputChange,
  values
}) => (
  <>
    <Grid item xs={12}>
      <FormLabel>{'Personal Info'}</FormLabel>
    </Grid>
    <Grid item sm={12} md={6}>
      <$TextField
        variant="outlined"
        label="Full name"
        name="name"
        value={values.personalInfo.name}
        onChange={(e) => handleInputChange(e, 'change_personal_info')}
      />
    </Grid>
    <Grid item sm={12} md={6}>
      <$TextField
        variant="outlined"
        label="Email"
        name="email"
        value={values.personalInfo.email}
        onChange={(e) => handleInputChange(e, 'change_personal_info')}
      />
    </Grid>
  </>
);
