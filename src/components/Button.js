import React, { Children } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: black;
  padding: 0.5rem;
  padding-left: calc(8px + 1.5625vw);
  padding-right: calc(8px + 1.5625vw);
  width: 100%;
  
`


function Button({children, onClick}) {
  return (
    <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
  )
}

export default Button