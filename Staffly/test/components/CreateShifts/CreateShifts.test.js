import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import CreateShifts from "../../../src/components/CreateShifts";

describe('Days Off', () => {
    const component = shallow(<Provider store={store}><CreateShifts/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it('should have a Create Shift title', () => {
        const title = component.find('h1');
        console.log(title.text());
        expect(title).toHaveLength(1);
    })
});
