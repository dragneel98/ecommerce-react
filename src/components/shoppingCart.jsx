import React, { useId } from 'react'

function ShoppingCart() {
  const shoppingCartID = useId()
  
  return (
    <>
      <label  htmlFor={shoppingCartID}>
        <ShoppingCart></ShoppingCart>
      </label>
      
    </>
  )
}

export default ShoppingCart