import React from 'react';
import {makeStyles,} from '@material-ui/core/styles';
import {CardActionArea, CardActions, CardContent, Container, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        maxHeight: 600,
    },
    media: {
        height: 140,
    },
}));

export default function CommentField() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const onClick = () => {
    };
    return (
        <Container className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <div>
                        <TextField

                            style={{width: 250}}
                            id="Comment"
                            label="Comment"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={value}
                            onChange={(event) => {
                                setValue(event.target.value);

                            }}
                        />
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Container>
    );

}
