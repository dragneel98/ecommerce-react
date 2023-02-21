import { createContext, useEffect, useState } from "react";

const ProductContext = createContext()


const ProductProvider = ({children}) => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    productsRequest()
  }, [])
  
  async function productsRequest () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProduct(data)
  }

  const dataContext = {product}

    return (
        <ProductContext.Provider value={dataContext}> {children} </ProductContext.Provider>
    )
}
export {ProductProvider}
export default ProductContext