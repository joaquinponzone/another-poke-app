"use client"

import Image from "next/image"
import Link from "next/link"
import { Label } from "@radix-ui/react-label"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Separator } from "../../../components/ui/separator"

export default async function PokemonDetails(props: { pokemon: any }) {
  const pokemonImg = props?.pokemon?.sprites?.other?.dream_world?.front_default
  const pokemonData = {
    name: props?.pokemon?.name,
    type: props?.pokemon?.types?.[0]?.type?.name,
    stats: {
      hp: props?.pokemon?.stats?.[0]?.base_stat,
      height: props?.pokemon?.height,
      weight: props?.pokemon?.weight,
      attack: props?.pokemon?.stats?.[1]?.base_stat,
      defense: props?.pokemon?.stats?.[2]?.base_stat,
      speed: props?.pokemon?.stats?.[5]?.base_stat,
    },
    specialStats: {
      specialAttack: props?.pokemon?.stats?.[3]?.base_stat,
      specialDefense: props?.pokemon?.stats?.[4]?.base_stat,
    },
    moves: {
      move1: props?.pokemon?.moves?.[0]?.move?.name,
      move2: props?.pokemon?.moves?.[1]?.move?.name,
      move3: props?.pokemon?.moves?.[2]?.move?.name,
      move4: props?.pokemon?.moves?.[3]?.move?.name,
    },
  }
  return (
    <article className="flex flex-col items-center gap-2 ">
      <Card className="w-[350px] lg:w-[700px]">
        <CardHeader>
          <CardTitle
            className={`
          from- bg-gradient-to-r text-center text-2xl
          font-bold text-white${pokemonData.type}-400 to-${pokemonData.type}-500
        `}
          >
            {pokemonData.name}
          </CardTitle>
          <CardDescription>
            type: <strong>{pokemonData.type}</strong>
          </CardDescription>
        </CardHeader>
        <AspectRatio
          // ratio={16 / 9}
          ratio={1}
          className="flex items-center justify-center bg-muted"
        >
          <Image
            src={pokemonImg}
            alt="Pokemon img"
            height={300}
            width={300}
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <CardContent>
          <article className="p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-xl">Stats</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex gap-2 p-4">
                  <div className="grid w-full items-center gap-4 lg:grid-cols-3">
                    {Object.entries(pokemonData.stats).map(([key, value]) => {
                      return (
                        <div className="flex flex-col" key={key}>
                          <Label className="mb-1">{key}</Label>
                          <Input
                            type="text"
                            name={key}
                            value={value}
                            className="w-full"
                          />
                        </div>)
                      })}
                    </div>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* <Separator className="my-4" /> */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-xl">Special stats</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex gap-2 p-4">
                  <div className="grid w-full items-center gap-4 lg:grid-cols-3">
                    {Object.entries(pokemonData.specialStats).map(([key, value]) => {
                      return (
                        <div className="flex flex-col" key={key}>
                          <Label className="mb-1">{key}</Label>
                          <Input
                            type="text"
                            name={key}
                            value={value}
                            className="w-full"
                          />
                        </div>)
                      })}
                    </div>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* <Separator className="my-4" /> */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-xl">Moves</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex gap-2 p-4">
                    {Object.entries(pokemonData.moves).map((move, i) => {
                      return (
                        <>
                          <span className="text-lg">{`${i !== 0 ? "/" : ""} ${move[1]}`}</span>
                        </>
                      )
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className="w-full">
            <Button size={"xl"} className="w-full" variant="ghost">
              Volver
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </article>
  )
}
