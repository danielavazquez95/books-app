import React from 'react';

export const BooksList = () => {
    return (
        <div className="bookForm-container">
            <div className="bookForm">


                <div className="card">
                    <div className="card-header">
                        <div class="row justify-content-between">
                            <div className="col-sm-6">
                                <h3 className="card-title">Libros</h3>
                            </div>
                            <div className="col-sm-6 btn-form-redirect">
                                <a href="/formulario-libros" class="btn btn-block btn-primary">Ingresar Nuevo</a>
                            </div>
                        </div>
                    </div>
                

                    <div className="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Categoria</th>
                                    <th>Persona prestada</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Update</td>
                                    <td>Update</td>
                                    <td>Update</td>
                                    <td>Update</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean</td>
                                    <td>Clean</td>
                                    <td>Clean</td>
                                    <td>Clean</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron</td>
                                    <td>Cron</td>
                                    <td>Cron</td>
                                    <td>Cron</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix</td>
                                    <td>Fix</td>
                                    <td>Fix</td>
                                    <td>Fix</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}
