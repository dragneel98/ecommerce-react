import './App.css'
import Header from './components/header'
import Products from './components/products'
import { Footer } from './components/Footer'
import { useFilters } from './components/hooks/useFilters'
import Scart from './components/Scart'
import { CartProvider } from './components/context/CartContext'
import Filters from './components/filters'
import LoginProvider from './components/context/loginContext'
import LoginForm from './components/loginForm'
import Modals from './components/modals'


function App() {
  
  // const [product] = useState(initialProducts)

 

  const {filterProducts, product} = useFilters()
  const filteredProducts = filterProducts(product)

  return (
    <LoginProvider>
    <CartProvider>

    <Header></Header>
    <Filters></Filters>
    <Scart></Scart>
    <Products product={filteredProducts}></Products>
    
    </CartProvider>
    </LoginProvider>
  )
}

export default App
