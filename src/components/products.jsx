import React from 'react'
import "/src/style/products.css"
import {ShoppingCartAdd} from '/src/assets/icons'
import { useCart } from './hooks/useCart'
import { ShoppingCartRemove } from '../assets/icons'

function Products({product: products}) {

  const {addToCart, cart, removeFromCart} = useCart()

  function checkProductCart(product) {
    return cart.some(item => item.id === product.id)
  }
  
  return (
    <div>
      <div className='product-list-container'> 
        <ul className="product-list">
          {products.map(product => {
            
            const isProductInCart = checkProductCart(product)
          return(
            <li key={product.id} className="card"> 
                <div className='product-header'>
                <h2 className='product-title'> {product.title} </h2> </div>
                <div className='img-container'>
                  <img src={product.image} alt={product.title} className="product-img"></img>
                </div>
                <p> {product.category} </p>
                <div className='product-price'> 
                  <p>  ${product.price} </p>
                  <button className='cart-button-add' style={{backgroundColor: isProductInCart ? "red" : "#09f"}} 
                   onClick={()=> {isProductInCart ? removeFromCart(product) : addToCart(product)}}>
                   {isProductInCart ? <ShoppingCartRemove/> : <ShoppingCartAdd/> } 
                  </button> 
                </div>
            </li>
          )})}
        </ul>
      </div>
    </div>
  )
}

export default Products