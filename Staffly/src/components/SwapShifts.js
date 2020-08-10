import React from 'react';
import {Grid} from "@material-ui/core";
import SwapCard from "./SwapShifts/SwapCard";

export default function SwapShifts() {
    return (
        <Grid style={{marginTop: 10}}
              container
              direction="row"
              justify="center"
              alignItems="center"
        >
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                style={{marginBottom: 20}}
            >
                <SwapCard/>
            </Grid>


        </Grid>
    )
}

