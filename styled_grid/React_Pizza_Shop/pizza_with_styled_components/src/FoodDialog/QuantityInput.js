import React from 'react'; 
import styled from 'styled-components'; 
import {Title} from '../Styles/titile'; 
import {pizzaRed} from '../Styles/colors'; 
const QuantityInputStyled = styled.input`
font-size: 18px;
width: 24px; 
text-align: center; 
border: none; 
transition: all .9s;
border-bottom: 2px red solid;
&:hover{
  border-bottom: 2px green solid;
}
outline: none; 

`

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`

const IncrementButton = styled.div`
  
  width: 23px; 
  color: ${pizzaRed}; 
  font-size: 20px; 
  text-align: center; 
  cursor: pointer; 
  padding: -12px; 
  line-height: 23px; 
  margin: 0px 10px; 
  border: 1px solid #f44336; 
  border: 1px solid ${pizzaRed}; 
  ${({disabled}) => disabled && 
  `opacity: 0.5 ;
   pointer-events: none;
   color: black;
   background-color: grey;
   border: 1px solid grey;  
   `};
  &:hover{
    background-color: #ffe3e3; 
  }
  
`
export function QuantityInput({quantity}){
  return <IncrementContainer>

    <div> Quantity: </div>
      <IncrementButton onClick ={()=>{
        quantity.setValue(quantity.value-1); 
      }}disabled ={quantity.value === 1}>-</IncrementButton>
      <QuantityInputStyled {...quantity}/>
      <IncrementButton onClick={()=>{ quantity.setValue(quantity.value +1)}}>+</IncrementButton>
  </IncrementContainer>
}