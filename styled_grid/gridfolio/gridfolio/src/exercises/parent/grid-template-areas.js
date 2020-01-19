import React from 'react';
import styled from 'styled-components';
import {css} from 'styled-components';

import {Common, Cell} from "../helpers";

const CellArea = styled(Cell)`
  ${(props)=>props.area && css`
    grid-area: ${props.area}; 
  `}
`;

const DisplayGrid = styled.div`
	display: grid; 
	grid-template-columns: 1fr 1fr 1fr; 
	gap: 20px; 
`;

const CELL_COUNT = 4;

const cells = function(areas){
  let allCells = [];
  for(let i = 0; i < CELL_COUNT; i++){
    allCells.push(<CellArea area={areas[i]}> {areas[i]} </CellArea>);
  }
  return allCells;
}

const Grid = function ({prop, val, defaults, areas}) {
  const GridClass = styled(Common)`
		${prop}: '${val.join("' '")}';
		${defaults};
	`;
  return <div>
    {val.map(row => <h4>'{row}'</h4>)}
    <GridClass>
    {cells(areas)}
  </GridClass>
  </div>;
}

export default function(){
  const areas = ['header', 'sidebar', 'footer', 'content'];
  return <div>
    <DisplayGrid>
      {[
        ['header', 'sidebar', 'content', 'footer'],
        ['header header', 'sidebar content', 'footer footer'],
        ['sidebar header', 'sidebar content', 'sidebar footer'],
        ['. . header header', '. content content .', 'footer footer . sidebar'],
        ['header header header header', 'content content content sidebar', 'footer footer footer sidebar']
      ].map((value) => <Grid areas={areas} prop={'grid-template-areas'} val={value}/>)}
    </DisplayGrid>
  </div>
}
