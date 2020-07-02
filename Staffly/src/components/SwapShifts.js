import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import SwapShiftsGrid from "./SwapShifts/SwapShiftsGrid";

class SwapShifts extends Component {
    render() {
        return (
            <div className="SwapShifts" style={{marginTop: 60}}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    style={{marginBottom: 30}}
                >
                    <Typography variant="h4" component="h2" gutterBottom justify="center">
                        Swap Shifts
                    </Typography>
                </Grid>
                <SwapShiftsGrid/>
            </div>
        );
    }
}

export default SwapShifts;