import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CategoriesForm = (props) => {

    const initialValue = {
        nombre: '',
    };

    const [values, setValues] = useState(initialValue);

    const handlerSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('https://where-is-my-books.herokuapp.com/api/categoria', values)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-generos');
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
        <div className="categoriesForm-container">

            <form className="categoriesForm" onSubmit={handlerSubmit}>

                <div className="card">
                    <div className="card-header">
                        <h3>Categorías</h3>
                    </div>

                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input name="nombre" onChange={handlerChange} className="form-control" placeholder="Ingresar el nombre"/>
                        </div>
                    </div>
                        
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="/lista-generos" className="btn btn-danger btn-form">Cancelar</a>
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
