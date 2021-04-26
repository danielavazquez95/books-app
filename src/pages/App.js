import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { BooksForm } from './Books/BooksForm';
import { BooksList } from './Books/BooksList';
import { CategoriesForm } from './Categories/CategoriesForm';
import { CategoriesList } from './Categories/CategoriesList';
import { Home } from './Home';
import { PersonForm } from './Persons/PersonForm';
import { PersonsList } from './Persons/PersonsList';



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

