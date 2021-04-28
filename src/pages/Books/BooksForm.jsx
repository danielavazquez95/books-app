import React from 'react'

export const BooksForm = () => {
    
    return (
        <div>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>Libros</h1>
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
                                        <h3 class="card-title">Formulario de libros</h3>
                                    </div>

                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nombre</label>
                                                <input type="text" class="form-control" id="email" placeholder="Ingresar nombre"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Descripcion</label>
                                                <input type="text" class="form-control" id="description" placeholder="Ingresar categoria"></input>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Persona</label>
                                                <select class="form-control">
                                                    <option>--</option>
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Categoria</label>
                                                <select class="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
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
