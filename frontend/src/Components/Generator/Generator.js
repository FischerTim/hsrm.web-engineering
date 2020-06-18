import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export function Generator({ generator, ressource }) {
    return (
    <p>
    <DropdownButton title={ressource.Generators.List[generator.Id]}>
        <Dropdown.Item>
            {ressource.Generators.CpsText}{generator.Income_rate}
        </Dropdown.Item>
        <Dropdown.Item>
        {ressource.Generators.IdText}{generator.Id}
        </Dropdown.Item>
        <Dropdown.Item>
        {ressource.Generators.PriceText}{generator.Price}
        </Dropdown.Item>
        <Dropdown.Item>
        {ressource.Generators.AmountText}{generator.Amount}
        </Dropdown.Item>
        <Dropdown.Item>
        <button disabled={generator.Buy == null} onClick={generator.Buy}>
                {ressource.Generators.BuyText}
            </button>
        </Dropdown.Item>


    </DropdownButton>
    
    </p>
    )
}