"use client"

import { Suspense, useEffect, useState } from "react"
import { PokemonCard } from "../pokemon/components/pokemon-card"
import PokemonSkeleton from "../pokemon/components/pokemon-skeleton"

export default function FavoritesPokemons() {
  const [favs, setFavs] = useState<any[] | []>([])
  
  useEffect(() => {
    const localStorage = window && window?.localStorage?.getItem("favorites")
    if (localStorage) {
      setFavs(JSON.parse(localStorage))
    }
  }, [])

  if (favs.length === 0) {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <article className="flex flex-col items-center gap-4">
            <div className="flex max-w-[980px] flex-col items-center gap-4">
                <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
                  {`You don't have any favorite pokemon yet`}
                </h1>
                <p className=" text-xl text-muted-foreground">
                  Go to the <a href="/shuffle">shuffle pokemons page</a> and add some!
                </p>
            </div>
            </article>
        </section>
    )
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <article className="flex flex-col items-center gap-4">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
            Favorite Pokemons
          </h1>
          <p className=" text-xl text-muted-foreground">
            Your personal Pokedex
          </p>
        </div>
      </article>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favs?.map((idx: any) => (
          <Suspense key={idx} fallback={<PokemonSkeleton />}>
            <PokemonCard key={idx} index={idx}/>
          </Suspense>
        ))}
      </div>
    </section>
  )
}
