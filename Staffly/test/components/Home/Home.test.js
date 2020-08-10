import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import HomePage from "../../../src/components/HomePage";
describe('Home', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<HomePage debug />);

        expect(component).toMatchSnapshot();
    });
});