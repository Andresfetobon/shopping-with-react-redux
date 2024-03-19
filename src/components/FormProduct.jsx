/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addProductG, updateProductG } from '../../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateInfoG } from '../../store/slices/updateInfo.slice';
import '../../styles/FormProduct.css';

const FormProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const { updateInfo } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = data => {
    if (updateInfo) {
      dispatch(updateProductG(data));
      dispatch(setUpdateInfoG(null));
    } else {
      dispatch(addProductG(data));
    }

    reset({
      bar_code: '',
      name: '',
      price: '',
      expo_date: '',
    });
  };

  return (
    <form className='form-info' onSubmit={handleSubmit(submit)}>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Product Information
      </h2>
      <br />
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
      <button onClick={FormProduct}>Request</button>
    </form>
  );
};

export default FormProduct;
