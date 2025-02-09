import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui"

interface Props {
  className?: string
}

const cats = [
  "Pizza",
  "Pasta",
  "Salad",
  "Dessert",
  "Drinks",
  "Sauce",
  "Cocktail",
  "Coffee",
]
const activeIndex = 0

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-60 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          href=""
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-300 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  )
}
