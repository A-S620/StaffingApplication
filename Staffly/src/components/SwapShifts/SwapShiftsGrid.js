import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import UserShifts from "./UserShifts";
import NewShift from "./NewShift";
import Comment from "./Comment";

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
        <Box display="flex" justifyContent="center" orientation="vertical">
            <UserShifts/>
            <NewShift/>
            <Comment/>
        </Box>


    );
}