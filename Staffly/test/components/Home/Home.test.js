import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import HomePage from "../../../src/components/HomePage";
import {store} from "../../../src/store/Store";
import SignIn from "../../../src/components/SignIn";
import DaysOffTable from "../../../src/components/HomePage/DaysOffTable";
import ShiftsTable from "../../../src/components/HomePage/ShiftsTable";
describe('Home', () => {
    it('should render correctly', () => {
        const component = mount(<Provider store={store}><HomePage/></Provider>);

        expect(component).toMatchSnapshot();
    });
});
describe('Home Page Days Off Table', () => {
    const component = mount(<Provider store={store}>
        <DaysOffTable/>
    </Provider>);
    // it('should render correctly in "debug" mode', () => {
    //
    //
    //     expect(component).toMatchSnapshot();
    // });
    it('should display only 1 table element', () => {
        const table = component.find('table');
        expect(table).toHaveLength(1);
    });

    it('should display only 6 columns in the table element', () => {
        const tableHead = component.find('th');
        expect(tableHead).toHaveLength(6);
    });
    it('should display correct Columns', () => {
        const cols = [
            {name: 'Type ID'},
            {name: 'Person ID'},
            {name: 'Request Date'},
            {name: 'Start Date'},
            {name: 'End Date'},
            {name: 'Comment'},
        ];
        const tableHead = component.find('th');
        tableHead.forEach((th, idx) => {
            expect(th.text()).toEqual(cols[idx].name);
        });
    });
    it('should only have 1 table body', () => {
        const tableBody = component.find('tbody');
        expect(tableBody).toHaveLength(1);
    });



});
describe('Home Page Shifts Table', () => {
    const component = mount(<Provider store={store}>
        <ShiftsTable/>
    </Provider>);
    // it('should render correctly in "debug" mode', () => {
    //
    //
    //     expect(component).toMatchSnapshot();
    // });
    it('should display only 1 table element', () => {
        const table = component.find('table');
        expect(table).toHaveLength(1);
    });

    it('should display only 6 columns in the table element', () => {
        const tableHead = component.find('th');
        expect(tableHead).toHaveLength(6);
    });
    it('should display correct Columns', () => {
        const cols = [
            {name: 'Shift ID'},
            {name: 'Person ID'},
            {name: 'Start Date'},
            {name: 'End Date'},
            {name: 'Shift Type'},
            {name: 'Location'},
        ];
        const tableHead = component.find('th');
        tableHead.forEach((th, idx) => {
            expect(th.text()).toEqual(cols[idx].name);
        });
    });
    it('should only have 1 table body', () => {
        const tableBody = component.find('tbody');
        expect(tableBody).toHaveLength(1);
    });



});