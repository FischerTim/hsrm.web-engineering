import React from 'react';

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GameOption from './GameOption'

let gameId = 'EggFarm'
let gameRep = 'Egg Farm'
let wrapper = mount(
    <GameOption gameId={gameId} gameRepresentation={gameRep} />
);

test('GameOption <option> with value', () => {
    let optionVal = wrapper.find('option').props().children
    expect(optionVal).toBe(gameRep)
});
