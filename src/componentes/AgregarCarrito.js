import React, { useState } from "react";

const AgregarCarrito = (props) => {
    const estadoInicialForm = {
        id: null,
        name: "",
        price: "",
        image:""
    }
    const [estadoFormCarrito, setEstadoFormCarrito] = useState(estadoInicialForm);
    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormCarrito({
            ...estadoFormCarrito,[name]: value
        });
    };
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault()
                    if(
                        !estadoFormCarrito.name ||
                        !estadoFormCarrito.price ||
                        !estadoFormCarrito.image 
                    )
                    return;
                    props.agregar(estadoFormCarrito);
                    setEstadoFormCarrito(estadoInicialForm);
                }}
        >
            <div className="from-group">
                <label>Name</label>
                <input
                    id="name"
                    className="form-control"
                    type="text"
                    name="name"
                    value={estadoFormCarrito.name}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Price</label>
                <input
                    id="price"
                    className="form-control"
                    type="text"
                    name="price"
                    value={estadoFormCarrito.price}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>image</label>
                <input
                    id="image"
                    className="form-control"
                    type="text"
                    name="image"
                    value={estadoFormCarrito.image}
                    onChange={gestionCamposForm}
                />
            </div>
            
           
            <br></br>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </div>
        </form>
    );
};
export default AgregarCarrito;