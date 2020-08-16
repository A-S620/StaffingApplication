import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CardActionArea, CardActions, CardContent,Box, Button, Container, Grid, Step, StepButton, Stepper, Typography} from "@material-ui/core"
import SelectDates from "./SelectDates";
import Balance from "./Balance";
import CommentField from "./CommentField";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from "react-modern-calendar-datepicker";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        height: 600,
    },
    button: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',


    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

}));

function getSteps() {
    return ['Dates', 'Leave Type', 'More Info'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Box display="flex" justifyContent="center" orientation={"vertical"}>
                    <SelectDates/>
                </Box>

            );
        case 1:
            return (
                <Box display="flex" justifyContent="center" orientation={"vertical"}>
                    <Balance/>

                </Box>

            );
        case 2:
            return (
                <Box display="flex" justifyContent="center" orientation={"vertical"}>
                    <Container styles={{marginTop: 20, marginBottom: 30}}>
                        <CommentField/>
                    </Container>

                </Box>

            );
        default:
            return 'Unknown step';
    }
}

export default function DaysOffStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState(new Set());
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const totalSteps = () => {
        return getSteps().length;
    };

    const isStepOptional = (step) => {
        //return step === 1;
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const skippedSteps = () => {
        return skipped.size;
    };

    const completedSteps = () => {
        return completed.size;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - skippedSteps();
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed
                  // find the first step that has been completed
                steps.findIndex((step, i) => !completed.has(i))
                : activeStep + 1;

        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = new Set(completed);
        newCompleted.add(activeStep);
        setCompleted(newCompleted);

        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== totalSteps() - skippedSteps()) {
            handleNext();
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted(new Set());
        setSkipped(new Set());
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    function isStepComplete(step) {
        return completed.has(step);
    }

    return (
        <Box className={classes.root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const buttonProps = {};
                    if (isStepOptional(index)) {
                        buttonProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepButton

                                onClick={handleStep(index)}
                                completed={isStepComplete(index)}
                                {...buttonProps}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
            <Box>
                {allStepsCompleted() ? (

                    <div>
                        <Box
                            display="flex"
                            justifyContent="center"
                            orientation={"vertical"}
                            Styles={{marginTop: 20}}
                        >
                            <Container>
                                <Typography variant="h6" align="center">
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Grid container
                                      direction="row"
                                      justify="center"
                                      alignItems="center"
                                >
                                    <Button align="center" onClick={handleReset}>Reset</Button>
                                </Grid>
                            </Container>


                        </Box>
                    </div>
                ) : (
                    <Container display="flex" justifyContent="center" alignConntent="flex-end">
                        <Box display="flex" justifyContent="center" alignConntent="flex-start"
                             orientation={"vertical"}>{getStepContent(activeStep)}</Box>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-end"
                        >
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                            {isStepOptional(activeStep) && !completed.has(activeStep) && (
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Skip
                                </Button>
                            )}

                            {activeStep !== steps.length &&
                            (completed.has(activeStep) ? (
                                <Typography variant="caption" className={classes.completed}>
                                    Step {activeStep + 1} already completed
                                </Typography>
                            ) : (
                                <Button variant="contained" color="primary" onClick={handleComplete}>
                                    {completedSteps() === totalSteps() - 1 ? 'Submit' : 'Complete Step'}
                                </Button>
                            ))}
                        </Grid>
                    </Container>


                )}
            </Box>
        </Box>
    );
}
