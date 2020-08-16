import React from 'react';
import {shallow} from 'enzyme';
import NotifCard from "../../../src/components/Notifications/NotifCard";
import {store} from "../../../src/store/Store";
import {Provider} from "react-redux";

describe('Notification cards', () => {
    it('the notifications cards should render correctly', () => {
        const component = shallow(<Provider store={store}><NotifCard/> </Provider>);

        expect(component).toMatchSnapshot();
    });
});