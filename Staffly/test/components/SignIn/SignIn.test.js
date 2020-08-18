import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux'
import {store} from "../../../src/store/Store";
import SignIn from "../../../src/components/SignIn";

describe('Sign In page', () => {
    const component = mount(<Provider store={store}><SignIn/></Provider>);
    it('should render correctly', () => {


        expect(component).toMatchSnapshot();
    });

});