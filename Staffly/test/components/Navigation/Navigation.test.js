import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import Navigation from "../../../src/components/Navigation/Navigation";
describe('Navigation ', () => {
    it('should render correctly', () => {
        const component = shallow(<Navigation />);

        expect(component).toMatchSnapshot();
    });
});