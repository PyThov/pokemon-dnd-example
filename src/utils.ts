import pokedataMock from "./mock";
import { IDraggablePokemon, IPokedata } from "./types";

const response = pokedataMock;

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPokeData = async (pokemon: string) => {
  // const result: IDraggablePokemon = {
  //   id: crypto.randomUUID(),
  //   name: capitalizeFirstLetter(response.name),
  //   sprite: response.sprites.front_default,
  // };
  // return result;
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
    return res.json().then((data) => {
      console.log(data);
      const pokedata: IDraggablePokemon = {
        id: crypto.randomUUID(),
        name: capitalizeFirstLetter(data.name),
        sprite: data.sprites.front_default,
      };
      return pokedata;
    })
  }).catch((e) => {
    console.log(`${pokemon} not found`)
    return undefined
  });
};

export const reorder = (
  list: IDraggablePokemon[],
  startIndex: number,
  endIndex: number
) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  1;
  result.splice(endIndex, 0, removed);

  return result;
};

export const remove = (list: IDraggablePokemon[], index: number) => {
  const result = [...list];
  result.splice(index, 1);
  return result;
};

export const appendAt = (
  list: IDraggablePokemon[],
  index: number,
  pokemon: IDraggablePokemon
) => {
  const result = [...list];
  result.splice(index, 0, pokemon);
  return result;
};
