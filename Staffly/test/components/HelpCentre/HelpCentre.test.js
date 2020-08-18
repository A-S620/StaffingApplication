import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import HelpCentre from "../../../src/components/HelpCentre";
import {store} from "../../../src/store/Store";
import NotifCard from "../../../src/components/Notifications/NotifCard";
import HelpCard from "../../../src/components/HelpCentre/HelpCard";
describe('Help Centre ', () => {
    it('should render correctly ', () => {
        const component = mount(<Provider store={store}><HelpCentre  /></Provider>);

        expect(component).toMatchSnapshot();
    });
});
describe('Help Centre Help Card ', () => {
    it('should render correctly ', () => {
        const component = mount(<Provider store={store}><HelpCard/></Provider>);

        expect(component).toMatchSnapshot();
    });

});