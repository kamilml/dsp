import React from 'react'
import {Helmet} from "react-helmet"
import Titulo from '../Titulo.js'

const Precios = () => (
  <div>
    <Helmet>
      <title>Precios</title>
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dota-store-peru.appspot.com/o/images%2Fprecios.jpg?alt=media&token=70204a99-0c50-4ce7-9d92-f917fe920854"/>
      <meta property="og:url" content="https://dotastore.pe/precios"/>
      <meta property="og:description" content="Revisa nuestros precios, ofertas y stock actualizados a diario aqu&iacute;"/>
      <meta name="description" content="Revisa nuestros precios, ofertas y stock actualizados a diario aqu&iacute;" />
    </Helmet>

    <Titulo tab="precios" />
    <iframe src="https://docs.google.com/spreadsheets/d/1PoH3XBzAQZAYosovTIigGJ5w7ztT1_rh9kn3gWrS6Fk/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>
)

export default Precios