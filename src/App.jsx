import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Products from './components/products'

function App() {
  
  const [product, setProduct] = useState([])

  useEffect(() => {
    productsRequest()
  }, [])
  
  async function productsRequest () {
    // const response = await fetch('https://fakestoreapi.com/products')
    const response = await fetch("")
    const data = await response.json()
    setProduct(data)
  }

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "0"
  })

  function filterProducts(product) {
    return product.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(product)

  return (
    <>
    <Header></Header>
    <Products product={product}></Products>
    </>
  )
}

export default App
