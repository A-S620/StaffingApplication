import React, {Component} from 'react';
import DaysOffTable from "./HomePage/DaysOffTable";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage" style={{marginTop: 60}}>
                <DaysOffTable/>
            </div>
        );
    }
}

export default HomePage;