"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox"
import { Input } from "../ui"

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
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
  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 overflow-auto pr-2 srollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={checked => console.log(checked)}
          />
        ))}
      </div>
    </div>
  )
}
