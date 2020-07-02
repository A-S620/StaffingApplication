import React, { Component } from "react";
import { Switch, Route, BrowserRouter  } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import HomePage from "./components/HomePage";
import DaysOff from "./components/DaysOff";
import Navigation from "./components/Navigation/Navigation";

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { apiResponse: "" };
    // }
    //
    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }
    //
    // componentWillMount() {
    //     this.callAPI();
    // }//<p className="App-intro">;{this.state.apiResponse}</p>
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

export default Main;