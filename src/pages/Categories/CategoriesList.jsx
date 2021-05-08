import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export const CategoriesList = () => {

    const [categories, setCategories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://where-is-my-books.herokuapp.com/api/categoria')
        .then(resp => setCategories(resp.data.respuesta));
    }, []);

    const handlerClick = () => {
        history.push('/formulario-generos');
    };

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
                                    <th className="table-edit-column">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map(cat => {
                                    return(
                                        <tr key={cat.id} >
                                            <td>{cat.id}</td>
                                            <td>{cat.nombre}</td>
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
