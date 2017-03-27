import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

import RaisedButton from 'material-ui/RaisedButton'

export default class Track extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Track</title>
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dota-store-peru.appspot.com/o/images%2Fguias.jpg?alt=media&token=268fe8f8-77fd-4056-8639-e42afb30fff9"/>
          <meta property="og:url" content="https://dotastore.pe/track"/>
          <meta property="og:description" content="Sigue el estado de tu pedido en nuestro track"/>
          <meta name="description" content="Sigue el estado de tu pedido en nuestro track" />
        </Helmet>
        <div style={{width:40}}>
          <RaisedButton
            href="./"
            fullWidth={true}
            style={{height: 60}}
            rippleStyle={{color: 'white'}}
            backgroundColor="#424242"
            icon={<img src="https://puu.sh/uZojT/a4c89d0104.png" alt="" />}
          />
        </div>
        <iframe src="https://docs.google.com/spreadsheets/d/1Ws8kJGa4ju1KYvBpY8hWAJUitrhdJ1uI_2U5QDCDNXI/edit?usp=sharing">Cargando...</iframe>
      </div>
    );
  }
}