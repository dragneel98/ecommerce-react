import './App.css'
import {products as initialProducts} from './components/mocks/products.json'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './components/hooks/useFilters'
import Scart from './components/Scart'
import { CartProvider } from './components/context/CartContext'


function App() {
  
  // const [product] = useState(initialProducts)

  

  const {filterProducts, product} = useFilters()
  const filteredProducts = filterProducts(product)

  return (
    <CartProvider>
    <h1 className='app-title'> Tienda React </h1>
    <Header></Header>
    <Scart></Scart>
    <Products product={filteredProducts}></Products>
    {/* <Footer></Footer> */}
    </CartProvider>
  )
}

export default App
