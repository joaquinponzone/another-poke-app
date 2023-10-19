import LoadingSpinner from "@/components/loading-spinner";
import PokemonSkeleton from "@/app/pokemon/components/pokemon-skeleton";
import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <article className="flex flex-col items-center gap-2">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-6xl">
          Pokèdex
        </h1>
        <p className=" text-lg text-muted-foreground">
          A simple Pokèmon app
        </p>
      </div>
    </article>
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-[400px] w-full items-center justify-center">
        <span className="font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-4xl">
          <LoadingSpinner/>
        </span>
      </div>
    </div>
  </section>
  )
}
