"use client"
import { Suspense, useEffect, useState } from "react"
import { PokemonCard } from "../pokemon/components/pokemon-card"
import { Button } from "@/components/ui/button"
import PokemonSkeleton from "../pokemon/components/pokemon-skeleton"

export default function ShufflePokemons() {
  const [newChunk, setNewChunk] = useState<number[]>([])

  const handleShuffle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const randomNumbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 151) + 1
    )
    setNewChunk(randomNumbers)
  }

  useEffect(() => {
    const randomNumbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 151) + 1
    )
    setNewChunk(randomNumbers)
  }, [])
  

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <article className="flex flex-col items-center gap-4">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
            Random Pokemons
          </h1>
          <p className=" text-xl text-muted-foreground">
            Discover new pokemons
          </p>
          <Button size={'xl'} onClick={handleShuffle}>Shuffle 🔄</Button>
        </div>
      </article>
      <div className="flex items-center justify-center gap-4">
          {newChunk.map((idx: any) => (
            <Suspense key={`pokemon-idx-${idx}`} fallback={<PokemonSkeleton />}>
              <PokemonCard key={idx} index={idx} />
            </Suspense>
          ))}
      </div>
    </section>
  )
}
