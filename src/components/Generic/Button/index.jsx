import React from 'react'
import { Container } from './style'

function Button({ children, color, width, height, fontSize, onClick }) {
  return (
    <Container
      width={width}
      color={color}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button