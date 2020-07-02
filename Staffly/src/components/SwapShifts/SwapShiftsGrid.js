import React from 'react';
import {Box, Grid, makeStyles} from '@material-ui/core';
import ShiftGrid from "./ShiftGrid";

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

export default function SwapShiftsGrid() {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            justify="center"
        >
            <ShiftGrid/>
        </Box>






    );
}