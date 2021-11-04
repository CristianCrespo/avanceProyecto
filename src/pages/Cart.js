import React, { useContext } from "react";
import CartProducts from "../componentes/CartProducts";
import CartItem from "../componentes/CartItem";
import { CartContext } from "../context/CartContex";

const Cart = () => {
    return(
        <div className="col-12 border">
            <h1 className=" text-center"> Cart </h1>
            <p className=" text-center">this is the Cart Page </p> 
            <hr></hr>
            <div className="row">             
                <div className="col text-left">
                        <CartProducts/>
                </div>
            </div>
        </div>
    );
}

export default Cart;

