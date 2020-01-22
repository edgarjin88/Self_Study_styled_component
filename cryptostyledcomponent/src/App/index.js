import React from 'react';
import "./App.css";

import styled, {css} from 'styled-components'; 
import AppBar from './AppBar'; 
import {AppProvider} from './AppProvider'; 
import Settings from '../Settings'; 
import Content from '../Shared/Content'; 

import Applayout from './AppLayout'; 
import DashBoard from "../Dashboard"; 

function App() {
  return (
    <Applayout className="App">
      <AppProvider>
        <AppBar/>
          <Content>
            <Settings/>
            <DashBoard/>
          </Content>
      </AppProvider>
    </Applayout>
  );
}

export default App;
