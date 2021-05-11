import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export const CategoriesList = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = React.useState('');
    const history = useHistory();

    const traerCat = async() => {
        try {
            axios.get('https://where-is-my-books.herokuapp.com/api/categoria')
            .then(resp => setCategories(resp.data.respuesta))
            .catch(err => console.log(err))
        } catch(error) {
            alert('Hubo un error '+ error)
        }
    }

    React.useEffect(() => {
        traerCat();
    }, [])

    const handlerClick = () => {
        history.push('/formulario-generos');
    };

    const borrarCat = async(idCatABorrar) => {
        try {
            await axios.delete('https://where-is-my-books.herokuapp.com/api/categoria/' + idCatABorrar)
            traerCat();     
        } catch(e) {

        }
    }

    return (
        <div className="categoriesTable-container">
            <div className="categories-table">


                <div className="card">
                    <div className="card-header">
                        <div class="row justify-content-between">
                            <div className="col-sm-6">
                                <h3 className="card-title">Categorías</h3>
                            </div>
                            <div className="col-sm-6 btn-form-redirect">
                                <button onClick={handlerClick} className="btn btn-block btn-primary">Ingresar Nuevo</button>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="table-id-column">#</th>
                                    <th>Nombre</th>
                                    <th className="table-edit-column">Detalle</th>
                                    <th className="table-edit-column">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map(cat => {
                                    return(
                                        <tr key={cat.id} >
                                            <td>{cat.id}</td>
                                            <td>{cat.nombre}</td>
                                            <td><Link to={"/editar-generos/"+cat.id.toString()} className="far fa-edit"></Link></td> 
                                            <td className="icon"><Link onClick={() => borrarCat(cat.id)} className="fas fa-trash"></Link></td>
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
