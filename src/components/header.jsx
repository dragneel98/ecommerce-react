import React from 'react'
import Filters from './filters'

function Header({changeFilters}) {
  
  return (
    <div className='header'>
        <Filters onChange={changeFilters}></Filters>
    </div>
  )
}

export default Header