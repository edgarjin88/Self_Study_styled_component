import React from 'react';
import {Banner} from "./Banner/Banner"
import {Navbar} from './Navbar/Navbar'; 
import {Menu} from './Menu/Menu';
import {GlobalStyle} from './Styles/GlobalSytle'
import {FoodDialog} from './FoodDialog/Fooddialog'
import {Order} from './Order/Order'
import {useOpenFood} from './Hooks/useOpenFood'
import {useOrders} from './Hooks/useOrders';
import {useTitle} from './Hooks/useTitle'

function App() {
  const openFood= useOpenFood(); 
  const orders = useOrders(); 
  useTitle({...openFood, ...orders})
  console.log('openFood filst: ', openFood);
  return (  
    <>
    <GlobalStyle/>
    <FoodDialog {...orders} {...openFood}/>
    <Navbar/>
    <Order {...orders} {...openFood} />
    <Banner/>
    <Menu {...openFood}/>
  
    </>
  );
}

export default App;
