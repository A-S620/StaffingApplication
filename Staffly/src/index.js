import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {blue, purple} from '@material-ui/core/colors';
import {Provider} from "react-redux";
import {store} from './store/Store';


const theme = createMuiTheme({
    root: {
        width: '100%',
    },
    palette: {
        primary: purple,
    },
    layout: {
        drawerWidth: 232,
    },
    alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
});
ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider theme={theme} key="app">
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
