import React from 'react';
import {mount} from 'enzyme';
import DaysOffStepper from "../../../src/components/DaysOff/DaysOffStepper";

describe('DaysOffStepper', () => {
    const component = mount(<DaysOffStepper/>);
    // it('should render correctly', () => {
    //
    //     expect(toJson(component)).toMatchSnapshot();
    // });

    it('should only have 1 TypeSelec', () => {
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