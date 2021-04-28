import React from 'react';

export const PersonForm = () => {
    return (
        <div>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>Personas</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">

                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Formulario de persona</h3>
                                    </div>

                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="name">Nombre</label>
                                                <input type="text" class="form-control" id="name" placeholder="Ingresar nombre"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="lastname">Apellido</label>
                                                <input type="text" class="form-control" id="lastname" placeholder="Ingresar apellido"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="alias">Alias</label>
                                                <input type="text" class="form-control" id="alias" placeholder="Ingresar alias"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="text" class="form-control" id="email" placeholder="Ingresar email"></input>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Guardar</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
