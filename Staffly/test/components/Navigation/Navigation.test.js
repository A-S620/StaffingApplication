import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import Navigation from "../../../src/components/Navigation/Navigation";
describe('Navigation ', () => {
    it('should render correctly', () => {
        const component = mount(<Navigation />);

        expect(component).toMatchSnapshot();
    });
});