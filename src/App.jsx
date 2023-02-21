import { useEffect, useState } from 'react'
import './App.css'
import {products as initialProducts} from './components/mocks/products.json'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'

function useFilters() {

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
  return {filterProducts,setFilters}
}



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
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(product)
  console.log(filteredProducts);

  return (
    <>
    <Header changeFilters={setFilters}></Header>
    <Products product={filteredProducts}></Products>
    {/* <Footer filters={filteredProducts}></Footer> */}
    </>
  )
}

export default App
