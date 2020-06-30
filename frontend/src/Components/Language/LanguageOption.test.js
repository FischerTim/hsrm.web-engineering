import React from 'react';

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import LanguageOption from './LanguageOption'

let langId = 'DE'
let langRep = 'Deutsch'
let wrapper = mount(
    <LanguageOption LanguageId={langId} LanguageRepresentation={langRep} />
);

test('LanguageOption <option> with value', () => {
    let optionVal = wrapper.find('option').props().children
    expect(optionVal).toBe(langRep)
});
