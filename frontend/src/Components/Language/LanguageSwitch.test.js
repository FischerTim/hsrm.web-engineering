import React from "react";
import { NavDropdown } from 'react-bootstrap';

import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import LanguageSwitch from "./LanguageSwitch";

let languageTitle = 'DE'
let updateLang = 'EN'
let wrapper = mount(
    <LanguageSwitch language={languageTitle} updateLanguage={updateLang} />
)
test('onLanguageChanged() onClick', () => {
    let enKey = wrapper.find(NavDropdown).props().children[0].props.children.key // 'EN'
    let deKey = wrapper.find(NavDropdown).props().children[1].props.children.key // 'DE'

    const dropdown = wrapper.find(NavDropdown);
    const submenu = shallow(<NavDropdown.Item>{dropdown.prop(enKey)}</NavDropdown.Item>);
    const submenuItems = submenu.find(NavDropdown.Item);
    submenuItems.forEach(item => item.simulate('click'));


});
test('LanguageSwitch data test', () => {
    let enKey = wrapper.find(NavDropdown).props().children[0].props.children.key // 'EN'
    let deKey = wrapper.find(NavDropdown).props().children[1].props.children.key // 'DE'
    expect(enKey).toBe('EN')
    expect(deKey).toBe('DE')
});