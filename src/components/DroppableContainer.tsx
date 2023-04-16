import React from "react";
import { Card, CardHeader, CardBody } from "grommet";
import { IDraggablePokemon } from "../types";
import PokeCard from "./PokeCard";
import { CARD_SIZE } from "../constants";

interface IContainer {
  header: string;
  pokemon: IDraggablePokemon[];
}
export default function DroppableContainer({ header, pokemon }: IContainer) {
  return (
    <Card background="#eee" pad="medium" align="center" gap="small">
      <CardHeader
        style={{
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {header}
      </CardHeader>
      <CardBody>
        <Card background="red" pad="small">
          <CardBody
            style={{
              minHeight: CARD_SIZE.height,
              minWidth: CARD_SIZE.width,
            }}
          >
            {pokemon.map((mon, index) => (
              <PokeCard key={index} pokemon={mon} />
            ))}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}
