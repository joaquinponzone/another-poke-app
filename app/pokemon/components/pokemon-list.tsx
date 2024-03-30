"use client"

import { Suspense, useState } from "react"

import { Button } from "@/components/ui/button"

import { PokemonCard } from "./pokemon-card"
import PokemonSkeleton from "./pokemon-skeleton"

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8])

  const addNextEightSteps = (arr: number[]) => {
    const lastNumber = arr[arr.length - 1]
    const nextNumbers = Array.from(
      { length: 8 },
      (_, index) => lastNumber + index + 1
    )
    return arr.concat(nextNumbers)
  }
  const loadMore = () => {
    const newPokemons = addNextEightSteps(pokemons)
    setPokemons(newPokemons)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {pokemons?.map((idx: any) => (
          <Suspense fallback={<PokemonSkeleton />}>
            <PokemonCard key={idx} index={idx} />
          </Suspense>
        ))}
      </div>
      <Button
        onClick={loadMore}
        size={"xl"}
        className="m-8 w-[300px]"
        variant="ghost"
      >
        Load more...
      </Button>
    </div>
  )
}
