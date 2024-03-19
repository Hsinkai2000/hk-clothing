// import { useState, createContext, useEffect, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     cartCount: 0,
//     removeItemFromCart: () => {},
//     deleteItemFromCart: () => {},
//     totalPrice: 0,
//     setTotalPrice: () => {},
// });

// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems: [],
//     cartCount: 0,
//     totalPrice: 0,
// };

// const CART_ACTION_TYPES = {
//     SET_CART_ITEMS: "SET_CART_ITEMS",
//     SET_CART_OPEN: "SET_CART_OPEN",
// };

// const cartReducer = (state, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return { ...state, ...payload };
//         case CART_ACTION_TYPES.SET_CART_OPEN:
//             return { ...state, isCartOpen: payload };
//         default:
//             throw new Error(`unhandled type of ${type} in cartReducer`);
//     }
// };

// const addCartItem = (cartItems, productToAdd) => {
//     const existingItem = cartItems.find((item) => item.id === productToAdd.id);

//     if (existingItem) {
//         return cartItems.map((cartItem) =>
//             cartItem.id === productToAdd.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 : cartItem
//         );
//     }
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, productToRemove) => {
//     const existingItem = cartItems.find(
//         (item) => item.id === productToRemove.id
//     );

//     if (existingItem) {
//         if (existingItem.quantity > 1) {
//             return cartItems.map((cartItem) =>
//                 cartItem.id === productToRemove.id
//                     ? { ...cartItem, quantity: cartItem.quantity - 1 }
//                     : cartItem
//             );
//         }
//         return cartItems.filter(
//             (cartItems) => cartItems.id !== productToRemove.id
//         );
//     }
// };

// const deleteCartItem = (cartItems, productToDelete) => {
//     return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
// };

// export const CartProvider = ({ children }) => {
//     const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
//         useReducer(cartReducer, INITIAL_STATE);

//     const updateCartItemsReducer = (newCartItems) => {
//         const newCartCount = newCartItems.reduce(
//             (acc, item) => acc + item.quantity,
//             0
//         );

//         const newCartTotal = newCartItems.reduce(
//             (total, cartItem) => total + cartItem.quantity * cartItem.price,
//             0
//         );

//         dispatch(
//             createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//                 cartItems: newCartItems,
//                 cartTotal: newCartTotal,
//                 cartCount: newCartCount,
//             })
//         );
//     };

//     const setIsCartOpen = (newIsCartOpen) => {
//         dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, newIsCartOpen));
//     };

//     const addItemToCart = (productToAdd) => {
//         const newCartItems = addCartItem(cartItems, productToAdd);
//         updateCartItemsReducer(newCartItems);
//     };

//     const removeItemFromCart = (productToRemove) => {
//         const newCartItems = removeCartItem(cartItems, productToRemove);

//         updateCartItemsReducer(newCartItems);
//     };
//     const deleteItemFromCart = (productToDelete) => {
//         const newCartItems = deleteCartItem(cartItems, productToDelete);

//         updateCartItemsReducer(newCartItems);
//     };

//     const value = {
//         cartTotal,
//         isCartOpen,
//         setIsCartOpen,
//         addItemToCart,
//         cartItems,
//         removeItemFromCart,
//         cartCount,
//         deleteItemFromCart,
//     };
//     return (
//         <CartContext.Provider value={value}>{children}</CartContext.Provider>
//     );
// };
// // useEffect(() => {
// //     const newCartCount = cartItems.reduce(
// //         (acc, item) => acc + item.quantity,
// //         0
// //     );
// //     setCartCount(newCartCount);
// // }, [cartItems]);

// // useEffect(() => {
// //     if (cartItems) {
// //         const newPrice = cartItems.reduce(
// //             (acc, item) => acc + item.quantity * item.price,
// //             0
// //         );
// //         setTotalPrice(newPrice);
// //     }
// // }, [cartItems]);
