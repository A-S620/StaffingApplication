import React from 'react';
import {makeStyles,} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function Comment() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value)
    };
    return (
        <div>
            <TextField

                style={{width: 600}}
                id="Comment"
                label="Comment"
                multiline
                rows={4}
                variant="outlined"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    console.log("value   " + value)

                }}
            />
        </div>
    );

}
