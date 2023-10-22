
interface ShuffleLayoutProps {
  children: React.ReactNode
}

export default function ShuffleLayout({ children }: ShuffleLayoutProps) {
  return (
    <>
        <div className="relative flex min-h-screen flex-col p-16">
            <div className="flex-1">
                {children}
            </div>
        </div>
    </>
  )
}
