import React from 'react';

export const BooksList = () => {
    return (
        <div>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>Libros</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <a href="/formulario-libros" class="btn btn-block btn-primary">Ingresar Nuevo</a>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">

                            
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Lista de libros</h3>
                                    </div>
                                    <div class="card-body">
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
                                    <div class="card-footer clearfix">
                                        <ul class="pagination pagination-sm m-0 float-right">
                                        <li class="page-item"><a class="page-link" href="#">«</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
