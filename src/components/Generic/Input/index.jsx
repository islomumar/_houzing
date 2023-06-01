import React from 'react'
import { Container } from './style'

function InputComponent(props) {
  const {
    value,
    color,
    width,
    height,
    fontSize,
    onChange,
    placeholder,
    defaultValue,
  } = props
  return (
    <Container
      value={value}
      width={width}
      color={color}
      height={height}
      fontSize={fontSize}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />

  )
}

export default InputComponent