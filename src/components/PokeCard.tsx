import React from "react";
import { Box, Card, CardBody, Heading } from "grommet";
import { IDraggablePokemon } from "../types";
import { CARD_SIZE } from "../constants";

interface IPokeCard {
  pokemon: IDraggablePokemon;
}
export default function PokeCard({ pokemon }: IPokeCard) {
  return (
    <Box style={{ pointerEvents: "none", ...CARD_SIZE }}>
      <Card
        background="#fff"
        elevation="xxsmall"
        margin="small"
        style={{ minWidth: "200px" }}
      >
        <CardBody
          direction="row"
          gap="xsmall"
          justify="between"
          align="center"
          pad="small"
        >
          <img src={pokemon.sprite} />
          <Heading level="3">{pokemon.name}</Heading>
        </CardBody>
      </Card>
    </Box>
  );
}
