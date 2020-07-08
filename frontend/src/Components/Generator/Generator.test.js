import React from "react";

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Generator from "./Generator";

const gen = {
    Income_rate: 'Income_rate',
    Order: 'Order',
    Price: 'Price',
    Amount: 'Amount',
    Order: 'Order'
}

const res = {
    Generators: {
        CpsText: 'CpsText',
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
    <Generator generator={gen} ressource={res} />
)
test('Generator table body content', () => {
    const rows = wrapper.find('.generatorTableBody')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('td').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('Income_rate')
    expect(firstRowColumns[1]).toEqual('Order')
    expect(firstRowColumns[2]).toEqual('Price')
    expect(firstRowColumns[3]).toEqual('Amount')
});

test('Generator table head content', () => {
    const rows = wrapper.find('.generatorTableHead')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('th').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('CpsText')
    expect(firstRowColumns[1]).toEqual('IdText')
    expect(firstRowColumns[2]).toEqual('PriceText')
    expect(firstRowColumns[3]).toEqual('AmountText')
});