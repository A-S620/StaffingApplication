import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItemText, ListItemSecondaryAction, ListItem, ListSubheader} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 250,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

export default function NewShift() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className={classes.root} subheader={<li />}>
            {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                        {[0, 1, 2].map((item) => (
                            <ListItem key={`item-${sectionId}-${item}`}>
                                <ListItemText primary={`Item ${item}`} />
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}