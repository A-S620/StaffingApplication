import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import UserShifts from "./UserShifts";
import NewShift from "./NewShift";
import Comment from "./Comment";
import {Box, Button, CardActions, CardContent, Paper} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 700,
        minHeight: 700,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SwapCard() {
    const classes = useStyles();

    return (
        <Paper display="flex" justifyContent="center" orientation={"vertical"}>
            <CardContent>
                <Box display="flex" justifyContent="center" orientation={"vertical"}>
                    <UserShifts/>
                    <NewShift/>
                </Box>
                <Box style={{marginTop: 30}}>
                    <Comment/>
                </Box>


            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>

                <Button variant="outlined" color="primary">
                    Submit
                </Button>

            </CardActions>
        </Paper>
    );
}
