import React, { useId, useState } from 'react'
import "/src/style/filters.css"

function Filters({onChange}) {


    const [minPrice, setMinPrice] = useState(0)

    const priceFIlterID = useId()
    const categoryFIlterID = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
          ...prevState,
          minPrice: event.target.value
        }))
      }
    
      const handleChangeCategory = (event) => {
        // ⬇️ ESTO HUELE MAL
        // estamos pasando la función de actualizar estado
        // nativa de React a un componente hijo
        onChange(prevState => ({
          ...prevState,
          category: event.target.value
        }))
      }

  return (
    <section className='filters'>
    <div className='filter filter-price'>
        <label htmlFor={priceFIlterID}>min price </label>
        <input type="range" id={priceFIlterID} min= "0" max="1000" 
               onChange={handleChangeMinPrice}
        ></input>
        <span> {minPrice} </span>
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