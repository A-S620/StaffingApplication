import React from 'react';
import {mount, shallow} from 'enzyme';
import { Provider } from 'react-redux'
import DaysOffTable from "../../../src/components/HomePage/DaysOffTable";
import {store} from "../../../src/store/Store";

describe('MyComponent', () => {
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

    it('should display only 7 columns in the table element', () => {
        const tableHead = component.find('th');
        expect(tableHead).toHaveLength(7);
    });
    it('should display Graph Id and Current State Columns', () => {
        const cols = [
            {name: 'Request ID'},
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