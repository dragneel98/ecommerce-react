import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
    const cart = useContext(CartContext)

    if (cart===undefined) {
        throw new Error ("el contexto se esta intentando utilizar fuera del alcanze de su provider")
    }
    return cart
}