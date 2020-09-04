import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import SwapShifts from "../../../src/components/SwapShifts";
describe('Swap Shifts ', () => {
    const component = mount(<SwapShifts/>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it('should have a user shift selector', () =>{
        const selector = component.find('select').at(0);
        expect(selector).toHaveLength(1)
    })
});
