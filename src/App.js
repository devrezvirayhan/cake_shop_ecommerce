import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register/Register";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
         
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/ourteam">
            <OurTeam></OurTeam>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
