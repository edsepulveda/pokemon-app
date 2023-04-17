import Image from 'next/image'
import { Navbar, Text } from '@nextui-org/react'

export const NavbarComponent = () => {
  return (
    <Navbar shouldHideOnScroll isBordered variant='floating'>
      <Navbar.Brand>
        <Image alt='Pokemon ditto image' height={35} width={35} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'/>
        <Text css={{ marginLeft: '$5' }} b hideIn='xs'>PokemonDB</Text>
      </Navbar.Brand>
    </Navbar>
  )
}


