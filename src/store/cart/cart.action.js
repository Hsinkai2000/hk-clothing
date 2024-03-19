import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { useDispatch } from "react-redux";


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

export const setIsCartOpen = (newIsCartOpen) => {
    return createAction(CART_ACTION_TYPES.SET_CART_OPEN, newIsCartOpen);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};