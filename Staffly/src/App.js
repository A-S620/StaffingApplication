import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
    render() {
        return (
            <div className="root">
                <Navigation/>
                <BrowserRouter basename="/">
                    <Route exact path={"/"}>
                    </Route>
                </BrowserRouter>

            </div>
        );
    }



}

export default App;
