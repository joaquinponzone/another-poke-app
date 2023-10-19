import React from "react"
import { Link } from "lucide-react"

import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"

export default function PokemonDetailsSkeleton() {
  return (
    <article className="flex flex-col items-center gap-2 ">
      <Card className="w-[350px] lg:w-[700px]">
        <div className="flex h-[400px] w-full flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-4 shadow-md dark:bg-gray-900">
          <div className="h-20 w-20 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-10 w-32 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
        <CardContent>
          <form className="p-4">
            <div className="grid w-full items-center gap-6 py-6">
                <div className="h-6 w-32 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-6 w-52 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-6 w-36 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button size={"xl"} className="w-full" variant="ghost">
            Volver
          </Button>
        </CardFooter>
      </Card>
    </article>
  )
}
