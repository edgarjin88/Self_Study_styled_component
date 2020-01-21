import React from 'react';
import "./App.css";

import styled, {css} from 'styled-components'; 
import AppBar from './AppBar'; 
import {AppProvider} from './AppProvider'; 
import Settings from '../Settings'; 
import Content from '../Shared/Content'; 

import Applayout from './AppLayout'; 

function App() {
  return (
    <Applayout className="App">
      <AppProvider>
        <AppBar/>
          <Content>
            <Settings/>
          </Content>
      </AppProvider>
    </Applayout>
  );
}

export default App;
