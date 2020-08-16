import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import CreateShifts from "../../../src/components/CreateShifts";

describe('Days Off', () => {
    it('should render correctly', () => {
        const component = shallow(<Provider store={store}><CreateShifts/></Provider>);

        expect(component).toMatchSnapshot();
    });
});