/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { addProductG } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const FormProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(addProductG(data));
    reset({
      bar_code: '',
      name: '',
      price: '',
      expo_date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Product Info</h2>
      <div>
        <label htmlFor='bar_code'>Bar Code</label>
        <input {...register('bar_code')} type='text' id='bar_code' />
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input {...register('name')} type='text' id='name' />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input {...register('price')} type='number' id='price' />
      </div>
      <div>
        <label htmlFor='expiration-date'>Expiration date</label>
        <input {...register('expo_date')} type='date' id='expiration-date' />
      </div>
      <button onClick={FormProduct}>Submit</button>
    </form>
  );
};

export default FormProduct;
