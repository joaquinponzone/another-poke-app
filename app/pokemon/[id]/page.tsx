import PokemonDetails from "@/app/pokemon/components/pokemon-details"
import { sleep } from "@/lib/utils"


const fecthPokemonByName = async (name?: string | null) => {
  // sleep(2000)
  if (!name) return Promise.resolve(null)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const pokemon = await res.json()
  return pokemon
}
export default async function PokemonDetail({
  params,
}: {
  params: { id: string }
}) {
  const pokemon = await fecthPokemonByName(params.id)

  return (
    <PokemonDetails pokemon={pokemon} />
  )
}
