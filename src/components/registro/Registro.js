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
  <div>
    <Helmet>
      <title>Registro</title>
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dota-store-peru.appspot.com/o/images%2Fregistro.jpg?alt=media&token=64015a4f-8f92-495a-8389-cca363960396"/>
      <meta property="og:url" content="https://dotastore.pe/registro"/>
      <meta property="og:description" content="Luego de hacer un pago reg&iacute;stralo ac&aacute; y sigue los pasos para recoger tu pedido."/>
      <meta name="description" content="Luego de hacer un pago reg&iacute;stralo ac&aacute; y sigue los pasos para recoger tu pedido." />
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