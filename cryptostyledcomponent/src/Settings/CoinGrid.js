import React from 'react';
import styled, {css} from 'styled-components'; 

import {AppContext} from "../App/AppProvider"; 
import {SelectableTile} from '../Shared/Tile';
import CoinTile from "./CoinTile"

export const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 5fr));
  margin-top: 30px;
`

function getLowerSectionCoins(coinList, filteredCoins){
  return (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
}


// function getLowerSectionCoins(coinList, filteredCoins) {
//   return (
//     (filteredCoins && Object.keys(filteredCoins)) ||
//     Object.keys(coinList).slice(0, 100)
//   );
// }


function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}


export default function({topSection}){
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(
            coinList,
            topSection,
            favorites,
            filteredCoins
          ).map(coinKey => {
            // console.log("csoinKey here!", coinKey);
            return <CoinTile
                key={coinKey}
                topSection={topSection}
                coinKey={coinKey}
              />
           
          })}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}