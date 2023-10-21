import PokemonList from "./pokemon/components/pokemon-list"

export default async function IndexPage() {
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
      <PokemonList />
    </section>
  )
}
