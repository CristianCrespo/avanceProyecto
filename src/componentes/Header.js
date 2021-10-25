import React from "react";
import {Link} from 'react-router-dom';
//import logo from "../componentes/imagenes/logo-cuadrado.jpg";
/*
<div className="col-2 py-5 text-rigth ">
                    <img src={logo}></img>
                </div>
*/

class Header extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col py-4 text-lefth">
                    <div className="col-md-12 text-center" id="link">
                        <Link to='/' ><strong>Store</strong></Link>
                        <Link to='/About'><strong> | About  </strong></Link>
                        <Link to='/Cart'><strong>| Cart</strong></Link>
                        <i className="bi bi-cart-fill"></i>
                    </div>                   
                </div>
            </div>
        )
    }
}
export default Header;