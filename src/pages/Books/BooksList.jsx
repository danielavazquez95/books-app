import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export const BooksList = () => {
    const [allBooks, setAllbooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [persons, setPersons] = useState([]);
    const history = useHistory();
    const [error, setError] = React.useState('');

    const traerPersonas = async() => {
        try {
            axios.get('https://where-is-my-books.herokuapp.com/api/libro')
            .then(resp => setAllbooks(resp.data.respuesta));

            axios.get('https://where-is-my-books.herokuapp.com/api/categoria')
            .then(resp => setCategories(resp.data.respuesta));

            axios.get('https://where-is-my-books.herokuapp.com/api/persona')
            .then(resp => setPersons(resp.data.respuesta));
        } catch(e) {
            alert('Hubo un error '+ error)
        }
    }

    const findCategoryName = (categories, id) => {
        const category = categories.find(category => category.id === id);
        return category?.nombre;
    };

    const findPersonName = (persons, id) => {
        const person = persons.find(person => person.id === id);
        return person?.nombre;
    };


    const handlerClick = () => {
        history.push('/formulario-libros');
    };

    React.useEffect(() => {
        traerPersonas();
    }, [])

    const borrarLibro = async(idLibroABorrar) => {
        try {
            await axios.delete('https://where-is-my-books.herokuapp.com/api/libro/' + idLibroABorrar)
            traerPersonas();
        } catch(e) {

        }
    }

    return (
        <div className="booksTable-container">
            <div className="books-table">

                <div className="card">
                    <div className="card-header">
                        <div className="row justify-content-between">
                            <div className="col-sm-6">
                                <h3 className="card-title">Libros</h3>
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
                                    <th className="table-id-column">Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Categoria</th>
                                    <th>Persona prestada</th>
                                    <th className="table-edit-column">Detalle</th>
                                    <th className="table-edit-column">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                allBooks.map(book => {
                                    return(
                                        <tr key={book.id} >
                                            <td>{book.id}</td>
                                            <td>{book.nombre}</td>
                                            <td>{book.descripcion}</td>
                                            <td>{findCategoryName(categories, book.categoria_id)}</td>
                                            <td>{findPersonName(persons, book.persona_id)}</td>
                                            <td><Link to={"/editar-libros/"+book.id.toString()} className="far fa-edit"></Link></td>
                                            <td className="icon"><Link onClick={() => borrarLibro(book.id)} className="fas fa-trash"></Link></td>
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
};
