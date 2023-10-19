import { PokemonCard } from "@/app/pokemon/components/pokemon-card"
import PokemonSkeleton from "@/app/pokemon/components/pokemon-skeleton"
import { Suspense } from "react"
import ReloadPokemons from "./pokemon/components/reload-pokemons"

const fetchPokemons = async (page = 1) => {
  // await sleep(2000)
  const limit = 8 * page
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)

  const { results } = await res.json()
  return results
}

const getRandomPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  const { results } = await res.json()
  const randomPokemons = results.sort(() => Math.random() - Math.random()).slice(0, 10)
  return randomPokemons
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export default async function IndexPage() {
  // const pokemons = await fetchPokemons()
  const pokemons = await getRandomPokemons()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <article className="flex flex-col items-center gap-2">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
            Pokèdex
          </h1>
          <p className=" text-lg text-muted-foreground">
            Another Pokèmon app
          </p>
        </div>
      </article>
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pokemons.map((pokemon: any) => (
            <Suspense fallback={<PokemonSkeleton />}>
              <PokemonCard key={pokemon?.url} pokemon={pokemon} />
            </Suspense>
          ))}
        </div>
        <ReloadPokemons />
      </div>

    </section>
  )
}
