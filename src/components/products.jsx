import React from 'react'
import "/src/style/products.css"
import {ShoppingCartAdd} from '/src/assets/icons'
import { useCart } from './hooks/useCart'

function Products({product}) {

  const {addToCart} = useCart()
  
  return (
    <div>
      <div className='product-list-container'> 
        <ul className="product-list">
          {product.map(product => (
            <li key={product.id} className="card"> 
                <div className='product-header'>
                <h2 className='product-title'> {product.title} </h2> </div>
                <div className='img-container'>
                  <img src={product.image} alt={product.title} className="product-img"></img>
                </div>
                <p> {product.category} </p>
                <div className='product-price'> 
                  <p>  ${product.price} </p>
                  <button className='cart-button-add' onClick={()=> addToCart(product)}> <ShoppingCartAdd></ShoppingCartAdd> </button> 
                </div>
                
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products