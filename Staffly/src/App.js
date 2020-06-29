import React from 'react';
import logo from './logo.svg';
import history from "./history";
import { Router , Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import './App.css';
import HomePage from "./components/HomePage";
import DaysOff from "./components/DaysOff";
import Navigation from "./components/Navigation/Navigation";

function App() {

  return (
      <div className="root">
          <Navigation/>
          <BrowserRouter basename="/">
              <Route exact path={"/"}>
                  <HomePage/>
              </Route>
              <Route exact path={"/DaysOff"}>
                  <DaysOff/>
              </Route>
          </BrowserRouter>

      </div>
  );
}

export default App;
