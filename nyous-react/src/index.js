import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontrada from './pages/naoencontrada';
import SemPermissao from './pages/sempermissao';
import './index.css';
import Dashboard from './pages/admin/dashboard';
import jwt_decode from 'jwt-decode';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CrudEventos from './pages/admin/crudeventos';
import CrudCategorias from './pages/admin/crudcategorias';


const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = { props => 
      localStorage.getItem('token-nyous') !== null ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = { props => 
      localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role === 'Admin' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);


// Definindo as rotas da apicação
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <RotaPrivada path='/eventos' component={Eventos} />
        <RotaPrivadaAdmin path='/admin/dashboard' component={Dashboard} />
        <RotaPrivadaAdmin path='/admin/categorias' component={CrudCategorias} />
        <RotaPrivadaAdmin path='/admin/eventos' component={CrudEventos} />
        <Route path='/sempermissao' component={SemPermissao} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
