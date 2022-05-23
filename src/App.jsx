import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"

import Civilization from "./components/Civilization";
import Civilizations from "./components/Civilizations";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import NoMatch from "./components/NoMatch";
import Nosotros from './components/Nosotros';



function App() {
  return (

    // envuelvo todo el contenido en mi router para poder usar mis navegaciones
    // para trabajar esas rutas como (/contact) hacemos el link
    <Router>
      <div className="container mt-5">
        {/* Link ---> se utiliza para hacer los enlaces de la navegacion de los navbar */}
        {/* <h1>NavBar....</h1> */}
        <div className="btn-group">
          {/* Link ---> es un ancla */}
          <Link
            // To --> la ruta que se va a redireccionar
            to="/"
            className="btn btn-danger mr-2"
          >
            Inicio
          </Link>
          {/* Link ---> es un ancla */}
          <Link
            // To --> la ruta que se va a redireccionar
            to="/nosotros"
            className="btn btn-danger mr-2"
          >
            Nosotros
          </Link>
          {/* NavLink ---> es porque le podemos agregar una clase aciva */}
          <NavLink
            // To --> la ruta que se va a redireccionar
            to="/contacto"
            className="btn btn-danger mr-2"
            activeClassName="active"
          >
            Contacto
          </NavLink>
          {/* NavLink ---> es porque le podemos agregar una clase aciva */}
          <NavLink
            // To --> la ruta que se va a redireccionar
            to="/civilizations"
            className="btn btn-danger mr-2"
            activeClassName="active"
          >
            Civilization
          </NavLink>
        </div>
        <hr />
        {/* CON EL SWITCH se carga el contenido dinamico */}
        <Switch>
          {/* Llamamos con el route el componente o su contenido dinamico */}
          {/* para que se muestre el contenido se usa path */}
          <Route path="/contacto">
            <Contacto />
          </Route>
          {/* segunda ruta dinamica */}
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          {/* tercera ruta dinamica */}
          <Route path="/civilization/:id">
            <Civilization />
          </Route>
          {/* tercera ruta dinamica */}
          <Route path="/civilizations">
            <Civilizations />
          </Route>
          {/* exact --> para que funcione exactamente con la ruta raiz, recordar que el path raiz va a lo ultimo */}
          {/* ruta raiz */}
          <Route path="/" exact>
            <Inicio />
          </Route>
          {/* Ruta no reconocida, osea no coincide con ninguna */}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
