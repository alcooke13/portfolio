import React, { Children } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: black;
  padding: 0.5rem;
  min-width: 6rem;
`


function Button({children, onClick}) {
  return (
    <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
  )
}

export default Button