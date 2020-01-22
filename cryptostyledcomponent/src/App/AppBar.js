import React from 'react';
import styled, {css} from 'styled-components'; 

import {AppContext} from './AppProvider'
const Logo = styled.div`
  font-size: 1.5em; 
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px; 
  text-align: center;
`
const ControlButtonElem = styled.div`
  cursor: pointer; 
  ${(props) => props.active && css`
    text-shadow: 2px 2px 60px red; 
    color: brown;
    transition: all .8s;
    border-bottom: 1px solid brown;
  ${props => props.hidden && css`
    display:none; `}
  `}
`
function toProperCase(lower){
  return (lower && lower.charAt(0).toUpperCase() + lower.substr(1));
}
function ControlButton({name}){
    return <AppContext.Consumer>
      {({page, setPage, firstVisit}) =>(
        <ControlButtonElem 
        onClick={()=>setPage(name)}
        active={page ===name}
        hidden={firstVisit && name ==='dashboard'}
        >
        {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
}
export default function(){
  return <Bar>
    <Logo>CryptoDash</Logo>
    <div/>
    <ControlButton active name="dashboard"/>
    <ControlButton name="settings"/>
  </Bar>
}