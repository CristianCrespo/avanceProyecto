import React from "react";

// <ListaItem/>
// <PropietariosForm onSubmit={this.handleSubmit}/>
const ProductItem = (props)=>{
const {nombre, precio} = props.producto
        const verDetalles = (e) => {
            e.preventDefault();
            console.log('abre detalles')
        }
        return(
            <div className="item">
                <div className="row border">
                    <div className="col-3">
                        <p>{nombre}</p>
                        <p><strong>${precio}</strong></p>                
                    </div>
                    <div className="col-3">
                        <form>
                            <br></br>
                            <button  type="submit" className="btn btn-dark" size="sm" onClick={verDetalles}>Detalles</button>
                        </form>
                    </div>
                </div>
            </div>
        );
}
        
export default ProductItem;