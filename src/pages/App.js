import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home } from './Home';
import { BooksForm } from './Books/BooksForm.jsx';
import { BooksList } from './Books/BooksList.jsx';
import { CategoriesForm } from './Categories/CategoriesForm.jsx';
import { CategoriesList } from './Categories/CategoriesList.jsx';
import { PersonForm } from './Persons/PersonForm.jsx';
import { PersonsList } from './Persons/PersonsList.jsx';



export const App = () =>  {

  return (

      <Router>
        <div>
          <Switch>
              <Route exact path="/lista-personas" component={PersonsList}/>
              <Route exact path="/formulario-personas" component={PersonForm} />
              <Route exact path="/lista-generos" component={CategoriesList} />
              <Route exact path="/formulario-generos" component={CategoriesForm} />
              <Route exact path="/lista-libros" component={BooksList} />
              <Route exact path="/formulario-libros" component={BooksForm} />
              <Route exact path="/" component={Home} />
              <Redirect to="/"/>
          </Switch>
        </div>
      </Router>

  );
}

