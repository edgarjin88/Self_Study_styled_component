import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {Banner} from "./Banner/Banner"
import {Navbar} from './Navbar/Navbar'; 

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
    margin: 0; 
  }
`

function App() {
  return (
    
    <>
    <GlobalStyle/>
    <Navbar/>
    <Banner/>
      Hello Sliceline

    </>
  );
}

export default App;
