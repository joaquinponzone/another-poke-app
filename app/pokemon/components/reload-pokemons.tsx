'use client'
import { Button } from '@/components/ui/button'

export default function ReloadPokemons() {
  return (
    <Button 
        onClick={() => alert('reload')} 
        size={"xl"} 
        className="m-8 w-[300px]" 
        variant="ghost"
    >
        Reload...
    </Button>
  )
}
