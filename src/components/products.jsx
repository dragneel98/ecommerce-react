import React, { useContext, useEffect, useState } from 'react'
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
                  <img src={product.image} alt="product img" className='product-img'></img>
                </div>
                <p className='product-price'> ${product.price} </p>
                <p> {product.category} </p>
                <button>carrito</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products