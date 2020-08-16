import React from 'react';
import {mount} from 'enzyme';
import SelectDates from "../../../src/components/DaysOff/SelectDates";
describe('SelectDates', () => {
    const component = mount(<SelectDates/>);
    it('should render correctly', () => {

        expect(component).toMatchSnapshot();
    });

    it('should only have 1 TypeSelect', () => {
        expect(component.find('select')).toHaveLength(1);

    });
    it('should only have 1 AsOff', () => {
        console.log(component.find('h6').text())
        // expect(component.find('select')).toHaveLength(1);

    });
    // it('should only have 1 comment field', () => {
    //     expect(component.find('textarea')).toHaveLength(1);
    //
    // });

});