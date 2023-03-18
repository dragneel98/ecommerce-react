import React, { useId, useState } from 'react'
import "/src/style/Cart.css"
import {ShoppingCart, ShoppingCartRemove} from "/src/assets/icons"
import { useCart } from './hooks/useCart'
import useLogin from './hooks/useLogin'
import useModals from './hooks/useModals'
import LoginForm from './loginForm'

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
              <strong> {price * quantity} </strong>
              <footer>
                <small>quantity: {quantity} </small>
                <button onClick={addToCart}>+</button>
              </footer>
              
        </li>
  )
}

function Scart() { 
  const {auth} = useLogin()
  const shoppingCartID = useId()
  const {cart, clearCart, addToCart} = useCart() 
  const [logInModalOpen, loginOpenModal, loginCloseModal] = useModals(false)
  let totalCost = 0

  return (
    <> 
      <label className='cart-button' htmlFor={shoppingCartID}>
        <ShoppingCart></ShoppingCart>
      </label>
      {auth 
      ? <input id={shoppingCartID} type="checkbox" hidden></input>
      : <button id={shoppingCartID} hidden onClick={loginOpenModal}></button>}
      <LoginForm isOpen={logInModalOpen} closeModal={loginCloseModal}></LoginForm>
      <aside className='cart'>
        <ul>
          {cart.map(product => ( 
            <CartItem
              key={product.id}
              addToCart= {()=> addToCart(product) }
              {...product}
              {...totalCost += (product.price*product.quantity)}
            />  
          ))}
        </ul>
        <footer>
        <p> {`total: ${totalCost.toFixed(2)}`} </p>
        <button onClick={clearCart}> <ShoppingCartRemove></ShoppingCartRemove> </button>
        </footer>
      </aside>
    </>
  )
}

export default Scart