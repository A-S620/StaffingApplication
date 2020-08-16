import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import Shift from "../../../src/components/CreateShifts/Shift";

describe('Days Off', () => {
    it('should render correctly', () => {
        const component = shallow(<Provider store={store}><Shift/></Provider>);

        expect(component).toMatchSnapshot();
    });
});