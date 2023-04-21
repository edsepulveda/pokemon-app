import { Grid, Card } from '@nextui-org/react'
import { FC } from 'react'

interface Props{
  favorites: Array<number>
}

export const FavPokemon: FC<Props> = ({favorites}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      favorites.map(id => (
        <Grid xs={6} sm={3} md={2} key={id}>
          <Card isHoverable isPressable css={{ padding: '$11', marginTop: '$11' }}>
            <Card.Image 
            width='100%'
            height='140'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
          </Card>
        </Grid>
      ))
    }
  </Grid.Container>
)}