import { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/layout'
import { pokeApi } from './api'
import { PokemonList, SmallPokemon } from '@/interfaces'
import { PokemonCard } from '@/components/pokemon'


interface Props{
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Pokemon App - Inicio'>
      <PokemonCard pokemons={pokemons}/>
    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const {data} = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => ({
    ...poke, 
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ idx + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}


export default Home