import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount, getTotalPrice } from './cart.utils';


export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    totalPrice: 0
});

const CartProvider = ({ children }) => {

    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems( prevCartItems => addItemToCart(prevCartItems, item));
    const removeItem = item => setCartItems( prevCartItems => removeItemFromCart(prevCartItems, item));
    const clearItemFromCart = item => setCartItems(prevCartItems => filterItemFromCart(prevCartItems, item));


    // updating cartItemsCount
    useEffect( () => {
        setCartItemsCount(getCartItemCount(cartItems));
        setTotalPrice(getTotalPrice(cartItems));
        console.log('SETTING CART TOTAL');
    }, [cartItems]);
    return(
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                cartItemsCount,
                clearItemFromCart,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;