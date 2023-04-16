import React from "react";
import { Card, CardHeader, CardBody } from "grommet";
import { Draggable } from "react-beautiful-dnd";
import { IDraggablePokemon } from "../types";
import PokeCard from "./PokeCard";
import { StrictModeDroppable } from "./StrictModeDroppable";
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
          <StrictModeDroppable
            droppableId={header.toLowerCase()}
            type={"POKEMON"}
          >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardBody
                  style={{
                    minHeight: CARD_SIZE.height,
                    minWidth: CARD_SIZE.width,
                  }}
                >
                  {pokemon.map((mon, index) => (
                    <Draggable key={mon.id} draggableId={mon.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <PokeCard pokemon={mon} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </CardBody>
              </div>
            )}
          </StrictModeDroppable>
        </Card>
      </CardBody>
    </Card>
  );
}
