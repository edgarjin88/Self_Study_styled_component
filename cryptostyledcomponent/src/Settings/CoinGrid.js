import React from 'react';
import styled, {css} from 'styled-components'; 

import {AppContext} from "../App/AppProvider"; 
import {SelectableTile} from '../Shared/Tile';
import CoinTile from "./CoinTile"

export const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 30px;
`
function getCoinsToDisplay(coinList, topSection, favorites){
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}

export default function({topSection}){
  return <AppContext.Consumer>
    {
    ({coinList, favorites})=><CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) =>{
        console.log('coinKey here!', coinKey);
       return <CoinTile topSection={topSection} coinKey={coinKey}/>
      }
      )
      }
      </CoinGridStyled>}
  </AppContext.Consumer>
}