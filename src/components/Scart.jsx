import React, { useId } from 'react'
import "/src/style/Cart.css"
import {ShoppingCart, ShoppingCartRemove} from "/src/assets/icons"

function Scart() {
  const shoppingCartID = useId()
  
  return (
    <> 
      <label className='cart-button' htmlFor={shoppingCartID}>
        <ShoppingCart></ShoppingCart>
      </label>
      <input id={shoppingCartID} type="checkbox" hidden></input>
      <aside className='cart'>
        <ul>
          <li>
            <p>product</p>
            <footer>
              <small>quantity</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button> <ShoppingCartRemove></ShoppingCartRemove> </button>
      </aside>
    </>
  )
}

export default Scart