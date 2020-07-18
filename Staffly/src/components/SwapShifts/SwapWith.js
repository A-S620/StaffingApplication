import React from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import ShiftToSwap from "./ShiftToSwap";
import NewShift from "./NewShift";

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

export default function SwapWith() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <Typography variant="h6" gutterBottom justify="center">
                    Select Shift to swap with:
                </Typography>

            </Grid>
            <Grid item>
                <NewShift/>
            </Grid>


        </Grid>


    );
}