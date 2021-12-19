import React, {useState, useEffect, useContext} from "react";
import Table from "react-bootstrap/Table";
import PlaceService from '../services/PlaceServices';
import { CartContext } from "../context/CartContex";

const PlaceListTable = (props) => {
    const InitialTableState = [];
    const [places, setPlaces] = useState(InitialTableState);

    const {addProduct, cartItems, increase} = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    useEffect(()=>{
        const getAllPlaces = () =>{
            PlaceService.getAll().then(response => {
                setPlaces(response.data);
            }).catch(e =>{
                console.log(e);
            })
        }
        getAllPlaces();
    },[])
    return (<>
        <h2>Listado de Productos</h2>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {places.length > 0 ?(
                        places.map((place) => (
                            <tr key = {place}>
                                <td>{place.id}</td>
                                <td>{place.name}</td>
                                <td>{place.price}</td>
                                <td><img src={place.image}></img></td>
                                <td>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm m-1"
                                    onClick={(ev) => props.editar(place)}
                                >
                                    Editar
                                </button>
                                
                                
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm m-1"
                                    onClick={(ev) => props.eliminar(place.id)}
                                >
                                    Cerrar
                                </button>
                                <div className="col-5">
                                    <form>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <div>
                                            {isInCart(props.producto) && (
                                                <button onClick={(ev) => {ev.preventDefault();increase(props.producto)}} className="btn btn-outline-dark flex-shrink-0">
                                                    <i class="bi bi-plus-circle"></i>
                                                </button>
                                            )}

                                            {!isInCart(props.producto) && (
                                                <button onClick={(ev) => {ev.preventDefault();addProduct(props.producto)} }   className="btn btn-outline-dark flex-shrink-0">
                                                    Agregar
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                                </td>
                            </tr>
                        ))
                ):(<tr>
                        <td colSpan={4}> No se encontraron productos </td></tr>)
                }
            </tbody>
        </Table>
    </>);
}

export default PlaceListTable;