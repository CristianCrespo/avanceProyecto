import React, {useState,useEffect} from "react";
import ProductItem from "../componentes/ProductItem"
import ProductosForm from "./ProductosForm";
import PlaceService from '../services/PlaceServices';
import PlaceListTable from '../componentes/PlaceListTable';

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


        //const InitialTableState = [];
        //const [places, setPlaces] = useState(InitialTableState);
    
    

        
        return(
            <>
            <div className="col-12 ">
                <i class='bx bxs-cart' ></i>
                <h1 className=" text-center"> Store </h1>
                <p className=" text-center">this is the Store Page </p> 
                <hr></hr>
            </div>
            <PlaceListTable></PlaceListTable>
            </>
        );
}

export default GridProduct;