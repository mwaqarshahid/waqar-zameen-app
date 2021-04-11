import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import BigCardsContainer from './Containers/BigCardsContainer';
import SmartCardsContainer from './Containers/SmartCardsContainer';
import './App.css';

function App() {
  return (
    <div className="row">
      <div className="col-md-12">
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">Waqar Shahid's App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Big Cards</Nav.Link>
                <Nav.Link href="/smart-cards">Smart Cards</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Switch>
            <Route exact path="/">
              <BigCardsContainer />
            </Route>
            <Route path="/smart-cards">
              <SmartCardsContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
