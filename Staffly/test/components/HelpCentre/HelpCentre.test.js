import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import HelpCentre from "../../../src/components/HelpCentre";
describe('App ', () => {
    it('should render correctly ', () => {
        const component = shallow(<HelpCentre  />);

        expect(component).toMatchSnapshot();
    });
});