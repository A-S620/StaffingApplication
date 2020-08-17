import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

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
        margin: "5px",
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RequestHelp(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [row, setRow] = React.useState(props.selectedRow);
    const [title, setTitle] = React.useState();
    const [comment, setComment] = React.useState();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    // console.log(props.selectedRow.ShiftStartDate);

    return (
        <div>
            <Button className={classes.button} variant="outlined" color="primary" onClick={() => {
                handleClickOpen();
            }
            }>
                Request Help
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
                    <DialogContentText>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Help Request
                                </Typography>

                                <form className={classes.form} noValidate>


                                    <Grid container spacing={2}>


                                        <Grid item xs={12}>

                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="title"
                                                label="Title"
                                                name="title"
                                                autoComplete="title"
                                                onChange={(event) => {
                                                    setTitle(event.target.value)
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                style={{width :400}}
                                                required
                                                fullwidth
                                                id="Comment"
                                                label="Comment"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                value={comment}
                                                onChange={(event) => {
                                                    setComment(event.target.value);

                                                }}
                                            />
                                        </Grid>



                                    </Grid>

                                </form>
                            </div>
                        </Container>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        className={classes.submit}

                    >
                        Submit Request
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

