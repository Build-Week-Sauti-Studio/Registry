// Imports
import React from 'react';
import styled from "styled-components";
import './App.css';
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom"; 
// Screen - Styled Comp 'CSS' - Background
const Screen = styled.div `
background:slategray;
color:white;
 `;
// Screen - Styled Comp 'CSS' - Text Alignment
const Gadgets = styled.div `
text-align:center;

`;



// THE PROGRAM
function App() {
  return (
    <div className="App">
    <Router>
      <Screen>
        <Gadgets>
        <nav>
        <NavLink to={`/Component1`}>Log in</NavLink>
        <NavLink to={`/Component2`}>Sign up</NavLink>
        </nav>
        <Switch>
          <Route path={`/Component1`}><Component1/></Route>
          <Route path={`/Component2`}> <Component2/></Route>
        </Switch>


      </Gadgets>
    </Screen>
  </Router>
    </div>
  );
}

export default App;
