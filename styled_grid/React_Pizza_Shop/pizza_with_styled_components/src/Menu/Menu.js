import React from 'react';
import styled from 'styled-components';
import {foods} from "../Data/FooData"; 
import {Food, FoodGrid, FoodLabel} from "./FoodGrid"; 
import {formatPrice} from "../Data/FooData"; 


const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px; 
`

export function Menu ({setOpenFood}){

 return <MenuStyled>
   {/* making map for another map. Useful when turn object into a list of key value paried lists */}
   {Object.entries(foods).map(([sectionName, foods])=>(
     <>
        <h1>{sectionName}</h1>
    <FoodGrid>
        {foods.map(food => (
          <Food onClick={()=>{
            setOpenFood(food); 
          }}  img={food.img}>
            {console.log('checking ;', food.img)}
            <FoodLabel> 
            <div>{food.name}</div>
            <div>{formatPrice([food.price])}</div>
            </FoodLabel>
          </Food>
        ))}
    </FoodGrid>

     </>
   ))}

  </MenuStyled>
}