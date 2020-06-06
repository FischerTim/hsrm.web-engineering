import { GeneratorBaseState, GeneratorsState } from '../States/GeneratorState'
export class GeneratorService {

    constructor(serverRessourcen) {
        this._serverRessourcen = serverRessourcen
        this._header = null
        this._baseServerPath = `${this._serverRessourcen.HttpPrefix}${this._serverRessourcen.ServerAdresse}:${this._serverRessourcen.Port}`
    }

    getGenerators(token) {
        const tmpGeneratorsState = { ...GeneratorsState }
        if (token != null) {
            this._setHeader(token)

            return fetch(`${this._baseServerPath}${this._serverRessourcen.Endpoint.Generators.Available}`, this._header)
                .then(availableGenerators => availableGenerators.json()).then(availableGenerators => {
                    for (var i = 0; i < availableGenerators.length; i++) {
                        const currentId = availableGenerators[i].id
                        tmpGeneratorsState[currentId] = {
                            ...GeneratorBaseState,
                            income_rate: availableGenerators[i].income_rate,
                            id: currentId

                        }
                        if (i === availableGenerators.length - 1) {
                            return fetch(`${this._baseServerPath}/generators/${currentId}${this._serverRessourcen.Endpoint.Generators.PriceOf}`, this._header)
                                .then(priceOfGen => priceOfGen.json()).then(priceOfGen => {
                                    tmpGeneratorsState[currentId].price = priceOfGen

                                    return fetch(`${this._baseServerPath}${this._serverRessourcen.Endpoint.Generators.Owned}`, this._header)
                                        .then(ownedGenerators => ownedGenerators.json()).then(ownedGenerators => {
                                            for (var j = 0; j < ownedGenerators.length; j++) {
                                                const currentId = ownedGenerators[j].generator.id
                                                tmpGeneratorsState[currentId].amount = ownedGenerators[j].amount
                                            }
                                            console.log(tmpGeneratorsState)
                                            return tmpGeneratorsState
                                        })
                                })
                        } else {
                            fetch(`${this._baseServerPath}/generators/${currentId}${this._serverRessourcen.Endpoint.Generators.PriceOf}`, this._header)
                                .then(priceOfGen => priceOfGen.json()).then(priceOfGen => {
                                    tmpGeneratorsState[currentId].price = priceOfGen
                                })
                        }
                    }

                })
        } else {
            return tmpGeneratorsState
        }
    }
    _setHeader(token) {
        this._header = { method: 'GET', headers: { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded', "Authorization": `Bearer ${token}` } }
    }
}