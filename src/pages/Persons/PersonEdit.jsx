import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

export const PersonEdit = (props) => {
    const params = useParams();
    const [allBooks, setAllbooks] = useState([]);

    const initialValue = [{
        id: '-',
        nombre: '-',
    }];

    const [form, setForm] = React.useState({
        nombre: '',
        apellido: '',
        email: '',
        alias: ''
    })

    const buscarPersonaPorId = async(idPersona) => {
        try {
            const respuesta = await axios.get('https://where-is-my-books.herokuapp.com/api/persona/'+idPersona)
            setForm(respuesta.data.respuesta[0])

            axios.get('https://where-is-my-books.herokuapp.com/api/libro/persona/'+idPersona)
            .then(resp => {
                if(resp.data.response == false){
                    setAllbooks(initialValue)
                }else{
                    setAllbooks(resp.data)
                }
            });

        } catch(error) {
            alert('Hubo un error '+ error)
        }
    }
    
    React.useEffect(() => {
        if (!params.id) return;
        buscarPersonaPorId(params.id)
    }, [params])

    const handleChangeNombre = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.nombre = e.target.value;
        setForm(nuevoState);
    }

    const handleChangeApellido = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.apellido = e.target.value;
        setForm(nuevoState);
    }
    

    const handleChangeAlias = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.alias = e.target.value;
        setForm(nuevoState);
    }

    const guardar = async() => {
        // form 
        try {
            await axios.put('https://where-is-my-books.herokuapp.com/api/persona/'+params.id, form)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-personas');
                    window.location.reload(false);
                }else{
                    alert(resp.data.mensaje)
                }
            })
            .catch(err => console.log(err))
            // .finally(setForm(initialValue));
        } catch (error) {
            alert('Hubo un error '+ error)
        }
    }
    return (
        <div className="row">
            <div className="col-sm-6 edit-person-doble-card">
                <div className="personForm-container">
                    <form className="personForm"/*  onSubmit={handlerSubmit} */ >

                        <div className="card">
                            <div className="card-header">
                                <h3>Datos de la persona - Editar</h3>
                            </div>
                            
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="nombre" onChange={handleChangeNombre} className="form-control" placeholder="Ingresar el nombre" value={form.nombre}/>
                                </div>
                                <div className="form-group">
                                    <label>Apellido</label>
                                    <input type="text" name="apellido" onChange={handleChangeApellido} className="form-control" placeholder="Ingresar el apellido" value={form.apellido}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" className="form-control" value={form.email} disabled/>
                                </div>
                                <div className="form-group">
                                    <label>Alias</label>
                                    <input type="text" name="alias" onChange={handleChangeAlias} className="form-control" placeholder="Ingresar el alias" value={form.alias}/>
                                </div>
                            </div>
                            

                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="/lista-personas" className="btn btn-danger btn-form">Cancelar</a>
                                    </div>
                                    <div className="col-sm-6">
                                    <Link to={"/lista-personas"} onClick={guardar} className="btn btn-primary btn-form">Guardar</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>  
            </div>

            <div className="col-sm-6 edit-person-doble-card">
                <div className="personForm-container">
                    <form className="personForm"/*  onSubmit={handlerSubmit} */ >

                        <div className="card">
                            <div className="card-header">
                                <h3>Libros prestados a esta persona</h3>
                            </div>
                            
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th className="table-id-column">Id</th>
                                            <th>Nombre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            
                                    {
                                        allBooks.map(book => {
                                            return(
                                                <tr key={book.id} >
                                                    <td>{book.id}</td>
                                                    <td>{book.nombre}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
    )
}
