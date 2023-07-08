import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addNewTodo } from '../redux/actions';

export default function Todoform() {
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const onFormSubmit=(e)=>{
      e.preventDefault();
      dispatch(addNewTodo(text));
    }
    const onInputChange=(e)=>{
      setText(e.target.value);
    }
  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input placeholder='Enter new todo' onChange={onInputChange} value={text}/>
    </form>
  )
}
