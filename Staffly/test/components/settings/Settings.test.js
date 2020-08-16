import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import Settings from "../../../src/components/Settings";
import {store} from "../../../src/store/Store";
import Balance from "../../../src/components/DaysOff/Balance";
describe('App ', () => {
    const component = shallow(<Provider store={store}><Settings/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });


});