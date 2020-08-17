import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {connect} from "react-redux";
import {store} from "../../store/Store";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
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
    button: {
        margin: "10px",
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function EditDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [row, setRow] = React.useState(props.selectedRow);
    const [startDate, setStartDate]= React.useState();
    const [endDate, setEndDate] =  React.useState();
    const [shiftType, setShiftType] =  React.useState();
    const [location, setLocation] =  React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDateChange =(event) => {

        setStartDate(event.target.value);

    };
    const typeCheck = () => {
        if (shiftType === ""){
            console.log("shift type    "+shiftType);
            console.log("shift type 2    "+props.selectedRow.ShiftType);
            return props.selectedRow.ShiftType;

        }
        return shiftType;
    }
    const setEmptyStates =() => {
        if (startDate === ""){
            setStartDate(props.selectedRow.ShiftStartDate);

        }
        else if (endDate === ""){
            setEndDate(props.selectedRow.ShiftEndDate)
        }
        else if (shiftType === ""){
            setShiftType(props.selectedRow.ShiftType);
            console.log("shift type    "+shiftType);
            console.log("shift type 2    "+props.selectedRow.ShiftType)
        }
        else if (location === ""){
            setLocation(props.selectedRow.Location)
        }
    };

    // console.log(props.selectedRow.ShiftStartDate);

    return (
        <div>
            <Button className={classes.button} variant="outlined" color="primary" onClick={() => {
                handleClickOpen();
                // store.dispatch({
                //     type: "DELETE_SHIFT",
                //     payload: props.selectedRow.ShiftId
                //
                //
                // })
            }
            }>
                Edit
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            ><Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
            >
                <IconButton onClick={handleClose}>
                    <ClearIcon/>
                </IconButton>

            </Grid>
                <DialogContent>
                    <DialogContentText >
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Edit Shift
                                </Typography>

                                <form className={classes.form} noValidate>


                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Selected Shift:
                                            </Typography>
                                            <Typography>
                                                Dates: {props.selectedRow.ShiftStartDate} - {props.selectedRow.ShiftEndDate}

                                            </Typography>
                                            <Typography>
                                                Shift Type: {props.selectedRow.ShiftType}
                                            </Typography>
                                            <Typography>

                                                Location: {props.selectedRow.Location}
                                            </Typography>
                                        </Grid>

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
                                            <Typography>
                                                Shift Types:
                                            </Typography>
                                            {props.types.map((type) => {
                                                return (
                                                    <Typography>
                                                        {type.Key} : {type.Value}
                                                    </Typography>
                                                )

                                            })}
                                        </Grid>

                                    </Grid>

                                </form>
                            </div>
                        </Container>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setEmptyStates();
                            console.log("shift id     "+props.selectedRow.ShiftId);
                            store.dispatch({
                                type: "DELETE_SHIFT",
                                payload: props.selectedRow.ShiftId


                            });


                            store.dispatch({
                                type: "ADD_SHIFT",
                                payload: {
                                    ShiftId: props.selectedRow.ShiftId,
                                    PersonId: props.selectedRow.PersonId,
                                    ShiftStartDate: startDate,
                                    ShiftEndDate: endDate, 
                                    ShiftType: typeCheck(),
                                    Location: location
                                }

                            });
                            handleClose();
                        }
                        }
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        className={classes.submit}

                    >
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        selectedRow: state.selectedRow,
        shifts: state.shifts,
        types: state.shiftTypes

    }
}


export default connect(mapStateToProps, {})(EditDialog);
