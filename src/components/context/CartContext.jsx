import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // verifica si el producto ya esta en el carrito
        // item siendo los objetos actuales que se tienen en el carrito y product el nuevo producto a introducir
        const productCartIdex = cart.findIndex(item => item.id === product.id)

        //alternativa usando structuredClone
        // clone hace una copia profunda del estado cart
        if (productCartIdex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productCartIdex].quantity += 1
            return setCart(newCart)
        }

        // el producto no esta en el carrito
        // se accede al estado previo y de este se pasa product modificando solo la quantity
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id === product.id))
    }

    const clearCart = () => {setCart([])}

    return <CartContext.Provider value= {{cart, addToCart, clearCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
}