import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Typography } from '@material-ui/core';

const PersonalDetailForm = ({ getFieldProps, errors, touched }) => {
  const hasError = fieldName => {
    if (errors[fieldName] && touched[fieldName]) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <Typography variant='h6'>Personal Detail</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name='firstname'
            label='First Name'
            fullWidth
            error={hasError('firstname')}
            helperText={errors.firstname || ''}
            {...getFieldProps('firstname')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='lastname'
            label='Last Name'
            fullWidth
            error={hasError('lastname')}
            helperText={errors.lastname || ''}
            {...getFieldProps('lastname')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='email'
            label='Email'
            fullWidth
            error={hasError('email')}
            helperText={errors.email || ''}
            {...getFieldProps('email')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='phone'
            label='Phone Number'
            fullWidth
            error={hasError('phone')}
            helperText={errors.phone || ''}
            {...getFieldProps('phone')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='address'
            label='Address'
            fullWidth
            error={hasError('address')}
            helperText={errors.address || ''}
            {...getFieldProps('address')}
          />
        </Grid>
      </Grid>
    </div>
  );
};

PersonalDetailForm.propTypes = {
  getFieldProps: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
};

export default PersonalDetailForm;
