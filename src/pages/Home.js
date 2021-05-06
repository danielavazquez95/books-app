import React from 'react';

export const Home = () => {
    return (


        <div className="bookForm-container">
            <div class="bookForm">

            <h1>Sistema de alta de libreria</h1>

                <div className="card">
                    <div className="card-header">
                        <h3>Integrantes del grupo</h3>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
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
    )
}
