import React from 'react'
import {Helmet} from "react-helmet"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home.js'
import Precios from './precios/Precios.js'
import Cuentas from './cuentas/Cuentas.js'
import Registro from './registro/Registro.js'

const App = () => (
  <Router>
    <div>
      <Helmet
        titleTemplate="%s - Dota Store Perú"
        defaultTitle="Dota Store Perú"
      />

      <Route exact path="/" component={Home}/>
      <Route path="/precios" component={Precios}/>
      <Route path="/cuentas" component={Cuentas}/>
      <Route path="/registro" component={Registro}/>
    </div>
  </Router>
)

export default App