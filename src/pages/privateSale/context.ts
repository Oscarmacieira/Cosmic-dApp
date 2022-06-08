import Moralis from "moralis/types"
import React from "react"

export interface Lootbox {
  imagePath: string
  imageOpenPath: string
  rank: string
  investment: number
  price: number
  color: string
  perks: string
  address?: string
}
export interface Context {
  lootboxItems: Lootbox[]
  selectedLootbox: Lootbox | null
  whitelist: Moralis.Object<Moralis.Attributes> | null
}

export const initialValue: Context = {
  selectedLootbox: null,
  whitelist: null,
  lootboxItems: [
    {
      imagePath: "https://media.discordapp.net/attachments/918938729014505522/945001836388184164/Rare.png?width=636&height=636",
      imageOpenPath: "svg/lootbox/rare-open.svg",
      rank: "Rare",
      investment: 2500,
      price: 0.175,
      color: "#C5FCFF",
      address: 'https://snowtrace.io/address/0x9299F70b086D4e3d98e9861FFb5485C9b9f0C9E6',
      // address: String(process.env.REACT_APP_RARE_ADDRESS),
      perks:
        "Lootbox, schematic, medium resources pack, profile template, merch",
    },
    {
      imagePath: "https://media.discordapp.net/attachments/918938729014505522/945001836799221810/epic.png?width=636&height=636",
      imageOpenPath: "svg/lootbox/epic-open.svg",
      rank: "Epic",
      investment: 5000,
      price: 0.15,
      color: "#E9BFFF",
      address: 'https://snowtrace.io/address/0xa1c7409c734eebc472d753461c05fb625f02a146',
      // address: String(process.env.REACT_APP_EPIC_ADDRESS),
      perks:
        "Lootbox, 2x schematics, medium resources pack, Upgrade card, profile template, 2x merch",
    },
    {
      imagePath: "https://media.discordapp.net/attachments/918938729014505522/945001837122158632/legendary.png?width=636&height=636",
      imageOpenPath: "svg/lootbox/legendary-open.svg",
      rank: "Legendary",
      investment: 10000,
      price: 0.125,
      color: "#FFE781",
      address: 'https://snowtrace.io/address/0x02dF546e85CbEAab1DF404FA77f0B3Ce5B585029',
      perks:
        "Lootbox, 2x schematics,large resources pack, 2x Upgrade card, profile template, merch pack",
    },
    {
      imagePath: "https://media.discordapp.net/attachments/918938729014505522/945001837461930024/cosmic.png?width=636&height=636",
      imageOpenPath:
        "https://gistcdn.githack.com/John-Villas/338c1e2bab9ab6d1f1c6cb8a7fc9bda7/raw/14972527e0495caaf10f497beab851761456e2e0/cosmic-open.svg",
      rank: "Cosmic",
      investment: 25000,
      price: 0.1,
      color: "#BF279B",
      address: 'https://snowtrace.io/address/0xaE1872496299f35aDbAb21CF5452736C19f09f71',
      perks: "All the above + 1 special DAO NFT",
    },
  ],
}

export const Context = React.createContext({
  state: initialValue,
  setState: (arg: any) => {},
})
