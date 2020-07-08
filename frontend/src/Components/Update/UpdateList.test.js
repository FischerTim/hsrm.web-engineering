import React from "react";
import { render, fireEvent } from '@testing-library/react';

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
test('UpdateList accordion content', () => {
    const hats = { title: 'Favorite Hats', contents: 'Fedoras are classy', };
    const footware = {
        title: 'Favorite Footware',
        contents: 'Flipflops are the best',
    };

    const { getByText, queryByText, } = render(
        <UpdateList gameRessources={upres} />
    );

    //expect(getByText(gameres.Generators.HeadText)).toBeInTheDocument();
    expect(queryByText(footware.contents)).toBeNull();
    //fireEvent.click(getByText(footware.title));
    //expect(getByText(footware.contents)).toBeInTheDocument();
    expect(queryByText(hats.contents)).toBeNull();
});