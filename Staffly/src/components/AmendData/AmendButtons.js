import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default function AmendData() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <EditDialog />
                <DeleteDialog/>
            </ButtonGroup>
        </div>
    );
}
