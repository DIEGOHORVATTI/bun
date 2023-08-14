import * as React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';

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
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <ThemeRegistry>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Form Example
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
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

          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
            error={!!errors.lastName}
            helperText={
              errors.lastName?.type === 'pattern'
                ? 'Alphabetical characters only'
                : ''
            }
          />

          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            type="number"
            {...register('age', { min: 18, max: 99 })}
            error={!!errors.age}
            helperText={
              errors.age
                ? 'You must be older than 18 and younger than 99 years old'
                : ''
            }
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </ThemeRegistry>
  );
}
