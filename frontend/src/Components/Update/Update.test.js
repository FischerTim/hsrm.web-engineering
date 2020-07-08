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

const res = {
    Updates: {
        MultiplierText: 'MultiplierText',
        IdText: 'IdText',
        PriceText: 'PriceText',
        AmountText: 'AmountText',
        List: []
    },
    ImagePath: {
        GeneratorPath: 'GeneratorPath'
    }
}

let wrapper = mount(
    <Update update={up} ressource={res} />
)
test('Update table body content', () => {
    const rows = wrapper.find('.updateTableBody')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('td').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('Multiplier')
    expect(firstRowColumns[1]).toEqual('Id')
    expect(firstRowColumns[2]).toEqual('Price')
});

test('Update table head content', () => {
    const rows = wrapper.find('.updateTableHead')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('th').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('MultiplierText')
    expect(firstRowColumns[1]).toEqual('IdText')
    expect(firstRowColumns[2]).toEqual('PriceText')
});