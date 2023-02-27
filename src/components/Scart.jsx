import React, { useId } from 'react'
import "/src/style/Cart.css"
import {ShoppingCart, ShoppingCartRemove} from "/src/assets/icons"
import { useCart } from './hooks/useCart'

function CartItem({image, price, title, quantity, addToCart}) {

  function titleTrim(title){
    const titleArray =  title.split(" ")
    const titleTrim = titleArray.slice(0,3)
    const result = titleTrim.join(" ")
    return result
  }

  return(
        <li> 
              <h2 className='cart-title'>
               {titleTrim(title)} 
              </h2> 
              <div>
                <img src={image} alt={title}></img>
              </div>
              <strong> {price} </strong>
              <footer>
                <small>quantity: {quantity} </small>
                <button onClick={addToCart}>+</button>
              </footer>
              
        </li>
  )
}

function Scart() {
  const shoppingCartID = useId()
  const {cart, clearCart, addToCart} = useCart()
  
  return (
    <> 
      <label className='cart-button' htmlFor={shoppingCartID}>
        <ShoppingCart></ShoppingCart>
      </label>
      <input id={shoppingCartID} type="checkbox" hidden></input>
      <aside className='cart'>
        <ul>
          {cart.map(product => {
            return(
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
            )
            
          })}
      
        </ul>
        <button onClick={clearCart}> <ShoppingCartRemove></ShoppingCartRemove> </button>
      </aside>
    </>
  )
}

export default Scart