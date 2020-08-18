import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import Calendar from "../../../src/components/Calendar";
describe('Calendar ', () => {
    it('should render correctly', () => {
        const component = mount(<Calendar />);

        expect(component).toMatchSnapshot();
    });
});