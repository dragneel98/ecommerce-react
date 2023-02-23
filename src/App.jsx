import './App.css'
import {products as initialProducts} from './components/mocks/products.json'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './components/hooks/useFilters'


function App() {
  
  // const [product] = useState(initialProducts)

  

  const {filterProducts, product} = useFilters()
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
