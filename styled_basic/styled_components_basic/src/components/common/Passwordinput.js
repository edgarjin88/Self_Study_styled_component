import React from 'react';
import styled from 'styled-components'



const PasswordInput = styled.input.attrs(
  props=> ({type: props.showPassword ? "password" : "text"
}))`
  border-radius:3px; 
  outline:none;
  border: 1px solid;
  border-color: black;
  &:focus{
    border-color: blue;
  }
`; 

// const PasswordInput =() =>{
//   return <StyledPasswordInput type="password"/>
// }
// Wrapping to add password type attributes. 
// Or you can use .attrs({}) right after element. 
export default PasswordInput



