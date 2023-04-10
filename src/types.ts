export interface IDraggablePokemon {
  id: string;
  name: string;
  sprite: string;
}

export interface IPokedata {
  sprite: string;
}

export interface IPokedex {
  [key: string]: IDraggablePokemon[];
}
