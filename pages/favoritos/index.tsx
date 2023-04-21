import { FC, useState, useEffect } from 'react'
import { Layout } from "@/components/layout"
import { NoFavorites } from "@/components/ui/NoFavorites"
import { localFavorite } from "@/utils"
import { FavPokemon } from '@/components/pokemon'


const Favoritos: FC = () => {
  
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorite.Pokemons())
  }, [])
  
  return (
    <Layout>
      
      {
        favorites.length === 0 ? (<NoFavorites />) 
        : (
          <FavPokemon favorites={favorites}/>
        )
      }

    </Layout>
  )
}


export default Favoritos