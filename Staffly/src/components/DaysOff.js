import React, {Component} from 'react';
import DaysOffGrid from "./DaysOff/DaysOffGrid"
import {Typography, Grid} from "@material-ui/core"
import DaysOffCalendar from "./DaysOff/DaysOffCalendar";

class DaysOff extends Component {
    render() {
        return (

            <div className="DaysOff" style={{marginTop: 60}}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    style={{marginBottom: 30}}
                >
                    <Typography variant="h4" component="h2" gutterBottom justify="center">
                        Days Off
                    </Typography>
                </Grid>

                <DaysOffGrid/>
            </div>
        );
    }
}

export default DaysOff;