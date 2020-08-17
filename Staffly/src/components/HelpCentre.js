import React, { Component } from 'react';
import HelpCard from "./HelpCentre/HelpCard";
import RequestHelp from "./HelpCentre/RequestHelp";


class HelpCentre extends Component {
    render() {
        return (
            <div className="HelpCentre" style={{marginTop:60}} >
                <div>
                    <RequestHelp/>
                    <HelpCard/>
                </div>
            </div>
        );
    }
}

export default HelpCentre;