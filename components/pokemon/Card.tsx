import { SmallPokemon } from '@/interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { FC } from 'react'

interface Props{
  pokemons: SmallPokemon[]
}

export const PokemonCard: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map(({id, img, name}) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card variant='bordered' isHoverable isPressable>
            <Card.Body css={{ p: 1 }}>
              <Card.Image src={img} width='100%' height={140}/>
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between' css={{ mt: 10 }}>
                <Text># {id}</Text>
                <Text b css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}>{name.toUpperCase()}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        ))
      }
    </Grid.Container>
  )
}
