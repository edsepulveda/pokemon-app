"use client";

import { FC, useState } from "react"
import { Layout } from "@/components/layout"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { Grid, Card, Text, Button, Container, Row } from "@nextui-org/react"
import { pokeApi } from "../api"
import { Pokemon } from "@/interfaces/pokemon-full"
import { localFavorite } from "@/utils";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


interface Props{
  pokemon: Pokemon
}

const SinglePokemon: FC<Props> = ({ pokemon }) => {

  const [isFavorite, setIsFavorite] = useState(localFavorite.existInLocal(pokemon.id))
  const buttonText = isFavorite ? 'Borrar de Favoritos' : 'Guardar en Favoritos';


  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(pokemon.id)
    setIsFavorite(!isFavorite)
  }
  

  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '$10', display: 'flex', justifyContent: 'center' }}>
            <Card.Body>
              <Card.Image src={ pokemon.sprites.other?.dream_world.front_default || 'noimage.png' } alt={pokemon.name} width='100%' height={200}/>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ padding: '$8' }}>
            <Card.Header css={{ display: "flex", justifyContent: "space-between", flexDirection: 'column', '@lg': { flexDirection: 'row' } }}>
              <Text transform="capitalize" h1>{pokemon.name}</Text>
              <Button 
                color={`${isFavorite ? 'success' : 'secondary'}`} 
                ghost 
                rounded 
                onPress={onToggleFavorite}
                icon={isFavorite ? <AiFillHeart/> : <AiOutlineHeart />}
                >
                {buttonText}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} b>Sprites:</Text>
              <Container display='flex' justify="center" alignItems="center" direction="row" sm>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={150}/>
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={200} height={150}/>
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={200} height={150}/>
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={200} height={150}/>
              </Container>
            </Card.Body>
            <Card.Divider />
            <Card.Footer css={{ marginTop: '10px' }}>
              <Row justify="flex-end">
                <Link href='/' passHref>
                  <Text h4 color="error">Volver</Text>
                </Link>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const allPokemons = [...Array(151)].map((value, idx) => `${ idx + 1 }`)

  return {
    paths: allPokemons.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}


export default SinglePokemon