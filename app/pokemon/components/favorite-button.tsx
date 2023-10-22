"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function FavoriteButton({pokemon}: {pokemon: any}) {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const router = useRouter()
    const handleToggleFavorite = async () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const isFavorite = favorites.includes(pokemon.id);
        if (isFavorite) {
            const newFavorites = favorites.filter((id: string) => id !== pokemon.id);
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        } else {
            favorites.push(pokemon.id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        setIsFavorite(!isFavorite);
        router.refresh();
    }

    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(pokemon.id));
    }, [pokemon.id])
    

  return (
    <Button size={"lg"} className="w-1/2" variant="outline" onClick={handleToggleFavorite}>
      {isFavorite ? <Icons.starFull /> : <Icons.star />}
    </Button>
  )
}
