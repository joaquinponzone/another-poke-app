import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export default function PokemonSkeleton() {
  return (
    <>
      <Card className={`
        flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-4
        shadow-md hover:shadow-lg dark:bg-gray-900 lg:h-[400px] lg:w-72
        `}>
            <CardHeader>
                <CardTitle>
                  <div className="h-6 w-40 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </CardTitle>
                <CardDescription>
                <div className="flex flex-col items-center justify-center gap-2 rounded-md">
                  <div className="h-3 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div >
                </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="min-h-48 flex h-52 max-h-48">
              <div className="flex h-[240px] w-[200px] flex-col items-center justify-center gap-2 rounded-md ">
                <div className="h-20 w-20 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-10 w-32 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Details</Button>
            </CardFooter>
        </Card>
    </>
  )
}
