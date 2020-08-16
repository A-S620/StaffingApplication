import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import AmendData from "../../../src/components/AmendData";
describe('App ', () => {
    it('should render correctly ', () => {
        const component = shallow(<AmendData/>);

        expect(component).toMatchSnapshot();
    });
});