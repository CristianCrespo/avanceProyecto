import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import PlaceService from '../services/PlaceServices';

const PlaceListTable = () => {
    const InitialTableState = [];
    const [places, setPlaces] = useState(InitialTableState);

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
                        places.map((place, index) => (
                            <tr key = {index}>
                                <td>{place.id}</td>
                                <td>{place.name}</td>
                                <td>{place.price}</td>
                                <td><img src={place.image}></img></td>
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