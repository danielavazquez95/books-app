import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export const PersonsList = () => {

    const [persons, setPersons] = useState([]);
    const history = useHistory();

    const [error, setError] = React.useState('');

    const traerPersonas = async() => {
        try {
            axios.get('https://where-is-my-books.herokuapp.com/api/persona')
            .then(resp => setPersons(resp.data.respuesta));
            setError('');
        } catch(e) {
            if (e.message=='Network error') {
                setError('No me pude conectar con el servidor');
            } else {
                setError('Otro mensaje que venga del server');
            }
        }
    }

    const handlerClick = () => {
        history.push('/formulario-personas');
    };

    React.useEffect(() => {
        traerPersonas();
    }, [])


    const borrarPersona = async(idPersonaABorrar) => {
        try {
            await axios.delete('https://where-is-my-books.herokuapp.com/api/persona/' + idPersonaABorrar)
            traerPersonas();
        } catch(e) {

        }
    }
    
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
                                    <th className="table-edit-column">Eliminar</th>
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
                                            <td className="icon"><Link to={"/editar-personas/"+person.id.toString()} className="far fa-edit"></Link></td>
                                            <td className="icon"><Link onClick={() => borrarPersona(person.id)} className="fas fa-trash"></Link></td>
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
