import * as React from 'react';
import { useForm } from 'react-hook-form';

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

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register('firstName', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === 'required' && <p>This field is required</p>}
      {errors?.firstName?.type === 'maxLength' && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === 'pattern' && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === 'pattern' && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input {...register('age', { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" />
    </form>
  );
}
