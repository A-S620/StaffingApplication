import React from 'react';
import {shallow} from 'enzyme';
import Notifications from "../../../src/components/Notifications";

describe('Notifications page', () => {
    it('the notifications page should render correctly', () => {
        const component = shallow(<Notifications debug/>);

        expect(component).toMatchSnapshot();
    });
});
