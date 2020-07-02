import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import SwapWith from "./SwapWith";
import UserShifts from "./UserShifts";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            height: theme.spacing(50),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        maxHeight: '100%',
        width: '100%',
    },
    TextField: {
        marginTop: "30px",
        padding: "40px"
    }
}));

export default function ShiftGrid() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <UserShifts/>
            </Grid>
            <Grid item>
                <SwapWith/>
            </Grid>


        </Grid>


    );
}