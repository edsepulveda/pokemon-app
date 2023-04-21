import { Container, Text } from "@nextui-org/react"
import { Image } from '@nextui-org/react'
export const NoFavorites = () => {
  return (
      <Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}
      >
        <Text transform="uppercase" h1 color='error'>No hay favoritos...</Text>
        <Image css={{ opacity: 0.16 }} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' width={250} height={200} alt="not found favorites bulbasur photo cover"/>
      </Container>
  )
}
