import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import DaysOff from "../../../src/components/DaysOff";
import {store} from "../../../src/store/Store";
import Balance from "../../../src/components/DaysOff/Balance";
import toJson from "enzyme-to-json";
import CommentField from "../../../src/components/DaysOff/CommentField";
import DaysOffStepper from "../../../src/components/DaysOff/DaysOffStepper";
import SelectDates from "../../../src/components/DaysOff/SelectDates";
describe('Days Off', () => {
    it('should render correctly', () => {
        const component = mount(<Provider store={store}><DaysOff/></Provider>);

        expect(component).toMatchSnapshot();
    });
});
describe('Days Off Page Balances and TypeSelector', () => {
    const component = mount(<Provider store={store}><Balance/></Provider>);
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
describe('Days Off Page CommentField', () => {
    const component = mount(<Provider store={store}><CommentField/></Provider>);
    it('should render correctly', () => {

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should only have 1 comment field', () => {
        expect(component.find('textarea')).toHaveLength(1);

    });

});
describe('Days Off Page DaysOffStepper', () => {
    const component = mount(<DaysOffStepper/>);
    it('should render correctly', () => {

        expect(toJson(component)).toMatchSnapshot();
    });

    // it('should only have 1 TypeSelect', () => {
    //     expect(component.find('select')).toHaveLength(1);
    //
    // });
    // it('should only have 1 AsOff', () => {
    //     console.log(component.find('h6').text())
    //     // expect(component.find('select')).toHaveLength(1);
    //
    // });
    // it('should only have 1 comment field', () => {
    //     expect(component.find('textarea')).toHaveLength(1);
    //
    // });

});
describe('Days Off Page SelectDates', () => {
    const component = mount(<SelectDates/>);
    it('should render correctly', () => {

        expect(component).toMatchSnapshot();
    });



});