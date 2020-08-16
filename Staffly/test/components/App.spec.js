import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import App from "../../src/App";
describe('App ', () => {
    it('should render correctly', () => {
        const component = shallow(<App/>);

        expect(component).toMatchSnapshot();
    });
});
describe('testing jest', () => {
    it('should work', () => {
        expect(5).toBe(5);
    });
});