import React from 'react';
import {mount, shallow} from 'enzyme';
import { Provider } from 'react-redux'
import CommentField from "../../../src/components/DaysOff/CommentField";
import toJson from 'enzyme-to-json';
describe('CommentField', () => {
    const component = mount(<CommentField/>);
    // it('should render correctly', () => {
    //
    //     expect(toJson(component)).toMatchSnapshot();
    // });

    it('should only have 1 comment field', () => {
        expect(component.find('textarea')).toHaveLength(1);

    });

});