import React from 'react';
import { TextField } from '@mui/material';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface TextInputProps {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
  helperText: string | { [key: string]: string };
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  register,
  name,
  errors,
  helperText
}) => {
  const errorText =
    typeof helperText === 'string' ? helperText : helperText[name];

  console.log(errors);

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      error={!!errors[name]}
      helperText={JSON.stringify(errors[name]) || errorText || ''}
      {...register(name)}
    />
  );
};
