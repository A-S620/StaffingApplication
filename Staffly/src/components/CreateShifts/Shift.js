import React from 'react';
import {Button, Container, CssBaseline, Grid, TextField, Typography} from '@material-ui/core'
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {store} from "../../store/Store";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Shift(props) {
    const classes = useStyles();
    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [shiftType, setShiftType] = React.useState();
    const [location, setLocation] = React.useState();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create Shift
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="startDate"
                                label="Start Date"
                                name="startDate"
                                autoComplete="start-date"
                                onChange={(event) => {
                                    setStartDate(event.target.value)
                                }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="endDate"
                                label="End Date"
                                name="endDate"
                                autoComplete="end-date"
                                onChange={(event) => {
                                    setEndDate(event.target.value)
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {/*<TextField*/}
                            {/*    variant="outlined"*/}
                            {/*    required*/}
                            {/*    fullWidth*/}
                            {/*    id="shiftType"*/}
                            {/*    label="Shift Type"*/}
                            {/*    name="shiftType"*/}
                            {/*    autoComplete="shift-type"*/}
                            {/*    onChange={(event) => {*/}
                            {/*        setShiftType(event.target.value)*/}
                            {/*    }}*/}
                            {/*/>*/}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="location"
                                label="Location"
                                id="location"
                                autoComplete="location"
                                onChange={(event) => {
                                    setLocation(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="shiftType"
                                label="Shift Type"
                                name="shiftType"
                                autoComplete="shift-type"
                                onChange={(event) => {
                                    setShiftType(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Shift Types:
                            </Typography>
                            {props.shiftTypes.map((type) => {
                                return (
                                    <Typography>
                                        {type.Key} : {type.Value}
                                    </Typography>
                                )

                            })}
                        </Grid>
                    </Grid>


                    <Button
                        onClick={() => {
                            console.log(startDate + endDate + shiftType + location);

                            store.dispatch({
                                type: "ADD_SHIFT",
                                payload: {
                                    PersonId: 244,
                                    ShiftStartDate: startDate,
                                    ShiftEndDate: endDate,
                                    ShiftType: shiftType,
                                    Location: location
                                }

                            });
                            console.log(props.shifts)

                        }}
                        // type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                    >
                        Save Changes
                    </Button>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        shifts: state.shifts,
        shiftTypes: state.shiftTypes

    }
}
export default connect(mapStateToProps, {})(Shift);