
interface FavsLayoutProps {
  children: React.ReactNode
}

export default function FavsLayout({ children }: FavsLayoutProps) {
  return (
        <div className="relative flex min-h-screen flex-col p-16">
            <div className="flex-1">
                {children}
            </div>
        </div>
  )
}
