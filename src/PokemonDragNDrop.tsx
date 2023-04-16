import React from "react";
import { Box, Card, CardHeader, Heading, Main } from "grommet";
import DroppableContainer from "./components/DroppableContainer";
import { IPokedex } from "./types";

interface IPokemonDragNDrop {
  intialPokedex: IPokedex;
}
export default function PokemonDragNDrop({ intialPokedex }: IPokemonDragNDrop) {

  return (
    <Main align="center">
      <Heading>
        <Card background="red">
          <CardHeader pad="medium">React - Drag n' Drop</CardHeader>
        </Card>
      </Heading>
      <div
        style={{
          borderBottom: "2px solid",
          marginBottom: "2%",
          width: "90%",
        }}
      />
      <Box align="center">
        <Box pad="large" direction="row" gap="xlarge">
          <DroppableContainer header="Party" pokemon={intialPokedex.party || []} />
          <DroppableContainer
            header="Storage"
            pokemon={intialPokedex.storage || []}
          />
        </Box>
      </Box>
    </Main>
  );
}
