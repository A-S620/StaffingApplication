import React, { Component } from "react";
import { Switch, Route, BrowserRouter  } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HomePage from "./components/HomePage";
import DaysOff from "./components/DaysOff";
import Navigation from "./components/Navigation/Navigation";

class Main extends Component {
    render() {
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
}

export default Main;