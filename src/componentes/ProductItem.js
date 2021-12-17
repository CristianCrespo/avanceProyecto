import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";


const ProductItem = (props)=>{
    const {nombre, precio} = props.producto
    const {addProduct, cartItems, increase} = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    

        return(
            <div className="item">
                <div className="row ">
                    <div className="col-7">
                        <br></br>
                        <p>{nombre}</p>
                        <br></br>
                        <p><strong>${precio}</strong></p>                
                    </div>
                    <div className="col-5">
                        <form>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                                {isInCart(props.producto) && (
                                    <button onClick={(ev) => {ev.preventDefault();increase(props.producto)}} className="btn btn-outline-dark flex-shrink-0">
                                        <i class="bi bi-plus-circle"></i>
                                    </button>
                                )}

                                {!isInCart(props.producto) && (
                                    <button onClick={(ev) => {ev.preventDefault();addProduct(props.producto)} }   className="btn btn-outline-dark flex-shrink-0">
                                        Agregar
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
}
export default ProductItem;

// <button  type="submit" className="btn btn-outline-dark"  onClick={verDetalles}>Detalles</button>

/*
const verDetalles = (e) => {
            e.preventDefault();
            console.log('abre detalles')
        }
*/