import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import './style.css'

export const TodoAdd = ({onNewTodo}) => {
 const {description,onInputChange,onResetForm} = useForm({
  description:''
 })

  const onFormSubmit=(event)=>{
    event.preventDefault()
    if (description.length <= 1 ) return;

    const newTodo={
        id:new Date ().getTime(),
        done:false,
        description,
    }
    onNewTodo(newTodo);
    onResetForm()
  }

  return (
    <>
      <form action="">
        <input type="text" 
        placeholder='que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange} />

        <button
        type='submit'
        className='btn btn-primary mt-2' onClick={onFormSubmit}>AGREGAR</button>
    </form>
    </>
  )
}
