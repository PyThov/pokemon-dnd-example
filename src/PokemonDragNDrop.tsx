import React from "react";
import { Box, Card, CardHeader, Heading, Main } from "grommet";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DroppableContainer from "./components/DroppableContainer";
import { IPokedex } from "./types";
import { reorder, remove, appendAt } from "./utils";

interface IPokemonDragNDrop {
  intialPokedex: IPokedex;
}
export default function PokemonDragNDrop({ intialPokedex }: IPokemonDragNDrop) {
  const [pokedex, setPokedex] = React.useState(intialPokedex);

  function handleDragEnd(result: DropResult) {
    const src = result.source;
    const dest = result.destination;

    // Dropped outside the list
    if (!dest) {
      return;
    }

    if (src.droppableId === dest.droppableId) {
      // --- SAME CONTAINER ---
      // If same container, just reorder
      const items = reorder(
        [...pokedex[src.droppableId]],
        src.index,
        dest.index
      );

      // Set the correct pokedex category
      const tempPokedex = { ...pokedex };
      tempPokedex[src.droppableId] = items;

      setPokedex({ ...tempPokedex });
    } else {
      // --- DIFFERENT CONTAINER ---
      // Otherwise, we need to handle source and destination
      const srcItems = remove(pokedex[src.droppableId], src.index);
      const destItems = appendAt(
        pokedex[dest.droppableId],
        dest.index,
        pokedex[src.droppableId][src.index]
      );

      // Set new pokedex values
      const tempPokedex = { ...pokedex };
      tempPokedex[src.droppableId] = srcItems;
      tempPokedex[dest.droppableId] = destItems;

      setPokedex({ ...tempPokedex });
    }
  }

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
          width: "90%",
        }}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box pad="large" direction="row" gap="xlarge">
          <DroppableContainer header="Party" pokemon={pokedex.party || []} />
          <DroppableContainer
            header="Storage"
            pokemon={pokedex.storage || []}
          />
        </Box>
      </DragDropContext>
    </Main>
  );
}
