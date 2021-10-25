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
                <div className="col-8">
                    {
                        productoInicial.map (p => (<ProductItem producto ={p}/> ))
                    }
                </div>
                <div className="col-3 border" id="agregarP">
                    <ProductosForm agregar={agregarFormulario}/>
                </div>
            </div>
            </>
        );
}

export default GridProduct;