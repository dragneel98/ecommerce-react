import { useContext, useEffect, useState } from 'react'
import './App.css'
import {products as initialProducts} from './components/mocks/products.json'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './components/hooks/useFilters'


function App() {
  
  // const [product] = useState(initialProducts)

  const [product, setProduct] = useState([])

  useEffect(() => {
    productsRequest()
  }, [])
  
  async function productsRequest () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProduct(data)
  }

  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(product)

  return (
    <>
    <Header></Header>
    <Products product={filteredProducts}></Products>
    {/* <Footer filters={filteredProducts}></Footer> */}
    </>
  )
}

export default App
