import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Divider, Grid, List, ListItem, ListItemText} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function ShiftToSwap() {
    const classes = useStyles();

    return (
        <Grid item>
            <List className={classes.root} component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    Test
                </ListItem>
                <ListItem button>
                    Test2
                </ListItem>
            </List>
        </Grid>
    );
}

