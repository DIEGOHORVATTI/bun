import * as React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { ThemeRegistry } from './ThemeRegistry';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <ThemeRegistry>
      <Grid container p={5}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Form Example
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              width={700}
            >
              <Grid item>
                <TextField
                  label="First Name"
                  variant="outlined"
                  {...register('firstName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  error={!!errors.firstName}
                  helperText={
                    errors.firstName?.type === 'required'
                      ? 'This field is required'
                      : errors.firstName?.type === 'maxLength'
                      ? 'First name cannot exceed 20 characters'
                      : errors.firstName?.type === 'pattern'
                      ? 'Alphabetical characters only'
                      : ''
                  }
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                  error={!!errors.lastName}
                  helperText={
                    errors.lastName?.type === 'pattern'
                      ? 'Alphabetical characters only'
                      : ''
                  }
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Age"
                  variant="outlined"
                  type="number"
                  {...register('age', { min: 18, max: 99 })}
                  error={!!errors.age}
                  helperText={errors.age ? 'You than 99 years old' : ''}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </ThemeRegistry>
  );
}
