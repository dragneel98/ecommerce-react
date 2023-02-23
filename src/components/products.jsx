import React from 'react'
import "/src/style/products.css"
import {ShoppingCartAdd} from '/src/assets/icons'

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
                  <img src={product.image} alt={product.title} className="product-img"></img>
                </div>
                <p className='product-price'> ${product.price} </p>
                <p> {product.category} </p>
                <button> <ShoppingCartAdd></ShoppingCartAdd> </button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products