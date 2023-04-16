import React, { useCallback, useEffect, useMemo } from "react";
import { Box, Card, CardBody, CardHeader, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { debounce } from "lodash";
import { getPokeData } from "../utils";
import PokeCard from "./PokeCard";
import { IDraggablePokemon } from "../types";
import { Draggable } from "react-beautiful-dnd";
import { CARD_SIZE } from "../constants";
import { StrictModeDroppable } from "./StrictModeDroppable";

export default function PokeSearch() {
  const [result, setResult] = React.useState<IDraggablePokemon | undefined>();
  const [value, setValue] = React.useState("");
  const [focus, setFocus] = React.useState(true);

  const shouldShow = focus && result;

  const search = useCallback(debounce(
    (term) => {
      console.log("search!", term);
      getPokeData(term).then((res) => {
        if (res) {
          setResult(res)
        } else {
          setResult(undefined)
        }
      }).catch((e) => {
        console.log(e)
        setResult(undefined)
      });
    },
    500,
    { leading: false, trailing: true }
  ), []);

  useEffect(() => {
    if (value.length > 0) {
      search(value)
    } else {
      setResult(undefined);
    }
  }, [value]);

  return (
    <Box width={CARD_SIZE.width} style={{ position: "relative" }}>
      <Card background="#eee" pad="xsmall">
        <CardHeader background="red" style={{ borderRadius: "inherit" }}>
          <TextInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            icon={<Search />}
            focusIndicator={false}
          />
        </CardHeader>
      </Card>
      <Box>
        {result && (
          <Card
            background="#eee"
            style={{ position: "absolute", top: "100%" }}
          >
            {JSON.stringify(result)}
          </Card>
        )}
      </Box>
    </Box>
  );
}
