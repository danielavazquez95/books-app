import React from 'react';

export const CategoriesForm = () => {

    // function handleSubmit(){

    // }

    return (
        <div>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>Categorias</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">

                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Formulario de categorias</h3>
                                    </div>

                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nombre</label>
                                                <input type="email" class="form-control" id="category" placeholder="Ingresar categoria"></input>
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
