import { IDraggablePokemon } from "./types";

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
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      return res.json().then((data) => {
        console.log(data);
        const pokedata: IDraggablePokemon = {
          id: crypto.randomUUID(),
          name: capitalizeFirstLetter(data.name),
          sprite: data.sprites.front_default,
        };
        return pokedata;
      });
    })
    .catch((e) => {
      console.log(`${pokemon} not found`);
      return undefined;
    });
};
