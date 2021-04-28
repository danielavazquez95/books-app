import React from 'react';

export const PersonsList = () => {
    
    return (
        <div>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>Personas</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <a href="/formulario-personas" class="btn btn-block btn-primary">Ingresar Nueva</a>
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
                                        <h3 class="card-title">Lista de personas</h3>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nombre</th>
                                                    <th>Apellido</th>
                                                    <th>Email</th>
                                                    <th>Alias</th>
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
