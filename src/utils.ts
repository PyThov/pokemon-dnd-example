import pokedataMock from "./mock"
import { IPokedata } from "./types"

const response = pokedataMock

export const getPokeData = async (pokemon: string) => {
    // return {
    //     sprite: response.sprites.front_default
    // }
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
        return res.json().then((data) => {
            console.log(data)
            const pokedata: IPokedata = {
                sprite: data.sprites.front_default
            }
            return pokedata
        })
    })
}