import React, { Component } from 'react';
import NotifCard from "./Notifications/NotifCard";


class Notifications extends Component {
    render() {
        return (
            <div className="Notifications" style={{marginTop:60}} >
                <NotifCard/>
            </div>
        );
    }
}

export default Notifications;