import React from 'react';
import {shallow} from 'enzyme';
import HelpCard from "../../../src/components/HelpCentre/HelpCard";
import {store} from "../../../src/store/Store";
import Shift from "../../../src/components/CreateShifts/Shift";
import {Provider} from "react-redux";

describe('App ', () => {
    it('should render correctly ', () => {
        const component = shallow(<Provider store={store}><HelpCard/></Provider>);

        expect(component).toMatchSnapshot();
    });

});