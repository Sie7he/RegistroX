import  {useState } from 'react'
import './FormInput.css'

export const FormInput = (props)=> {
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
         focused= {focused.toString()}
         className='input'
        />
        <span>{errorMsg}</span>
    </div>
  )
}
