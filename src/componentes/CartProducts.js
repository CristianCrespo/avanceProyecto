import React, { useContext} from "react";
import { CartContext } from "../context/CartContex";
import CartItem from "./CartItem";

const CartProducts = () => {
    
    const { cartItems,itemCount,total } = useContext(CartContext);
    console.log("=======================");
    console.log(cartItems);
    return(
        <div className="products">
            <div className="row">
                <div className="col-md-9">
                    <div className="card card-body border-0">
                        {cartItems.length > 0 ?  cartItems.map((product) => (
                            <CartItem key = {product.id} product={product}/>
                        )):<span className="text-center">No se encontro Items</span>}
                    </div>
                </div>
                <div className="col-3 py-3">
                    <div className="card  mb-3 py-2 ">
                        <h5 className="card-title text-center">Total de productos</h5>
                        <p className="card-text text-center">{ itemCount }</p>
                        <span aria-hidden="true"></span>
                        <h5 className="card-title text-center">Total a pagar</h5>
                        <p className="card-text text-center">$ { total }</p>
                        <div className="card-footer">
                            <button data-dismiss="modal" type="button" className="btn btn-success" style={{width: '100%', marginBottom: 10}}>
                            Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
export default CartProducts;