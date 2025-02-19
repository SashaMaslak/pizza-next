import React from "react"
import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared"
import products from "../public/pizzas.json"

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="extrabold"></Title>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Bar */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Popular"
                items={products}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
