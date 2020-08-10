import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, CardActionArea, CardActions, CardContent,
    Container, Grid, Typography,InputLabel, FormControl,Select} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        maxHeight: 600,
    },
    media: {
        height: 140,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function BalancePaper() {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        typeSelect: '',
    });

    return (
        <Container className={classes.root}>
                    <div>
                        <Box
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Typography variant="h6" gutterBottom justify="center">
                                    As Off:
                                </Typography>
                                <Typography variant="h6" gutterBottom justify="center" style={{marginLeft: 20}}>
                                    balance
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <Typography variant="h6" gutterBottom justify="center">
                                    Days Used:
                                </Typography>
                                <Typography variant="h6" gutterBottom justify="center" style={{marginLeft: 20}}>
                                    Days Used

                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="felx-start"
                                alignItems="center"
                            >
                                <Typography variant="h6" gutterBottom justify="center">
                                    Days Left:
                                </Typography>
                                <Typography variant="h6" gutterBottom justify="center" style={{marginLeft: 20}}>
                                    XX
                                </Typography>
                            </Grid>
                        </Box>


                    </div>
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
        </Container>
    );
}