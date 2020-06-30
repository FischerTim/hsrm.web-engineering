import React from "react";

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GeneratorList from "./GeneratorList";

const gameres = {
    Generators: {
        HeadText : 'HeadText',
        CpsText : 'CpsText',
        IdText : 'IdText',
        PriceText : 'PriceText',
        AmountText : 'AmountText'
    }
}


let wrapper = mount(
    <GeneratorList gameRessources={gameres} />
)
test('GeneratorList table content', () => {
    const rowsHead = wrapper.find('.genListTableHead')
    expect(rowsHead.length).toEqual(1)
    const rowsHeadCol = rowsHead.first().find('th').map(column => column.text())
    expect(rowsHeadCol[0]).toEqual('HeadText')

    const rowsBody = wrapper.find('.genListTableBody')
    expect(rowsBody.length).toEqual(1)
    const rowsBodyCol = rowsBody.first().find('th').map(column => column.text())
    expect(rowsBodyCol[0]).toEqual('CpsText')
    expect(rowsBodyCol[1]).toEqual('IdText')
    expect(rowsBodyCol[2]).toEqual('PriceText')
    expect(rowsBodyCol[3]).toEqual('AmountText')
});