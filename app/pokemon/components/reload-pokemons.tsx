'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ReloadPokemons() {
    const router = useRouter()

    const handleRefresh = () => {
        // router.refresh()
        window.location.reload()
    }
  return (
    <Button 
        onClick={handleRefresh} 
        size={"xl"} 
        className="m-8 w-[300px]" 
        variant="ghost"
    >
        Reload...
    </Button>
  )
}
