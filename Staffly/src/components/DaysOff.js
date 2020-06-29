import React, { Component } from 'react';
import TextFields from "./DaysOff/TextFields";
import Navigation from "./Navigation/Navigation";

class DaysOff extends Component {
    render() {
        return (
            <div className="DaysOff">
                <TextFields/>
            </div>
        );
    }
}

export default DaysOff;