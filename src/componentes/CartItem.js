import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";

const CartItem = ({ product }) => {
    console.log("===============0000000000")
    console.log(product);
    const {nombre, precio} = product

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <div className="row no-gutters py-2 border"> 
            <div className="col-sm-4 p-2 mx-5">
                <h5>{nombre}</h5>
                <p className="mb-1">Precio: {precio}</p>
            </div>
            <div className="col-sm-2 text-center">
                <p className="mb-0">Cantidad: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right ">
                <button onClick={() => increase(product)}   className="btn btn-success btn-md mx-4 mr-2 mb-1">
                <i class="bi bi-plus-circle"></i>
                </button>

                {product.quantity > 1 && (
                    <button onClick={() => decrease(product)}   className="btn btn-danger btn-md mx-1 mb-1">
                        <i class="bi bi-dash-circle"></i>
                    </button>
                )}

                {product.quantity === 1 && (
                    <button onClick={() => removeProduct(product)}  className="btn btn-danger btn-md mx-1 mb-1">
                        <i class="bi bi-trash" ></i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartItem;