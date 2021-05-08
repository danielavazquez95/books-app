import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export const PersonsList = () => {

    const [persons, setPersons] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://where-is-my-books.herokuapp.com/api/persona')
        .then(resp => setPersons(resp.data.respuesta));
    }, []);

    const handlerClick = () => {
        history.push('/formulario-personas');
    };
    
    return (
        <div className="personsTable-container">
            <div className="persons-table">
                
                            
                <div className="card">
                    <div className="card-header">
                        <div className="row justify-content-between">
                            <div className="col-sm-6">
                                <h3 className="card-title">Personas</h3>
                            </div>
                            <div className="col-sm-6 btn-form-redirect">
                                <button onClick={handlerClick} className="btn btn-block btn-primary">Ingresar Nuevo</button>
                            </div>
                        </div> 
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="table-id-column">#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Alias</th>
                                    <th className="table-edit-column">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                persons.map(person => {
                                    return(
                                        <tr key={person.id} >
                                            <td>{person.id}</td>
                                            <td>{person.nombre}</td>
                                            <td>{person.apellido}</td>
                                            <td>{person.email}</td>
                                            <td>{person.alias}</td>
                                            <td><i className="far fa-edit"/></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                
                </div>


                           
            </div>
        </div>
    )
}
