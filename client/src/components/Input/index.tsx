import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PhoneInput from './PhoneInput'
import DateInput from './DateInput'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: HTMLInputElement['type'] | "phone"
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputLayout>
      {props.label && <label>{props.label}</label>}
      {props.type === 'phone' ? <PhoneInput {...props} type="tel"/> : props.type === 'date' ? <DateInput {...props} type="text"/> : <input {...props} />}
    
    </InputLayout>
  )
}

export default Input

const InputLayout = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
    font-size: 12px;
  }
  input {
    padding: 8px;
    border: 2px solid #dddddd;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border: 2px solid #000000;
    }
  }
  `;