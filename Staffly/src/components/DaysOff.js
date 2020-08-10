import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import DaysOffStepper from "./DaysOff/DaysOffStepper";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        width: '40%'
    },

}));
export default function DaysOff() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}
              direction="column"
              justify="center"
              alignItems="center">
            <Paper>
                <DaysOffStepper/>
            </Paper>
        </Grid>


    );

}
