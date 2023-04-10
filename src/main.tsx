import React from "react";
import ReactDOM from "react-dom/client";
import { Grommet } from "grommet";
import PokemonDragNDrop from "./PokemonDragNDrop";
import "./index.css";
import theme from "./theme";
import { IPokedex } from "./types";

const intialPokedex: IPokedex = {
  party: [
    {
      name: "Pikachu",
      id: "1",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      name: "Bulbasaur",
      id: "2",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  ],
  storage: [
    {
      name: "Charmander",
      id: "3",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <PokemonDragNDrop intialPokedex={intialPokedex} />
    </Grommet>
  </React.StrictMode>
);
