import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import './App.css';
import exercises from './exercises/index';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const CHILD_START = 16;

let Nav = styled.ul`
`

let Label = styled.div`
	font-weight: 700;
	font-family: 'Oxygen Mono', monospace;
	padding-top: 20px; 
`

let ExerciseLink = styled(Link)`
  cursor: pointer; 
  color: black; 
  text-decoration: none; 
  text-shadow: 0px 0px 4px #a7a9c3;
  font-family: 'Oxygen Mono', monospace;
  opacity: .7; 
	${props => props.current && 'opacity: 1; color: #2282fa; font-weight: 700;' }
`

const AppLayout = styled.div`
	display: grid; 
	grid-template-columns: 300px 1fr; 
	margin-bottom:50px; 
`

const WelcomeStyled = styled.div`
  padding: 40px; 
  width: 800px; 
`

function mapKeys(keys, current){
	return keys.map(key =>
    <li><ExerciseLink current={current == key} to={`/grid/${key}`}> {key}</ExerciseLink></li>
	);
}

function ExerciseGrid({match}){
  let current = match.params.exercise;
	let parentKeys = Object.keys(exercises).slice(0, CHILD_START);
	let childKeys = Object.keys(exercises).slice(CHILD_START);
	return <Nav>
    <Label> <ExerciseLink current={!current} to={`/grid/`}> Welcome </ExerciseLink> </Label>
		<Label>Parent</Label>
		<>{mapKeys(parentKeys, current)}</>
		<Label>Children</Label>
		<>{mapKeys(childKeys, current)}</>
	</Nav>
}

function CurrentExercise({match}){
  return exercises[match.params.exercise]();
}

function Welcome(){
  return <WelcomeStyled>
      <p> Welcome to the CSS GridFolio. Get started by choosing one of the Grid properties from the navigation on the left.</p>
      <p>The properties are arranged in order of how you should learn them, as many properties are simply shorthand for previous properties.
    </p>
    <p> For parent Grids, each of the Grids you will see displays the property of the parent above the Grid. </p>
    <p> For child Grids, the child property is displayed above the grid, and the child is highlighted in red.</p>
    <p> It's encouraged to edit the Grids by inspecting with the Webkit Inspector and play with the values. </p>
  </WelcomeStyled>
}

function GridApp(props) {
  const {match} = props;
  return (
    <AppLayout>
      <Route path={`${match.path}/:exercise`} component={ExerciseGrid}/>
      <Route path={`${match.path}`} exact component={ExerciseGrid}/>
      <Route path={`${match.path}`} exact component={Welcome}/>
      <Route path={`${match.path}/:exercise`} component={CurrentExercise} />
    </AppLayout>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/grid" component={GridApp} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      Go to /grid to see the Gridfolio
    </div>
  );
}

export default App;
