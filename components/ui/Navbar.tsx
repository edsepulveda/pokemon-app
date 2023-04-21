import Image from 'next/image'
import { Navbar, Spacer, Text } from '@nextui-org/react'
import NextLink from 'next/link'

export const NavbarComponent = () => {
  return (
    <Navbar shouldHideOnScroll isBordered variant='floating'>
      <Navbar.Brand>
        <Image alt='Pokemon ditto image' height={35} width={35} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'/>
        <NextLink href='/'>
          <Text css={{ marginLeft: '$5' }} b hideIn='xs'>PokemonDB</Text>
        </NextLink>
      </Navbar.Brand>
      <Spacer/>
      <NextLink href='/favoritos' passHref>
        <Text color='error'>Favoritos</Text>
      </NextLink>
    </Navbar>
  )
}


