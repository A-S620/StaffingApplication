import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import CreateShifts from "../../../src/components/CreateShifts";
import Shift from "../../../src/components/CreateShifts/Shift";

describe('Create Shifts', () => {
    const component = mount(<Provider store={store}><CreateShifts/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it('should have a Create Shift title', () => {
        const title = component.find('h1');
        expect(title).toHaveLength(1);
    })
});
describe('Shift', () => {
    const component = mount(<Provider store={store}><Shift/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it( 'should only have 1 form', () => {
        const form = component.find('form');
        expect(form).toHaveLength(1)
    });
    it('should only have 1 Create Shift button', () => {
        const button = component.find('button').at(0);
        expect(button).toHaveLength(1);
        expect(button.text()).toBe('Create Shift')
    })
});