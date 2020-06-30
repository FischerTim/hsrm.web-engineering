import React from "react";
import { NavDropdown } from 'react-bootstrap';

import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GameSwitch from "./GameSwitch";

let gamename = 'EggFarm'
let lang = 'EN'
let update = 'PizzaDelivery'
let wrapper = mount(
    <GameSwitch game={gamename} updateLanguage={lang} updateGame={update} />
)
test('onGameChanged() onClick', () => {
    const dropdown = wrapper.find(NavDropdown);
    const submenu = shallow(<NavDropdown.Item>{dropdown.prop('EggFarm')}</NavDropdown.Item>);
    const submenuItems = submenu.find(NavDropdown.Item);
    submenuItems.forEach(item => item.simulate('click'));


});
/** 
test('Gameswitch data test', () => {
    let enKey = wrapper.find(NavDropdown).props().children[0].props.children.key // 'EN'
    let deKey = wrapper.find(NavDropdown).props().children[1].props.children.key // 'DE'
    expect(enKey).toBe('EN')
    expect(deKey).toBe('DE')
});
*/