import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = window.localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (producto) => {
        producto.id = cartItems.length > 0 ? cartItems.slice(-1)[0].id + 1 : 1;
        setCartItems(prevItems => [...prevItems, producto]);
    };

    const removeItems = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItems }}>
            {children}
        </CartContext.Provider>
    );
};
