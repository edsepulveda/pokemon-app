/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = (id: number) => {
  console.log('Se llamo toggle')
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
  if(favorites.includes(id)){
    favorites = favorites.filter((poke) => poke !== id)
  }else{
    favorites.push(id)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}


//Includes is an array function that returns TRUE or FALSE, so the response that the function is going to have is BOOLEAN
//But the ID that the funcition needs as argument needs to be an INTEGER.,
const existInLocal = (id: number): boolean => {
  
  if(typeof window === 'undefined') return false

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  return favorites.includes(id)
}


const Pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existInLocal,
  Pokemons
}