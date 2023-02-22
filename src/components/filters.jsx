import React, { useId, useState } from 'react'
import { useFilters } from './hooks/useFilters'
import "/src/style/filters.css"

function Filters() {

    const {filters, setFilters} = useFilters()
    const priceFIlterID = useId()
    const categoryFIlterID = useId()

    const handleChangeMinPrice = (event) => {
      
        setFilters(prevState => ({
          ...prevState,
          minPrice: event.target.value
        }))
      }
    
      const handleChangeCategory = (event) => {
      
        setFilters(prevState => ({
          ...prevState,
          category: event.target.value
        }))
      }

  return (
    <section className='filters'>
    <div className='filter filter-price'>
        <label htmlFor={priceFIlterID}>min price </label>
        <input type="range" id={priceFIlterID} 
               min= "0" max="1000" 
               onChange={handleChangeMinPrice} value={filters.minPrice}
        ></input>
        <span> {filters.minPrice} </span>
    </div>
    <div className='filter filter-category'>
        <label htmlFor={categoryFIlterID}> category </label>
        <select id={categoryFIlterID} onChange={handleChangeCategory}>
            <option value="all"> all </option>
            <option value="electronics"> electronics </option>
            <option value="men's clothing"> men's clothing </option>
        </select>
    </div>
    </section>
  )
}

export default Filters