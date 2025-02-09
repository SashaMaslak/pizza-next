import React from "react"
import { cn } from "@/lib/utils"
import { Title } from "./title"
import { FilterCheckbox } from "./filter-checkbox"
import { Input } from "../ui"
import { RangeSlider } from "./range-slider"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/*  */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Ready for order" value="1" />
        <FilterCheckbox text="New Products" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="flex gap-3 mb-5">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={100} />
      </div>
      <CheckboxFiltersGroup
        title="Ingridients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Tomato", value: "1" },
          { text: "Cucumber", value: "2" },
          { text: "Mozzarella", value: "3" },
          { text: "Cheddar", value: "4" },
          { text: "Parmesan", value: "5" },
          { text: "Pepperoni", value: "6" },
        ]}
        items={[
          { text: "Tomato", value: "1" },
          { text: "Cucumber", value: "2" },
          { text: "Mozzarella", value: "3" },
          { text: "Cheddar", value: "4" },
          { text: "Parmesan", value: "5" },
          { text: "Pepperoni", value: "6" },
          { text: "Bacon", value: "7" },
          { text: "Chicken", value: "8" },
          { text: "Ham", value: "9" },
          { text: "Salami", value: "10" },
          { text: "Mushrooms", value: "11" },
          { text: "Olives", value: "12" },
          { text: "Onion", value: "13" },
          { text: "Garlic", value: "14" },
          { text: "Pineapple", value: "15" },
          { text: "Jalapeño", value: "16" },
          { text: "Bell Pepper", value: "17" },
          { text: "Corn", value: "18" },
          { text: "Spinach", value: "19" },
          { text: "Arugula", value: "20" },
          { text: "Feta Cheese", value: "21" },
          { text: "Blue Cheese", value: "22" },
          { text: "Anchovies", value: "23" },
          { text: "Tuna", value: "24" },
          { text: "Shrimp", value: "25" },
          { text: "Sausage", value: "26" },
          { text: "Egg", value: "27" },
          { text: "BBQ Sauce", value: "28" },
          { text: "Pesto Sauce", value: "29" },
          { text: "Truffle Oil", value: "30" },
        ]}
      />
    </div>
  )
}
