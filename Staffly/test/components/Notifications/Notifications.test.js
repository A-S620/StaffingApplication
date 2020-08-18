import React from 'react';
import {mount} from 'enzyme';
import Notifications from "../../../src/components/Notifications";
import {store} from "../../../src/store/Store";
import NotifCard from "../../../src/components/Notifications/NotifCard";
import {Provider} from "react-redux";

describe('Notifications page', () => {
    it('the notifications page should render correctly', () => {
        const component = mount(<Provider store={store}><Notifications /></Provider>);

        expect(component).toMatchSnapshot();
    });
});
describe('Notification Page Notification cards', () => {
    const component = mount(<Provider store={store}><NotifCard/> </Provider>);
    it('the notifications cards should render correctly', () => {


        expect(component).toMatchSnapshot();
    });

});
