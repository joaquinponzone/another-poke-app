export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Poke App",
  description:
    "Pokedex app built with Next.js, Tailwind CSS, and PokeAPI.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shuffle",
      href: "/shuffle",
    },
    {
      title: "Favs",
      href: "/favs",
    },
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/joaquinponzone",
    docs: "https://ui.shadcn.com",
  },
}
