/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from "react-bootstrap/Container"
import NewRecipeForm from "./components/NewRecipeForm"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from "./components/Register"
import RecipeList from "./components/RecipeList"

function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/login">Login</Link>
            </li>
            <li>
              <Link to="/user/register">Register</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/user/login">
            {/* <Login /> */}
          </Route>
          <Route path="/user/register">
            <Register />
          </Route>
          <Route path="/recipes">
            <RecipeList />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Container>
    //   <h1>Bread Baking Buddy</h1>
      
    //   <br></br>
    //   <NewRecipeForm />
      
    //   </Container>
    // </div>
  )
}

export default App;
