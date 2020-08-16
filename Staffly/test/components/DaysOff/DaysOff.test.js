import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import DaysOff from "../../../src/components/DaysOff";
import {store} from "../../../src/store/Store";
import Balance from "../../../src/components/DaysOff/Balance";
describe('Days Off', () => {
    it('should render correctly', () => {
        const component = shallow(<Provider store={store}><DaysOff/></Provider>);

        expect(component).toMatchSnapshot();
    });
});