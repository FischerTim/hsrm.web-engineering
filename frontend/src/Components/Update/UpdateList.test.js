import React from "react";

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import UpdateList from "./UpdateList";

const upres = {
    Updates: {
        HeadText : 'HeadText',
        MultiplierText : 'MultiplierText',
        IdText : 'IdText',
        PriceText : 'PriceText',
    }
}


let wrapper = mount(
    <UpdateList gameRessources={upres} />
)
test('UpdateList table content', () => {
    const rowsHead = wrapper.find('.upListTableHead')
    expect(rowsHead.length).toEqual(1)
    const rowsHeadCol = rowsHead.first().find('th').map(column => column.text())
    expect(rowsHeadCol[0]).toEqual('HeadText')

    const rowsBody = wrapper.find('.upListTableBody')
    expect(rowsBody.length).toEqual(1)
    const rowsBodyCol = rowsBody.first().find('th').map(column => column.text())
    expect(rowsBodyCol[0]).toEqual('MultiplierText')
    expect(rowsBodyCol[1]).toEqual('IdText')
    expect(rowsBodyCol[2]).toEqual('PriceText')
});