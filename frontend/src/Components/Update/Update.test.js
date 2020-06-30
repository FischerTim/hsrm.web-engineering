import React from "react";

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Update from "./Update";

const up = {
    Multiplier : 'Multiplier',
    Id : 'Id',
    Price : 'Price'
}

let wrapper = mount(
    <Update update={up} />
)
test('Update table content', () => {
    const rows = wrapper.find('.updateTable')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('td').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('Multiplier')
    expect(firstRowColumns[1]).toEqual('Id')
    expect(firstRowColumns[2]).toEqual('Price')
});