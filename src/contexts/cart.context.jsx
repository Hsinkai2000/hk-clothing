import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    totalPrice: 0,
    setTotalPrice: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((item) => item.id === productToAdd.id);

    if (existingItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingItem = cartItems.find(
        (item) => item.id === productToRemove.id
    );

    if (existingItem) {
        if (existingItem.quantity > 1) {
            return cartItems.map((cartItem) =>
                cartItem.id === productToRemove.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        }
        return cartItems.filter(
            (cartItems) => cartItems.id !== productToRemove.id
        );
    }
};

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (acc, item) => acc + item.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        if (cartItems) {
            const newPrice = cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
            );
            setTotalPrice(newPrice);
        }
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };
    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    };

    const value = {
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        removeItemFromCart,
        cartCount,
        deleteItemFromCart,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
