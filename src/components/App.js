import React from 'react'
import {Helmet} from "react-helmet"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home.js'
import Precios from './precios/Precios'
import Cuentas from './cuentas/Cuentas'
import Registro from './registro/Registro'
import Track from './track/Track'

const App = () => (
  <Router>
    <div>
      <Helmet
        titleTemplate="%s - Dota Store Perú"
        defaultTitle="Dota Store Perú"
      >
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dota-store-peru.appspot.com/o/images%2Fguias.jpg?alt=media&token=268fe8f8-77fd-4056-8639-e42afb30fff9"/>
        <meta property="og:url" content="https://dotastore.pe/"/>
        <meta property="og:description" content="Compra con total seguridad de la forma m&aacute;s f&aacute;cil y r&aacute;pida en Dota Store Per&uacute;."/>
        <meta name="description" content="Compra con total seguridad de la forma m&aacute;s f&aacute;cil y r&aacute;pida en Dota Store Per&uacute;." />
      </Helmet>
      <Route exact path="/" component={Home}/>
      <Route path="/precios" component={Precios}/>
      <Route path="/cuentas" component={Cuentas}/>
      <Route path="/registro" component={Registro}/>
      <Route path="/track" component={Track}/>
    </div>
  </Router>
)

export default App