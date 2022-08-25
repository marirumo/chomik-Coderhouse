import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

//custom hook
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    //items en mi carrito
    const [cart, setCart] = useState([])
    

    // 1. addItem al carrito 
    const addItem = (item, qty) => {

        if(cart.some(elem => elem.id === item.id)){
            
            let index = cart.findIndex(el => el.id === item.id);
            let product = cart[index];
            product.qty = product.qty + qty;

            const newCart = [...cart];
            newCart.splice( index, 1, product );

            setCart([ ...newCart ]);

        }else{
            
            let product = {...item, qty};
            setCart([...cart, product ]);
        }
    }
  
    
    // 2. removeItems
    const removeItem = (product) => {
        const newCart = [...cart];
        let index = newCart.findIndex(elem => elem.product === product);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }


    
    //3.Limpiar carrito (todos los elementos)
    const clear = () => {
        setCart([])
    }

    //4. Revisar si el item está en el carrito
    const isInCart = (product) => {
        return cart && cart.some(elem => elem.item.id === product.id)
    }

    //5. total de productos en carrito
    const getTotalCart = () => {
        return cart.reduce((acc, item) => acc + item.qty, 0)
    }
   
    //6. total price
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.qty * item.price, 0);
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
            getTotalPrice,
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartProvider