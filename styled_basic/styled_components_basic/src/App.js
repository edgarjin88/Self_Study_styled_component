import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './components/common/Button'
import {ThemeProvider} from 'styled-components'; 
import LightTheme from './theme/light'; 
import DarkTheme from './theme/dark'; 
import Passwordinput from './components/common/Passwordinput'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap'; 

import PrimayButton from './components/common/PrimaryButton'; 
import {createGlobalStyle} from 'styled-components'; 

const GlobalStyle = createGlobalStyle`
body{}
`
class App extends Component{
  state={
    theme:LightTheme,
    showPassword: false
  }

  handleToggleTheme =()=>{
    // console.log('clicked')
    // console.log('clicked :', this.state.theme.id)
    // console.log('clicked :', this.state)
    this.setState({
      theme:this.state.theme.id==='light' ? DarkTheme : LightTheme
    })
  }

  handleTogglePassword =()=>{
    console.log('fired:', this.state.showPassword)
    this.setState({
      showPassword: !this.state.showPassword
    })
  }
  render(){
    return (
      <ThemeProvider theme={this.state.theme}>

        {/* <section>
          <Passwordinput showPassword={this.state.showPassword}/>
          <Button onClick={this.handleTogglePassword}>
            {this.state.showPassword ? 'hide': 'Show'}
          </Button>
        </section> */}
        <Button color="primary">Primary Button</Button>
        <PrimayButton>New Primary Button</PrimayButton>
      </ThemeProvider>
    );
  }

}

export default App;
