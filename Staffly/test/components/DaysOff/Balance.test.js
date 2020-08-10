import React from 'react';
import {mount, shallow} from 'enzyme';
import { Provider } from 'react-redux'
import Balance from "../../../src/components/DaysOff/Balance";
import toJson from 'enzyme-to-json';
describe('Balances and TypeSelector', () => {
    const component = mount(<Balance/>);
    it('should render correctly', () => {

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should only have 1 TypeSelector', () => {
        expect(component.find('select')).toHaveLength(1);

    });
    it('should only have 1 AsOff', () => {
        expect(component.find('select')).toHaveLength(1);

    });
    // it('should only have 1 comment field', () => {
    //     expect(component.find('textarea')).toHaveLength(1);
    //
    // });

});