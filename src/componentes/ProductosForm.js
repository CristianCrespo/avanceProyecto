import React, { useState } from "react";

export default function ProductosForm(props){
    const formInicial = {
        nombre: '',
        precio : ''
    };

    const [estadoForm, setFormulario] = useState(formInicial);

    const formAgg = ev => {
        const {name, value} = ev.target;
        setFormulario({...estadoForm,[name]:value});
    }
    const onSubmitForm = event => {
        event.preventDefault();
        props.agregar(estadoForm);
        setFormulario(formInicial);
    }
    return(
        <form onSubmit={onSubmitForm}>
            <div className="mb-2">
                <label htmlFor="nameProduct" className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" id="nameProduct" value={estadoForm.nombre} onChange={formAgg} />
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="text" name="precio" className="form-control" id="precio" value={estadoForm.precio} onChange={formAgg}/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">agregar</button>
            </div>
        </form> 
    );
}

/*function ProductosForm() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    render(){
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                agregar producto
                </Button>
        
                <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="mb-3">
                        <label htmlFor="nameProduct" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nameProduct" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" id="precio" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Aceptar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        );
    }
}
  

  export default ProductosForm;*/
  