"use client"

import { ReactHTML, useEffect, useState } from "react"
import { PokemonCard } from "../pokemon/components/pokemon-card"
import { Button } from "@/components/ui/button"

export default function Packs() {
  const [newPack, setNewPack] = useState<number[]>([])

  const handleShuffle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const randomNumbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 151) + 1
    )
    setNewPack(randomNumbers)
  }

  useEffect(() => {
    const randomNumbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 151) + 1
    )
    setNewPack(randomNumbers)
  }, [])
  

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <article className="flex flex-col items-center gap-2">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
            Shuffle 🔄
          </h1>
          <p className=" text-lg text-muted-foreground">
            Discover new pokemons
          </p>
          <Button onClick={handleShuffle}>Open Pack</Button>
        </div>
      </article>
      <div className="flex items-center justify-center gap-4">
          {newPack.map((idx: any) => (
              <PokemonCard key={idx} index={idx} />
          ))}
      </div>
    </section>
  )
}
