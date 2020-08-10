import React, {Component} from 'react';
import LeaveCalendar from "./Calendar/LeaveCalendar";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        width: '40%'
    },
    alignItemsAndJustifyContent: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },

}));

export default function Calendar(){
        const classes = useStyles();
        return (
            <Grid className={classes.root}
                  style={{marginTop:30}}
                  direction="column"
                  justify="flex-start"
                  alignItems="center">
                    <LeaveCalendar/>
            </Grid>
        );
    }
