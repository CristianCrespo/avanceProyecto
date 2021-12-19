import React, { useState, useEffect } from "react";

const EditarCarrito = (props) => {
    const [carrito, setCarrito] = useState(props.carritoAEditar);

    useEffect(() =>{
        setCarrito(props.carritoAEditar);
    },[props]);

    const gestionarCamposFomulario = (event) => {
        const {name, value} = event.target;
        setCarrito({
            ...carrito,
            [name]: value
        });
    };
    const accionBotonActualizar =(event) => {
        event.preventDefault();
        props.actualizar(carrito.id, carrito);
    };
    return (
        <form onSubmit={accionBotonActualizar}>
            <div className="form-group">
                <label>Name Edit</label>
                <input 
                id="name"
                className="form-control"
                type="text"
                name="name"
                value={carrito.name}
                onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Price Edit</label>
                <input
                    id="price"
                    className="form-control"
                    type="text"
                    name="price"
                    value={carrito.price}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Image Edit</label>
                <input
                    id="image"
                    className="form-control"
                    type="text"
                    name="image"
                    value={carrito.image}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            
            <div className="form-group text-center">
                <button type="submit" className="btn btn-success">
                    actualizar
                </button>
                <button 
                    type="submit"
                    className="btn btn-danger m-1"
                    onClick={(ev) => props.modoEdicion(false)}
                >
                    Cancelar                    
                </button>
            </div>
        </form>
    );
};

export default EditarCarrito;