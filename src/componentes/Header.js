import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import logo from "../images/28f1a972e13e4281b5273891ead173eb.jpg"
import { CartContext } from "../context/CartContex";

//import logo from "../componentes/imagenes/logo-cuadrado.jpg";
/*
<div className="col-2 py-5 text-rigth ">
                    <img src={logo}></img>
                </div>
*/

const Header = () => {
    const {itemCount} = useContext(CartContext);
        return(
            <div className="row" id="cabeza">
                <div className="col-2">
                    <img src={logo} className="d-flex justify-content-start avatar " />    
                </div>   
                <div className="col-8 py-4 text-lefth mt-5">
                    <div className="col-md-12 d-flex justify-content-center" id="link">
                        <Link to='/' ><strong><a>Store</a></strong></Link>
                        <Link to='/About'><strong><a>| About </a>  </strong></Link>
                        <Link to='/Cart'><strong><a>| Cart ({itemCount})</a></strong></Link>
                        <i className="bi bi-cart-fill"></i>
                    </div>
                <hr></hr> 
                </div>
            </div>
        )

};
export default Header;

