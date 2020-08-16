import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import PersonalDetails from "../../../src/components/Settings/PersonalDetails";

describe('Personal Details ', () => {
    const component = shallow(<Provider store={store}><PersonalDetails/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });
    it('should only have 1 Personal Details heading', () => {
        const heading = component.find('main').find('h1');
        expect(heading).toHaveLength(1)
        
    });

    it('should only have 1 form', () => {
        const form = component.find('form');
        expect(form).toHaveLength(1)
    })

});