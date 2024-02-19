import React, { useState, useEffect } from 'react'

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  ref?: React.Ref<HTMLInputElement>
}

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(formatPhoneNumber(props.value as string))
  }, [props.value])

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/)
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`
    }
    return phoneNumber
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    if (formatted.length <= 13) {
      setValue(formatted)
    }
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <input {...props} value={value} onChange={handleChange} />
  )
}

export default PhoneInput