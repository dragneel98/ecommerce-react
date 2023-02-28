export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || []

//actualizar el local storage antes de un return
export const updateLocalStorage = state => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

export const cartReducer = (state, action) => {

    const { type : actionType, payload : actionPayload } = action

    switch (actionType) {
        case "ADD_TO_CART":{
           const {id} = actionPayload
           // verifica si el producto ya esta en el carrito
           // item siendo los objetos actuales que se tienen en el carrito y product el nuevo producto a introducir
           const productCartIdex = state.findIndex(item => item.id === state.id)

           //alternativa usando structuredClone
           // clone hace una copia profunda del estado cart
           if (productCartIdex >= 0) {
               const newState = structuredClone(state)
               updateLocalStorage(newState)

                return newState
           }

           // el producto no esta en el carrito
           // se accede al estado previo y de este se pasa product modificando solo la quantity
           const newState = [
               ...state,
               {
                   ...actionPayload,//product
                   quantity: 1
               }
           ]
           updateLocalStorage(newState)
           
           return newState
        }

        case "REMOVE_FROM_CART" : {
            const {id} = actionPayload
            const newState = state.filter(item => item.id != id)
            updateLocalStorage(newState)

            return newState
        }   
        
        case "CLEAR_CART" : {
             const newState= updateLocalStorage([])
             return newState
        }
    }

    return state
}