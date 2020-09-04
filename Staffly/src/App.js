import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import {Grid} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import SignIn from "./components/SignIn";

// const styles = theme => ({
//     root: {
//         // backgroundColor: theme.palette.background.default
//
//     },
//     alignItemsAndJustifyContent: {
//         width: 500,
//         height: 80,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'pink',
//     },
//     appBar: {
//         // For full-height drawer
//         maxWidth: `calc(100% - ${theme.layout.drawerWidth}px)`
//     },
//     toolbarActions: {
//         marginLeft: "auto"
//     },
//     // Styles for the root `div` element in the `Drawer` component.
//     drawer: {
//         width: theme.layout.drawerWidth
//     },
//     // Styles for the `Paper` component rendered by `Drawer`.
//     drawerPaper: {
//         width: "inherit"
//     },
//     // Styles for the content area. It fills the available space
//     // in the flex container to the right (or left) of the drawer.
//     appContent: {
//         // https://github.com/philipwalton/flexbugs#flexbug-17
//         //flex: "1 1 100%",
//         maxWidth: "100%",
//         paddingTop: 80, // equal to AppBar height + 16px
//         //margin: "0 auto",
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
//     // Set the max content width for each breakpoint
//     // Content will be centered in the space to the right/left of drawer
//     // [theme.breakpoints.up("lg")]: {
//     //     maxWidth: theme.breakpoints.values.lg
//     // }
//
// });
//
// function App(props) {
//     const {classes} = props;
//     return (
//         <div className={classes.root}>
//             <Grid style={{marginTop: 10}}
//                   container
//                   direction="row"
//                   justify="center"
//                   alignItems="center"
//             >
//                 <Grid item>
//                     <Navigation/>
//                 </Grid>
//                 <Grid item>
//                     <BrowserRouter basename="/">
//                         <Route exact path={"/"}>
//                         </Route>
//                     </BrowserRouter>
//                 </Grid>
//             </Grid>
//
//         </div>
//     );
// }
//
// App.propTypes = {
//     classes: PropTypes.object.isRequired
// };
//
// export default withStyles(styles)(App);

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.default

    },
    // alignItemsAndJustifyContent: {
    //     width: 500,
    //     height: 80,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'pink',
    // },
    // appBar: {
    //     // For full-height drawer
    //     maxWidth: `calc(100% - ${theme.layout.drawerWidth}px)`
    // },
    // toolbarActions: {
    //     marginLeft: "auto"
    // },
    // Styles for the root `div` element in the `Drawer` component.
    // drawer: {
    //     width: theme.layout.drawerWidth
    // },
    // Styles for the `Paper` component rendered by `Drawer`.
    // drawerPaper: {
    //     width: "inherit"
    // },
    // Styles for the content area. It fills the available space
    // in the flex container to the right (or left) of the drawer.
    // appContent: {
    //     // https://github.com/philipwalton/flexbugs#flexbug-17
    //     //flex: "1 1 100%",
    //     maxWidth: "100%",
    //     paddingTop: 80, // equal to AppBar height + 16px
    //     //margin: "0 auto",
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }

}));

function Display(props) {
    const classes = useStyles();
    const isLoggedIn = props.login;
    if (isLoggedIn ) {
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
        )
    }
    return (<SignIn/>);
}

export default function App() {
    const classes = useStyles();
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

// const mapStateToProps = state => {
//     return {
//         login: state.login.login
//
//     }
// };
// export default connect(mapStateToProps, {})(App);



