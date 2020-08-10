import React, { Component } from 'react';
import {connect} from "react-redux";


class Settings extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        // store.dispatch({type: "ADD_PERSON", payload})
        return (
            <div className="Settings" style={{marginTop:60}} >
                <div>
                    test
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}


export default connect(mapStateToProps,{})(Settings);
// export default Settings;
