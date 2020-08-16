import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import Calendar from "../../../src/components/Calendar";
describe('App ', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Calendar debug />);

        expect(component).toMatchSnapshot();
    });
});