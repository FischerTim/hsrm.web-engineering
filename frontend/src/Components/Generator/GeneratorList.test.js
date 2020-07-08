import React from "react";
import { render, fireEvent } from '@testing-library/react';

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import GeneratorList from "./GeneratorList";

const gameres = {
    Generators: {
        HeadText: 'HeadText',
        CpsText: 'CpsText',
        IdText: 'IdText',
        PriceText: 'PriceText',
        AmountText: 'AmountText'
    }
}


let wrapper = mount(
    <GeneratorList gameRessources={gameres} />
)
test('GeneratorList accordion test', () => {
    const hats = { title: 'Favorite Hats', contents: 'Fedoras are classy', };
    const footware = {
        title: 'Favorite Footware',
        contents: 'Flipflops are the best',
    };

    const { getByText, queryByText, } = render(
        <GeneratorList gameRessources={gameres} />
    );

    //expect(getByText(gameres.Generators.HeadText)).toBeInTheDocument();
    expect(queryByText(footware.contents)).toBeNull();
    //fireEvent.click(getByText(gameres.Generators.HeadText));
    //expect(getByText(footware.contents)).toBeInTheDocument();
    expect(queryByText(hats.contents)).toBeNull();
});