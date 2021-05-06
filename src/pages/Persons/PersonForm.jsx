import React from 'react';

export const PersonForm = () => {
    return (
        <div className="bookForm-container">
            <div class="bookForm">

                <div className="card">
                    <div className="card-header">
                        <h3>Personas</h3>
                    </div>
                    
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input name="nombre" className="form-control" placeholder="Ingresar el nombre"/>
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input name="apellido" className="form-control" placeholder="Ingresar el apellido"/>
                        </div>
                        <div className="form-group">
                            <label>Alias</label>
                            <input name="alias" className="form-control" placeholder="Ingresar el alias"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" className="form-control" placeholder="Ingresar el email"/>
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
            </div>
        </div>
    )
}
