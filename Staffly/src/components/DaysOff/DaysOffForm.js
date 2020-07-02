import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core'
import CommentField from "./CommentField";
import TypeSelector from "./TypeSelector";
import DateLabel from "./DateLabel";
import DaysUsedLabel from "./DaysUsedLabel";
import DaysLeftLabel from "./DaysLeftLabel";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            width: theme.spacing(50),
            height: theme.spacing(50),
        },
        width: '50%',
        height: '100%',
    },
    paper: {
        padding: theme.spacing(1),
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

export default function DaysOffForm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center">
                <Grid item style={{marginBottom: 20}}>
                    <TypeSelector/>
                </Grid>
                <Grid item style={{marginBottom: 10}}>
                    <CommentField/>
                </Grid>
                <Grid item style={{marginTop: 20}}>
                    <Button variant="contained" color="primary" style={{marginTop: 0}}>
                        Submit
                    </Button>
                </Grid>

                <Grid item style={{marginTop: 20}}>
                    <DateLabel/>
                    <DaysUsedLabel/>
                    <DaysLeftLabel/>
                </Grid>


            </Grid>
        </div>


    );
}