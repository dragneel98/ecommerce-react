import React, { useContext, useEffect, useState } from 'react'
import { shoppingCartAdd } from '../assets/icons'
import "/src/style/products.css"

function Products({product}) {
  
  return (
    <div>
      <div className='product-list-container'> 
        <ul className="product-list">
          {product.map(product => (
            <li key={product.id} className="card"> 
                <div className='product-header'>
                <h2 className='product-title'> {product.title} </h2> </div>
                <div className='img-container'>
                  {/* <img src={product.thumbnail} alt="product img" className='product-img'></img> */}
                  <img src={product.image} alt={product.title} className="product-img"></img>
                </div>
                <p className='product-price'> ${product.price} </p>
                <p> {product.category} </p>
                <button> {shoppingCartAdd} </button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products