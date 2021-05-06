import React from 'react';

export const CategoriesForm = () => {

    // function handleSubmit(){

    // }

    return (
        <div className="bookForm-container">
            <div class="bookForm">

                <div className="card">
                    <div className="card-header">
                        <h3>Categorías</h3>
                    </div>

                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input name="nombre" className="form-control" placeholder="Ingresar el nombre"/>
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

            </div>
        </div>
    )
}
