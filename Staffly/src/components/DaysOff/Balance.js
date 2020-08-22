import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Container, FormControl, Grid, InputLabel, Select, Typography} from "@material-ui/core"
import {connect} from "react-redux";
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
function BalancePaper(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        typeSelect: '',
    });
    return (
        <Container className={classes.root}>
            <div>
                {props.bal.map((bals) => {
                        return (

                            <Box>


                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                >


                                    <Typography variant="h6" gutterBottom justify="center">
                                        As Off:
                                    </Typography>
                                    <Typography variant="h6" gutterBottom justify="center" style={{marginLeft: 20}}>
                                        {bals.AsOff}
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                >
                                    <Typography variant="h6" gutterBottom justify="center">
                                        Total Days:
                                    </Typography>
                                    <Typography variant="h6" gutterBottom justify="center" style={{marginLeft: 20}}>
                                        {bals.TotalDays}

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
                                        {bals.DaysUsed}
                                    </Typography>
                                </Grid>
                            </Box>
                        )
                    }
                )}
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="type-selector">Type</InputLabel>
                <Select
                    native
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    inputProps={{
                        name: 'typeSelector',
                        id: 'type-selector',
                    }}
                >
                    <option aria-label="None" value=""/>
                    {props.types.map((type) => {
                        return (
                            <option value={type.Key}>{type.Value}</option>
                        )
                    })}

                </Select>
            </FormControl>
        </Container>
    );
}
const mapStateToProps = state => {
    return {
        bal: state.balance,
        types: state.daysOffTypes,

    }
}
export default connect(mapStateToProps, {})(BalancePaper);