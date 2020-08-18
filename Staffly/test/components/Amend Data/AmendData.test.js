import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux'
import AmendData from "../../../src/components/AmendData";
import {store} from "../../../src/store/Store";
import EditDialog from "../../../src/components/AmendData/EditDialog";
import DeleteDialog from "../../../src/components/AmendData/DeleteDialog";
import ShiftsTable from "../../../src/components/AmendData/ShiftsTable";

describe('Amend Data page ', () => {
    const component = mount(<Provider store={store}><AmendData/></Provider>);
    it('should render correctly ', () => {


        expect(component).toMatchSnapshot();
    });
    it('should have only 1 Shifts table', () => {
        const table = component.find('table');
        expect(table).toHaveLength(1)

    });
    it('should have only 1 edit button', () => {
        const editButton = component.find('button').at(0);
        expect(editButton).toHaveLength(1)
    });
    it('should have only 1 delete button', () => {
        const deleteButton = component.find('button').at(1);
        expect(deleteButton).toHaveLength(1)
    })
});
describe('Amend Data Edit Dialog ', () => {
    const component = mount(<Provider store={store}><EditDialog/></Provider>);
    it('should render correctly ', () => {


        expect(component).toMatchSnapshot();
    });



});


describe('Amend Data Delete Dialog ', () => {
    const component = mount(<Provider store={store}><DeleteDialog/></Provider>);
    it('should render correctly ', () => {


        expect(component).toMatchSnapshot();
    });

});
describe('Amend Data ShiftsTable ', () => {
    const component = mount(<Provider store={store}><ShiftsTable/></Provider>);
    it('should render correctly ', () => {


        expect(component).toMatchSnapshot();
    });
    it('should display only 1 table element', () => {
        const table = component.find('table');
        expect(table).toHaveLength(1);
    });

    it('should display only 6 columns in the table element', () => {
        const tableHead = component.find('th');
        expect(tableHead).toHaveLength(6);
    });
    it('should display columns correctly', () => {
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