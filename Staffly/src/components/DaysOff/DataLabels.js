import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core'
import DateLabel from "./DateLabel";
import DaysUsedLabel from "./DaysUsedLabel";
import DaysLeftLabel from "./DaysLeftLabel";

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

export default function DataLabels() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Grid container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{marginTop: 20, marginLeft:20}}
                >
                    <DateLabel/>
                    <DaysUsedLabel/>
                    <DaysLeftLabel/>


                </Grid>
            </Paper>

        </div>



    );
}