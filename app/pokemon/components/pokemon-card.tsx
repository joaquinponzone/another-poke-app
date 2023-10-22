import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./favorite-button";

const fecthPokemonByUrl = async (url: string) => {
    const res = await fetch(url);
    const pokemon = await res.json();
    return pokemon;
}; 

export async function PokemonCard({ index }: { index: string}) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${index}`
    const pokemon = await fecthPokemonByUrl(pokemonURL);

  return (
        <Card className={`
        light:bg-white flex flex-col items-center justify-start gap-2 rounded-md p-4
        shadow-md hover:shadow-lg dark:bg-gray-900 lg:h-[400px] lg:w-72
        `}>
            <CardHeader>
                <CardTitle className="text-3xl">{pokemon?.name.toUpperCase()}</CardTitle>
                <CardDescription className="text-center font-light">{pokemon?.types?.[0]?.type?.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex h-48">
                <span className="h-48">
                <Image 
                    src={pokemon?.sprites?.other?.dream_world?.front_default} 
                    alt={pokemon?.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-center"
                />
                </span>
            </CardContent>
            <CardFooter className="flex w-full justify-between gap-4">
                <Link href={`/pokemon/${pokemon?.id}`} className="w-1/2">
                    <Button size={'lg'} className="w-full" variant="outline" >Details</Button>
                </Link>
                <FavoriteButton pokemon={pokemon} />
            </CardFooter>
        </Card>
  );
}
