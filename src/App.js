import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Navagation from "./components/Home/Navagation/Navagation";
import NotFound from "./components/Home/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register/Register";
import OurTeam from "./components/OurTeam/OurTeam";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navagation></Navagation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/ourteam">
              <OurTeam></OurTeam>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
