import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import Notifications from "../../src/components/Notifications";
describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Notifications debug />);

        expect(component).toMatchSnapshot();
    });
});
describe('test jest', () => {
    it('should work', () => {
        expect(5).toBe(5);
    });
});