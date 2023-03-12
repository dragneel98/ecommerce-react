import './App.css'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './components/hooks/useFilters'
import Scart from './components/Scart'
import { CartProvider } from './components/context/CartContext'
import Filters from './components/filters'
import LoginProvider from './components/context/loginContext'


function App() {
  
  // const [product] = useState(initialProducts)

 

  const {filterProducts, product} = useFilters()
  const filteredProducts = filterProducts(product)

  return (
    <LoginProvider>
    <CartProvider>
    <h1 className='app-title'> Tienda React </h1>
    <Header></Header>
    <Filters></Filters>
    <Scart></Scart>
    <Products product={filteredProducts}></Products>
    {/* <Footer></Footer> */}
    </CartProvider>
    </LoginProvider>
  )
}

export default App
