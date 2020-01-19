import React from 'react';
import styled from 'styled-components';
import {css} from 'styled-components';

export const Common = styled.div`
	//border: 1px solid #9E9E9E; 
  box-shadow:0px 0px 15px 0px #000000;
  display: grid; 
	height: 250px; 
	width: 250px; 
	margin: auto; 
	background-color: #d2d8e3; 
	
`;

export const Cell = styled.div`
	background-color: #2282fa;
  padding: 5px; 
  font-family: 'Oxygen Mono', monospace;
  color: #87d9da;
  border-radius: 3px; 
  text-shadow: 0px 0px 11px #002bff;
  box-shadow: inset 0px 0px 3px black;
  display: grid;
  place-items: center;
  font-size: 16px;
  ${(props) => props.firstChild && css`
    ${props.firstChild}; 
    background-color: #F44336; 
  `}
  
  ${(props)=>props.alternatingChildren && css`
    &:nth-child(odd) {
      ${props.alternatingChildren[0]}
    }
    &:nth-child(even) {
      ${props.alternatingChildren[1]}
    }
  `}
`;

const DisplayGrid = styled.div`
	display: grid; 
	grid-template-columns: 1fr 1fr 1fr; 
	gap: 20px; 
`;

const DefaultText = styled.div`
	text-align: center; 
	color: grey;
	font-size: 12px;  
	font-family: 'Oxygen Mono', monospace;
`

const CELL_COUNT = 9;

const cells = function(alternatingChildren, firstChild){
	let allCells = [];
	for(let i = 1; i < CELL_COUNT + 1; i++){
    allCells.push(<Cell firstChild={firstChild && i === 1 && firstChild} alternatingChildren={alternatingChildren}> {i} </Cell>);
  }
  return allCells;
}

const Grid = function ({prop, val, defaults, alternatingChildren, firstChild}) {
	const GridClass = styled(Common)`
		${!firstChild && `${prop}: ${val};`}
		${defaults};
	`;
	return <div>
	<h4>{firstChild || val}</h4><GridClass>
		{cells(alternatingChildren, firstChild)}
	</GridClass>
</div>;
}

export const makeGridGallery = function(cases, property, defaults, alternatingChildren, firstChildProp, firstChildCases){
	return function(){
		return <div>
      <h3>{firstChildProp  || property} </h3>
      {defaults && <DefaultText>{defaults}</DefaultText>}
		<DisplayGrid>
			{(firstChildCases || cases).map((value, i) => <Grid firstChild={firstChildProp && `${firstChildProp}: ${firstChildCases[i]}`} alternatingChildren={alternatingChildren} prop={property} val={value} defaults={defaults || ''}/>)}
		</DisplayGrid>
	</div> }
}
