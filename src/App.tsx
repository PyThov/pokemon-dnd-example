import React from "react"
import { Box, Card, CardHeader, Heading, Main } from "grommet"
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Container from "./components/Container"
import { IDraggableMon } from "./types";

// InitialPokemon data structure
interface IPokedex {
  [key: string]: IDraggableMon[]
}
const intialPokedex: IPokedex = {
  party: [{name: "Pikachu", id: "1"}, {name: "Bulbasaur", id: "2"}],
  storage: [{name: "Charmander", id: "3"}],
}

export default function App() {
  const [pokedex, setPokedex] = React.useState(intialPokedex)

  const reorder = (list: IDraggableMon[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const remove = (list: IDraggableMon[], index: number) => {
    const result = [...list];
    result.splice(index, 1);
    return result
  }

  const appendAt = (list: IDraggableMon[], index: number, pokemon: IDraggableMon) => {
    const result = [...list];
    result.splice(index, 0, pokemon);
    return result
  }

  function handleDragEnd(result: DropResult) {
    console.log(result)
    console.log(pokedex)
    const src = result.source
    const dest = result.destination

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
      const tempPokedex = {...pokedex}
      tempPokedex[src.droppableId] = items
  
      setPokedex({...tempPokedex});
    } else {
      // --- DIFFERENT CONTAINER ---
      // Otherwise, we need to handle source and destination
      const srcItems = remove(pokedex[src.droppableId], src.index)
      const destItems = appendAt(pokedex[dest.droppableId], dest.index, pokedex[src.droppableId][src.index])

      console.log(srcItems)
      console.log(destItems)

      // Set new pokedex values
      const tempPokedex = {...pokedex}
      tempPokedex[src.droppableId] = srcItems
      tempPokedex[dest.droppableId] = destItems

      setPokedex({...tempPokedex})
    }
  }

  return (
    <Main align="center">
      <Heading>
        <Card background="red">
          <CardHeader pad="medium">
            React - Drag n' Drop
          </CardHeader>
        </Card>
      </Heading>
        <div style={{
          borderBottom: "2px solid",
          width: "90%",
        }} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box pad="large" direction="row" gap="xlarge">
              <Container header="Party" pokemon={pokedex.party || []} />
              <Container header="Storage" pokemon={pokedex.storage || []} />
          </Box>
        </DragDropContext>
    </Main>
  )
}
