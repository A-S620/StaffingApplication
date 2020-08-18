import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {makeStyles} from '@material-ui/core/styles';
import {store} from "../../store/Store";
import {connect} from "react-redux";
const useStyles = makeStyles((theme) => ({

    button: {
        margin: "10px",
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle >{"Delete Shift"}</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to delete this shift?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        handleClose();
                        store.dispatch({
                            type:"DELETE_SHIFT",
                            payload: props.selectedRow.ShiftId,
                        })

                    }} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedRow: state.selectedRow,

    }
}


export default connect(mapStateToProps, {})(DeleteDialog);