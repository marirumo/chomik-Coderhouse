import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

//custom hook
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]) //items en mi carrito
   

    // 1. addItem al carrito 
    const addItem = (product, qty) => {

    let cartProduct = { product, qty }
    let cartAux = []

    if (isInCart (product)) {
      cartProduct = cart.find(item => item.product === product)
      cartProduct.qty = cartProduct.qty + qty
      cartAux = [...cart]
    } else {
      cartAux = [cartProduct, ...cart]
    }
    setCart(cartAux)
  }
  console.log('carrito:', cart)
    

    // 2. removeItems
    const removeItem = (item) => {

        if (isInCart(item)) {
            const updateCart = cart.filter(elem => elem.item.id !== item.id) || []
            setCart(updateCart)
        }
    }

    //3.Limpiar carrito (todos los elementos)
    const clear = () => {
        setCart([])
    }

    //4. Revisar si el item está en el carrito
    const isInCart = (id) => {
        return cart && cart.some(elem => elem.id === id)
    }

    //5. total de productos en carrito
    const getTotalCart = () => {
        return cart.reduce((acc, item) => acc + item.qty, 0)
    }
   

    return (
        <CartContext.Provider value={{
            cart, 
            setCart, 
            addItem, 
            removeItem, 
            clear, 
            isInCart,
            getTotalCart,
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartProvider