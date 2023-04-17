import Head from "next/head"
import { FC } from "react"
import { NavbarComponent } from "../ui"

interface LayoutProps{
  children: React.ReactNode,
  title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta title="author" content="Eduardo Sepúlveda" />
        <meta name="description" content="Información sobre los diferentes pokemones"/>
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>

      <NavbarComponent />

      <main>
        { children }
      </main>

    </>
  )
}
