import { useContext, useEffect, useState } from "react"
import { FiltersContext } from "../context/filtersContext"


export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)
    const [product, setProduct] = useState([])

  useEffect(() => {
    productsRequest()
  }, [])
  
  async function productsRequest () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProduct(data)
  }
  
    function filterProducts(product) {
      return product.filter(product => {
        return(
          product.price >= filters.minPrice &&
          (
            filters.category === "all" ||
            product.category === filters.category
          )
        )
      })
    }
    return {filterProducts, filters, setFilters, product}
  }