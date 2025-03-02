import React from "react"
import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared"
import pizzas from "../public/pizzas.json"
import breakfasts from "../public/breakfasts.json"

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="extrabold"></Title>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Bar */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Pizzas" items={pizzas} categoryId={1} />
            </div>
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Breakfasts"
                items={breakfasts}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
