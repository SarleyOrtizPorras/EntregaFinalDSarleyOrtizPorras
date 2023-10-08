import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);
    console.log('carrito: ', Cart);

     

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
        setCart(Cart.map(product => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        }));
       } else {
        setCart([...Cart, { ...item, quantity }]);
       }
    }

    const totalPrice = () => {
        return Cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => Cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    const clearCart = () => setCart([]);
    const isInCart = (id) => Cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(Cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            Cart
        }}>
            {children}
        </CartContext.Provider>
    )

};

export default CartProvider;

