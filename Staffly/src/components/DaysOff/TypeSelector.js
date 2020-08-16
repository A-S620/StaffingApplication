import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function TypeSelector() {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        typeSelect: '',
    });
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type-selector">Type</InputLabel>
            <Select
                native
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    console.log("value   " + value.toString())
                }}
                inputProps={{
                    name: 'typeSelector',
                    id: 'type-selector',
                }}
            >
                <option aria-label="None" value=""/>
                <option value={1}>Vacation</option>
                <option value={2}>Designated Holiday</option>
                <option value={3}>Illness</option>
                <option value={4}>Non-work learning/ Training</option>
                <option value={5}>Work learning/ Training</option>
                <option value={6}>Military Time Off</option>
                <option value={7}>Parenting Time Off</option>

            </Select>
        </FormControl>
    );
}

