import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import HomePage from "../../../src/components/HomePage";
describe('Home', () => {
    it('should render correctly', () => {
        const component = shallow(<HomePage/>);

        expect(component).toMatchSnapshot();
    });
});