import React from 'react';
import {Box, makeStyles, Paper, Divider, Gr} from '@material-ui/core';
import DataLabels from "./DataLabels";
import DaysOffForm from "./DaysOffForm";
import DaysOffCalendar from "./DaysOffCalendar";

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

export default function DaysOffGrid() {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexWrap="nowrap"
            alignItems="flex-start"
            justify="center"
        >
            <DaysOffForm/>
            <Divider orientation="vertical" variant="middle" flexItem style={{marginRight:50, marginLeft: 20, height: 600, width: 2}} color="#000000"/>
            <DaysOffCalendar/>
        </Box>


    );
}
