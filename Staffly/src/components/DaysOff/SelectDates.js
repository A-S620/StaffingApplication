import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CardActionArea, CardActions, CardContent, Container} from "@material-ui/core"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from "react-modern-calendar-datepicker";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        maxHeight: 500,
    },
    media: {
        height: 140,
    },
});

export default function SelectDates() {
    const classes = useStyles();
    const [selectedDayRange, setSelectedDayRange] = useState({
            from: null,
            to: null
        }
    );
    const getDates = () => {
        return (selectedDayRange)
    };

    return (
        <Container className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Calendar
                        value={selectedDayRange}
                        onChange={setSelectedDayRange}
                        colorPrimary="#9c27b0" // added this
                        colorPrimaryLight="#e7cbeb"
                        shouldHighlightWeekends
                    />
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Container>
    );
}