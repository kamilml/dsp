import React from 'react'
import {Helmet} from "react-helmet"
import Titulo from '../Titulo.js'

const Precios = () => (
  <div>
    <Helmet>
      <title>Precios</title>
    </Helmet>
    
    <Titulo tab="precios" />
    <iframe src="https://docs.google.com/spreadsheets/d/1PoH3XBzAQZAYosovTIigGJ5w7ztT1_rh9kn3gWrS6Fk/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>
)

export default Precios