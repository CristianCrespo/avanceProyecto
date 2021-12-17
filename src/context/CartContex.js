import React, {createContext, useReducer} from "react";
import {CartReducer} from "./CarReducer";

const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0.0,
    checkout: false
};

export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const increase = (payload) => {
        dispatch({ type: "INCREASE", payload});
    };
    const decrease = (payload) => {
        dispatch({ type: "DECREASE", payload});
    };
    const addProduct = (payload) => {
        dispatch({ type: "ADD_ITEM", payload });
    };
    const removeProduct = (payload) => {
        dispatch({ type: "REMOVE_ITEM", payload });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR"});
    };
    const handleCheckout = () => {
        dispatch({ type: "CHECKOUT"});
    };
    const contexValues = { 
        removeProduct,
        addProduct, 
        increase, 
        decrease, 
        clearCart, 
        handleCheckout, 
        ...state
    };
    return(
        <CartContext.Provider value = {contexValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;