import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider =({children})=>{
    const [cartItems,setCartItems]=useState([])
    const value = {cartItems,setCartItems}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContext;