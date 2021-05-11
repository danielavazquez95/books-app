import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const PersonForm = (props) => {

    const initialValue = {
        nombre: '',
        apellido: '',
        alias: '',
        email: ''
    };

    const [values, setValues] = useState(initialValue);

    const handlerSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('https://where-is-my-books.herokuapp.com/api/persona', values)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-personas');
                    setValues(initialValue)
                    window.location.reload(false);
                }else{
                    alert(resp.data.mensaje)
                }
            })
            .catch(err => console.log(err))
        } catch (error) {
            alert('Hubo un error '+ error)
        }
        
    };

    const handlerChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    return (
        <div className="personForm-container">
            <form className="personForm" onSubmit={handlerSubmit}>

                <div className="card">
                    <div className="card-header">
                        <h3>Personas</h3>
                    </div>
                    
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input name="nombre" onChange={handlerChange} className="form-control" placeholder="Ingresar el nombre"/>
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input name="apellido" onChange={handlerChange} className="form-control" placeholder="Ingresar el apellido"/>
                        </div>
                        <div className="form-group">
                            <label>Alias</label>
                            <input name="alias" onChange={handlerChange} className="form-control" placeholder="Ingresar el alias"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" onChange={handlerChange} className="form-control" placeholder="Ingresar el email"/>
                        </div>
                    </div>

                    <div className="card-footer">
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="/lista-personas" className="btn btn-danger btn-form">Cancelar</a>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-form">Guardar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
