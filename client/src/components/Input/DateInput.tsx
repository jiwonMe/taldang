import React, { useState, useEffect } from 'react'

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  ref?: React.Ref<HTMLInputElement>
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(formatDate(props.value as string))
  }, [props.value])

  const formatDate = (date: string) => {
    const cleaned = ('' + date).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{4})(\d{2})(\d{2})$/)
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}.`
    }
    return date
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value)
    if (formatted.length <= 11) {
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

export default DateInput