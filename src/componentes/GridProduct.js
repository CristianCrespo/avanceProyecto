import React, {useState} from "react";
import ProductItem from "../componentes/ProductItem"
import ProductosForm from "./ProductosForm";

const GridProduct = () => {

        const productosLista = [
            {
                id:1,
                nombre:'buffalo - Striploin',
                precio:'39.11'
            },
            {
                id:2,
                nombre:'Bacardi Brezzer',
                precio:'257.92'
            }
        ]

        const [productoInicial, setProducto] = useState(productosLista);

        const agregarFormulario = (productoFromForm)=>{
            const idP = productoInicial.length + 1;
            const producto = {...productoFromForm, id:idP}
            setProducto([...productoInicial,producto]);
        }
        return(
            <>
            <div className="col-12 ">
                <i class='bx bxs-cart' ></i>
                <h1 className=" text-center"> Store </h1>
                <p className=" text-center">this is the Store Page </p> 
                <hr></hr>
            </div>

            <div className="row">
                <div className="col-md-7 col-12" id="product">
                    <div className="row ">
                        {
                            productoInicial.map (p => (
                            <div className="col-4 border" id="item">
                                <div className="btn-group mt-2" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-outline-warning"><i className="bi bi-pencil"></i></button>
                                    <button type="button" className="btn btn-outline-danger"><i className="bi bi-x-square"></i></button>
                                </div>
                                
                                <ProductItem producto ={p}/>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 border" id="agregarP">
                    <h2 className="text-center">Nuevo Producto</h2>
                    <ProductosForm agregar={agregarFormulario}/>
                </div>
            </div>
            </>
        );
}

export default GridProduct;