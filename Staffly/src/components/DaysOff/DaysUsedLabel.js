import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        spacing: '10px'

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

export default function DaysUsedLabel() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Typography variant="h6" gutterBottom justify="center">
                Days Used:
            </Typography>
            <Typography variant="h6" gutterBottom justify="center" style={{marginLeft:20}}>
                XX
            </Typography>
        </Grid>


    );}
