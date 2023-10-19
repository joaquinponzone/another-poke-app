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
import { sleep } from "@/lib/utils";

const fecthPokemonByUrl = async (url: string) => {
    // await sleep(3000 + Math.floor(Math.random() * 10000) + 1000)
    const res = await fetch(url);
    const pokemon = await res.json();
    return pokemon;
}; 

export async function PokemonCard(props: { pokemon: any }) {
    const pokemon = await fecthPokemonByUrl(props.pokemon?.url);

  return (
        <Card className={`
        light:bg-white flex flex-col items-center justify-start gap-2 rounded-md p-4
        shadow-md hover:shadow-lg dark:bg-gray-900 lg:h-[400px] lg:w-64
        `}>
            <CardHeader>
                <CardTitle className="text-3xl">{pokemon?.name.toUpperCase()}</CardTitle>
                <CardDescription className="text-center font-light">{pokemon?.types?.[0]?.type?.name}</CardDescription>
            </CardHeader>
            <CardContent className="min-h-48 flex h-52 max-h-48">
                <Image 
                    src={pokemon?.sprites?.other?.dream_world?.front_default} 
                    alt={pokemon?.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                />
            </CardContent>
            <CardFooter className="flex w-full justify-between">
                <Link href={`/pokemon/${pokemon?.id}`} className="w-full">
                    <Button size={'lg'} className="w-full" variant="outline" >Details</Button>
                </Link>
                {/* <Button size={'lg'} className="w-full" variant="outline" >Details</Button> */}
            </CardFooter>
        </Card>
  );
}
