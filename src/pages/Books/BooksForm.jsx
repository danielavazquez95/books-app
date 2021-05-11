import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BooksForm = (props) => {

    const [allPersons, setAllPersons] = useState([]);
    const [categories, setCategories] = useState([]);

    const initialValue = {
        nombre: '',
        descripcion: '',
        categoria_id: 0,
        persona_id: null
    };

    const [values, setValues] = useState(initialValue);

    useEffect(() => {
        axios.get('https://where-is-my-books.herokuapp.com/api/persona')
        .then(resp => setAllPersons(resp.data.respuesta));

        axios.get('https://where-is-my-books.herokuapp.com/api/categoria')
        .then(resp => setCategories(resp.data.respuesta))
    }, []);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(values.persona_id == null){
            values.persona_id = '';
        }
        try {
            axios.post('https://where-is-my-books.herokuapp.com/api/libro', values)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-libros');
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

    const handlerCheck = (e) => {
        setValues({...values, [e.target.name]: Number(e.target.value)});
    };
    
    return (
      
            <div className="bookForm-container">
                <form className="bookForm" onSubmit={handlerSubmit}>
        
                    <div className="card">
                        <div className="card-header">
                            <h3>Libros</h3>
                        </div>
                            
                        <div className="card-body">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input name="nombre" onChange={handlerChange} className="form-control" placeholder="Ingresar el nombre"/>
                            </div>
                            <div className="form-group">
                                <label>Descripcion</label>
                                <textarea name="descripcion" onChange={handlerChange} className="form-control" placeholder="Ingresar la descripción"/>
                            </div>
                            <div className="form-group">
                                <label >Persona</label>
                                <select name="persona_id" onChange={handlerCheck} defaultValue="" className="form-control">
                                    <option value="">Click para seleccionar</option>
                                    {
                                        allPersons.map(person => <option key={person.id} value={person.id} >{`${person.nombre} ${person.apellido}`}</option> )
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Categoria</label>
                                <select name="categoria_id" onChange={handlerCheck} defaultValue="" className="form-control">
                                    <option value="">Click para seleccionar</option>
                                    {
                                        categories.map(category => <option key={category.id} value={category.id} >{category.nombre}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="/lista-libros" className="btn btn-danger btn-form">Cancelar</a>
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
};
