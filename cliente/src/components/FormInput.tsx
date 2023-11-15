import  { useState } from 'react';
import { FormInputProps } from '../types/user';
import './formInput.css'


export const FormInput = (props : FormInputProps)=> {
    const [focused, setFocused] = useState(false);
    const {label, errorMsg, onChange, ...rest } = props;

    const handleFocus = () => {
        setFocused(true)
    }
  return (
    <div className='formImput'>
        <label>{label}</label>
        <input 
         {...rest}
         onChange={onChange}
         onBlur={handleFocus}   
         onFocus={() => rest.name === 'confirmPass' && setFocused(true)}     
         data-focused= {focused.toString()}
         className='input'
        />
        <span>{errorMsg}</span>
    </div>
  )
}
