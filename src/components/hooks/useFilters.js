import { useContext } from "react"
import { FiltersContext } from "../context/filtersContext"


export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)
    
  
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
    return {filterProducts, filters, setFilters}
  }