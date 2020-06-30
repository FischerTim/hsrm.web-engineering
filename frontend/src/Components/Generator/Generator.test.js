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
    Amount: 'Amount'
}

const res = {
    Generators : { BuyText : 'BuyText'}
}

let wrapper = mount(
    <Generator generator={gen} ressource={res} />
)
test('Generator table content', () => {
    const rows = wrapper.find('.generatorTable')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('td').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('Income_rate')
    expect(firstRowColumns[1]).toEqual('Order')
    expect(firstRowColumns[2]).toEqual('Price')
    expect(firstRowColumns[3]).toEqual('Amount')
});