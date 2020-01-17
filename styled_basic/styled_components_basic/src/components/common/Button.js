import React from 'react';
// import './Button.css'

import styled, {css} from 'styled-components'; 

const Button = styled.button`
  background:white;
  border: 5px solid black; 
  font-size: 20px; 
  color: black;

  ${props=> props.primary && css`
  background:red;`}
  `;

export default Button; 