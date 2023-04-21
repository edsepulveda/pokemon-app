import { SmallPokemon } from '@/interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props{
  pokemons: SmallPokemon[]
}

export const PokemonCard: FC<Props> = ({ pokemons }) => {

  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map(({id, img, name}) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card variant='bordered' isHoverable isPressable onClick={() => handleClick(id)}>
            <Card.Body css={{ p: 1 }}>
              <Card.Image src={img} width='100%' height={140}/>
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between' css={{ mt: 10 }}>
                <Text>#{id}</Text>
                <Text b color='secondary'>{name.toUpperCase()}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        ))
      }
    </Grid.Container>
  )
}
