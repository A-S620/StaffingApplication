import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import Settings from "../../../src/components/Settings";
import {store} from "../../../src/store/Store";
import Balance from "../../../src/components/DaysOff/Balance";
import PersonalDetails from "../../../src/components/Settings/PersonalDetails";
describe('Settings ', () => {
    const component = mount(<Provider store={store}><Settings/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });


});
describe('Settings page Personal Details ', () => {
    const component = mount(<Provider store={store}><PersonalDetails/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it('should only have 1 Personal Details heading', () => {
        const heading = component.find('h1');
        expect(heading.text()).toBe('Personal Details')

    });

    it('should only have 1 form', () => {
        const form = component.find('form');
        expect(form).toHaveLength(1)
    });
    it('should only have 1 Save Changes button', () => {
        const button = component.find('button');
        expect(button).toHaveLength(1)
    })

});