import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core"

const styles = theme => ({
    root: {
        // backgroundColor: theme.palette.background.default

    },
    alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    appBar: {
        // For full-height drawer
        maxWidth: `calc(100% - ${theme.layout.drawerWidth}px)`
    },
    toolbarActions: {
        marginLeft: "auto"
    },
    // Styles for the root `div` element in the `Drawer` component.
    drawer: {
        width: theme.layout.drawerWidth
    },
    // Styles for the `Paper` component rendered by `Drawer`.
    drawerPaper: {
        width: "inherit"
    },
    // Styles for the content area. It fills the available space
    // in the flex container to the right (or left) of the drawer.
    appContent: {
        // https://github.com/philipwalton/flexbugs#flexbug-17
        //flex: "1 1 100%",
        maxWidth: "100%",
        paddingTop: 80, // equal to AppBar height + 16px
        //margin: "0 auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    // Set the max content width for each breakpoint
    // Content will be centered in the space to the right/left of drawer
    // [theme.breakpoints.up("lg")]: {
    //     maxWidth: theme.breakpoints.values.lg
    // }

});

function App(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid style={{marginTop: 10}}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
                <Grid item>
                    <Navigation/>
                </Grid>
                <Grid item>
                    <BrowserRouter basename="/">
                        <Route exact path={"/"}>
                        </Route>
                    </BrowserRouter>
                </Grid>
            </Grid>

        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);

