import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import HelpCentre from "../../../src/components/HelpCentre";
describe('App ', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<HelpCentre debug />);

        expect(component).toMatchSnapshot();
    });
});