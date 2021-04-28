import React from 'react';

export const Home = () => {
    return (
        <div>
            <div class="content-wrapper">

                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Sistema de alta de libreria</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">ABM Libreria</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="content">
                    <div class="container-fluid">

                        <div class="row">
                        
                            <div class="col-md-6">

                                <div class="card">
                                    <div class="card-header border-transparent">
                                        <h3 class="card-title">Latest Orders</h3>
                                    </div>
                                    <div class="card-body p-0">
                                        
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-md-6">

                                <div class="card">
                                    <div class="card-header border-transparent">
                                        <h3 class="card-title">Integrantes del grupo</h3>
                                    </div>
                                    <div class="card-body p-0">
                                        <div class="table-responsive">
                                            <table class="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Apellido</th>
                                                        <th>Nombre</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Artencio</td>
                                                        <td>Ricardo Ivan</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gonzalez</td>
                                                        <td>Karen</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Grant</td>
                                                        <td>Melisa</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vazquez</td>
                                                        <td>Daniela</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vera</td>
                                                        <td>Micaela</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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
