import { Button } from "@/components/ui/button";
import PokemonSkeleton from "../pokemon/components/pokemon-skeleton";

export default function loading() {
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
          <Button disabled>Open Pack</Button>
        </div>
      </article>
      <div className="flex items-center justify-center gap-4">
        {/* <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> */}
          {[1,2,3].map((idx: any) => (
              <PokemonSkeleton key={idx}/>
          ))}
        {/* </div> */}
      </div>
    </section>
  )
}
