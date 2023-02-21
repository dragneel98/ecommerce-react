import React from 'react'
import Filters from './filters'

function Header({changeFilters}) {

  return (
    <div className='header'>
        <Filters changeFilters={changeFilters}></Filters>
    </div>
  )
}

export default Header