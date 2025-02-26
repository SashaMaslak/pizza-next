"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox"
import { Input } from "../ui"

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  defaultValue,
  className,
  onChange,
}) => {
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = showAll
    ? items.filter(i =>
        i.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit)

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 overflow-auto pr-2 srollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={ids => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  )
}
