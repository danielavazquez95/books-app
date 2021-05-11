import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

export const CategoriesEdit = (props) => {
    const params = useParams();
    const [allBooks, setAllbooks] = useState([]);

    const initialValue = [{
        id: '-',
        nombre: '-',
    }];

    const [form, setForm] = React.useState({
        nombre: '',
    })

    const buscarCategoriaPorId = async(idCategoria) => {
        try {
            const respuesta = await axios.get('https://where-is-my-books.herokuapp.com/api/categoria/'+idCategoria)
            setForm(respuesta.data[0])

            axios.get('https://where-is-my-books.herokuapp.com/api/libro/categoria/'+idCategoria)
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
        buscarCategoriaPorId(params.id)
    }, [params])

    return (
        <div className="row">
            <div className="col-sm-6 edit-person-doble-card">
                <div className="personForm-container">
                    <form className="personForm"/*  onSubmit={handlerSubmit} */ >

                        <div className="card">
                            <div className="card-header">
                                <h3>Datos de categoria</h3>
                            </div>
                            
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="nombre" className="form-control" placeholder="Ingresar el nombre" value={form.nombre}/>
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
                                <h3>Libros en esta categoria</h3>
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
