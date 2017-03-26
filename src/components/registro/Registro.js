import React from 'react'
import {Helmet} from 'react-helmet'
// import {Route, Link} from 'react-router-dom'
import Titulo from '../Titulo.js'

/*const Frame = ({ match }) => (
  <div>
    <h3>{match.params.frameId}</h3>
  </div>
)*/

const Registro = ({ match }) => (
  <div id="<h100></h100>">
    <Helmet>
      <title>Registro</title>
    </Helmet>

    <Titulo tab="registro" />
    <iframe src="https://docs.google.com/forms/d/1bTKvDa88CgEtXgpmn5-ZTtcrSvnpg1IQEPtsYvQtfQQ/viewform?embedded=true">Cargando...</iframe>
    
    {/*<h2>Registro</h2>
    <ul>
      <li>
        <Link to={`${match.url}/asd1`}>
          Probando 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/fgh2`}>
          Probando 2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/123-asd`}>
          Probando 3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:frameId`} component={Frame}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>*/}
  </div>
)

export default Registro