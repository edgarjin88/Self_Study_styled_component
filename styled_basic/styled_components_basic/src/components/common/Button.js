import React from 'react';
// import './Button.css'

import styled, {css} from 'styled-components'; 

const Button = styled.button`
  transition: all .3s;
  background:${props=> props.theme.backgroundColor};
  border: 5px solid ${props => props.theme.primaryColor}; 
  font-size: 20px; 
  outline:none;
  color: ${props => props.theme.primaryColor};`



export default Button; 

