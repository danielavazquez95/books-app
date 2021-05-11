import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

export const BookEdit = (props) => {
    const params = useParams();

    const initialValue = {
        nombre: '',
        descripcion: '',
        categoria_id: 0,
        persona_id: null,
        asignado_id: null
    };

    var [form, setForm] = useState(initialValue);

    const [categories, setCategories] = useState([]);
    const [persons, setPersons] = useState([]);

    const buscarLibroPorId = async(idLibro) => {
        try {
            const respuesta = await axios.get('https://where-is-my-books.herokuapp.com/api/libro/'+idLibro)
            
            //Guardar asignacion original
            respuesta.data[0].asignado_id = respuesta.data[0].persona_id;
            
            setForm(respuesta.data[0])
            console.log(respuesta.data[0])

            axios.get('https://where-is-my-books.herokuapp.com/api/categoria')
            .then(resp => setCategories(resp.data.respuesta));

            axios.get('https://where-is-my-books.herokuapp.com/api/persona')
            .then(resp => setPersons(resp.data.respuesta));

        } catch(error) {
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


    React.useEffect(() => {
        if (!params.id) return;
        buscarLibroPorId(params.id)
    }, [params])

    const handleChangeDescripcion = (e) => {        
        setForm({...form, [e.target.name]: e.target.value});
    }

   /* const handleChangePersona_id = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.apellido = e.target.value;
        setForm(nuevoState);
    }*/
    

    /*const handleChangeAlias = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.alias = e.target.value;
        setForm(nuevoState);
    }*/
   

    //const [values, setValues] = useState(form);

    const handlerCheck = (e) => {
        setForm({...form, [e.target.name]: Number(e.target.value)});        
    };
    

    const guardar = async() => {

        //Analizar si hay que devolver el libro
        if(form.asignado_id != form.persona_id && form.asignado_id != null) {
            await axios.put('https://where-is-my-books.herokuapp.com/api/libro/devolver/'+params.id, form)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-libros');
                    window.location.reload(false);
                }else{
                    alert(resp.data.mensaje)
                }
            })
            .catch(err => console.log(err))
            .finally(setForm(initialValue));            
        }else if(form.persona_id > 0 && form.asignado_id != form.persona_id){
            //Analizar si hay que prestarlo
            await axios.put('https://where-is-my-books.herokuapp.com/api/libro/prestar/'+params.id, form)
            .then(resp => {
                console.log(resp)
                if(resp.data.response == true){
                    props.history.push('/lista-libros');
                    window.location.reload(false);
                }else{
                    alert(resp.data.mensaje)
                }
            })
            .catch(err => console.log(err))
            .finally(setForm(initialValue));            
        }else{
            //Put de descripcion
            await axios.put('https://where-is-my-books.herokuapp.com/api/libro/'+params.id, form)
            .then(resp => {
                if(resp.data.response == true){
                    props.history.push('/lista-libros');
                    window.location.reload(false);
                }else{
                    alert(resp.data.mensaje)
                }
            })
            .catch(err => console.log(err))
            .finally(setForm(initialValue));
        }

    }
    return (
        <div className="bookForm-container">
            <form className="bookForm">

                <div className="card">
                    <div className="card-header">
                        <h3>Datos del libro - Editar</h3>
                    </div>
                    
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" name="nombre" className="form-control" value={form.nombre} disabled/>
                        </div>
                        <div className="form-group">
                            <label>Descripcion</label>
                            <input type="text" name="descripcion" onChange={handleChangeDescripcion} className="form-control" placeholder="Ingresar la descripcion" value={form.descripcion}/>
                        </div>
                        <div className="form-group">
                            <label>Categoria</label>
                            <input type="text" name="categoria_id" className="form-control" value={findCategoryName(categories, form.categoria_id)} disabled/>
                        </div>                      
                        <div className="form-group">
                                <label >Persona prestada</label>
                                <select name="persona_id" onChange={handlerCheck} value={form.persona_id} className="form-control">
                                    <option value="-1">No asignado</option>
                                    {
                                        persons.map(person => <option key={person.id} value={person.id} >{`${person.nombre} ${person.apellido}`}</option> )
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
                            <Link onClick={guardar} className="btn btn-primary btn-form">Guardar</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
