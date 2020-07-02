import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import {Paper} from "@material-ui/core"

const DaysOffCalendar = () => {
    // ✅ a change in default state: { from: ..., to: ... }
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    return (

        <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            colorPrimary="#3232CC" // added this
            colorPrimaryLight="rgba(75, 207, 250, 0.4)"
            shouldHighlightWeekends
        />
    );
};

export default DaysOffCalendar;



