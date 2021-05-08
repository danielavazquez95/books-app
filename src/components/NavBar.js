import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Where is my book</Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/lista-libros">Libros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista-personas">Personas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista-generos">Categorias</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
