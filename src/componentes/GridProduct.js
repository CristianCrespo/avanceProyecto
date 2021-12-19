import React, {useState,useEffect} from "react";

import PlaceService from '../services/PlaceServices';
import PlaceListTable from '../componentes/PlaceListTable';
import AgregarCarrito from "./AgregarCarrito";
import EditarCarrito from "./EditarCarrito";

const GridProduct = () => {

        const productosLista = [
           /* {
                id:1,
                nombre:'buffalo - Striploin',
                precio:'39.11'
            },
            {
                id:2,
                nombre:'Bacardi Brezzer',
                precio:'257.92'
            }*/
        ]
        const [productoInicial, setProducto] = useState(productosLista);
        const esdatoInicialFormulario = {
            id: null,
            name: "",
            price: "",
            image: ""
        };

        const [carritoEditar, setCarritoEditar] = useState(esdatoInicialFormulario);
        const [modoEdicion, setModoEdicion] = useState(false);

        useEffect(()=>{
            const getAllPlaces = () =>{
                PlaceService.getAll().then(response => {
                    setProducto(response.data);
                }).catch(e =>{
                    console.log(e);
                })
            }
            getAllPlaces();
        },[])

        /*const agregarFormulario = (productoFromForm)=>{
            const idP = productoInicial.length + 1;
            const producto = {...productoFromForm, id:idP}
            setProducto([...productoInicial,producto]);
        }*/
        //const InitialTableState = [];
        //const [places, setPlaces] = useState(InitialTableState);
    
        const agregarCarrito = (carrito) => {
            PlaceService.create(carrito)
            .then(response => {
                const nuevoCarrito = {
                    id: response.data.id,
                    name: response.data.name,
                    price: response.data.price,
                    image: response.data.image,     
                };
                setProducto([...productosLista, nuevoCarrito]);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        };

        const editarCarrito = (carrito) => {
            setModoEdicion(true);
            setCarritoEditar({
                id: carrito.id,
                name: carrito.name,
                price: carrito.price,
                image: carrito.image,
            });
        };

        const eliminarCarrito = (id) => {
            PlaceService.remove(id)
            .then(response => {
                if(response.status === 204) {
                    const carritoSinEliminado = productoInicial.filter(
                        (domicilio) => domicilio.id !== id
                    );
                    setProducto(carritoSinEliminado);
                }
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        };

        const actualizarCarrito = (id, carritoActualizado) =>{
            setModoEdicion(false);
            PlaceService.update(id, carritoActualizado)
            .then(response => {
                const propietariosConElActualizado = productoInicial.map(
                    (carrito) =>
                    carrito.id === id ? carritoActualizado : carrito
                );
                setProducto(carritoActualizado);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
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
                <div className="col-md-8">
                    <PlaceListTable
                        carrito={productoInicial}
                        editar={editarCarrito}
                        eliminar={eliminarCarrito}
                    />
                </div>
                <div className="col-md-4">
                    {!modoEdicion ? (
                        <>
                            <h2>Agregar Producto</h2>
                            <AgregarCarrito agregar={agregarCarrito}
                            />
                        </>
                    ) : (
                        <>
                            <h2>Editar Producto</h2>
                            <EditarCarrito
                                domicilioAEditar={carritoEditar}
                                modoEdicion={setModoEdicion}
                                actualizar={actualizarCarrito}
                            />
                        </>
                    )}
                </div>
            </div>
            

            
            </>
        );
}

export default GridProduct;