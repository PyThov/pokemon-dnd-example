import React, { useEffect } from "react"
import { Box, Card, CardBody, Heading, Spinner } from "grommet"
import { getPokeData } from "../utils"
import { IPokedata } from "../types"
import { CARD_SIZE } from "../constants"

interface IPokeCard {
    pokemon: string
}
export default function PokeCard({ pokemon }: IPokeCard) {
    const [pokedata, setPokedata] = React.useState<IPokedata | undefined>()
    
    // Catch the pokemon!
    useEffect(() => {
        getPokeData(pokemon.toLowerCase()).then((data) => {
            setPokedata(data)
        })
    }, [pokemon])

    return (
        <Box style={{ pointerEvents: "none", ...CARD_SIZE}}>
            {pokedata ?
            <Card background="#fff" elevation="xxsmall" margin="small" style={{ minWidth: "200px" }}>
                <CardBody direction="row" gap="xsmall" justify="between" align="center" pad="small">
                    <img src={pokedata.sprite} />
                    <Heading level="3">{pokemon}</Heading>
                </CardBody>
            </Card> : <Spinner color="#fff" />}
        </Box>
    )
}