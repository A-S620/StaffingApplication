import React from 'react';
import ShiftsTable from "./HomePage/ShiftsTable";
import DaysOffTable from "./HomePage/DaysOffTable";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Shift from "./CreateShifts/Shift";

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

export default function CreateShifts() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}
              container
              direction="column"
              justify="flex-start"
              alignItems="center">
            <Container style={{marginBottom: 20}}>
               <Shift/>

            </Container>

        </Grid>
    );
}