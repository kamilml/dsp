import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import Titulo from '../Titulo.js'
import Divider from 'material-ui/Divider'
import AutoComplete from 'material-ui/AutoComplete'
import Cardbank from './Cardbank'
import Checkbox from 'material-ui/Checkbox'

import {dbprovincia, dbbanco} from './db'

const styles = {
  check: {
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    overflow: 'hidden'
  },
  paper: {
    margin: 15,
    padding: 10,
    width: '80%'
  }
}

export default class DividerComponent extends Component {

  state = {
    provincia: '',
    banco: {
      BCP: false,
      Interbank: false,
      BBVA: false,
      Scotiabank: false
    }
  }

  handleProvincia = (value) => {
    let provincia = value.charAt(0).toUpperCase()+value.slice(1);
    this.setState({provincia: provincia});
  }

  handleBanco = (event, value) => {
    this.setState({banco: value});
  }

  render() {

    let provincia = this.state.provincia;
    let banco = this.state.banco;
    let msg = '';;
    let msg_bcp = '';
    let msg_inter = '';
    let msg_bbva = '';
    let msg_scotia = '';
    let comision = {'A':0, 'D':0};

    if ((banco.BCP === true || banco.Interbank === true || banco.BBVA === true || banco.Scotiabank === true ) && dbprovincia.indexOf(provincia) > -1) {

      if (banco.BCP === true){
        switch (dbbanco.BCP[provincia]) {
          case '194-20691110-0-10':
            msg_bcp = <Cardbank
              provincia={provincia}
              banco={'BCP'}
              comision={{'A':0, 'D':5}}
              cuenta={dbbanco.BCP.Lima}
            />;
            break;
          case undefined:
            msg_bcp = <Cardbank
              provincia={provincia}
              banco={'BCP'}
              comision={{'A':7.5, 'D':12.5}}
              cuenta={dbbanco.BCP.Lima}
            />;
            break;
          default:
            msg_bcp = <Cardbank
              provincia={provincia}
              banco={'BCP'}
              comision={{'A':0, 'D':9}}
              cuenta={dbbanco.BCP[provincia]}
            />;
        }
      }
      if (banco.Interbank === true){
        switch (dbbanco.Interbank[provincia]) {
          case '091-3057202430':
            msg_inter = <Cardbank
              provincia={provincia}
              banco={'Interbank'}
              comision={{'A':0, 'D':7}}
              cuenta={dbbanco.Interbank.Lima}
            />;
            break;
          case undefined:
            msg_inter = <Cardbank
              provincia={provincia}
              banco={'Interbank'}
              comision={{'A':0, 'D':9.5}}
              cuenta={dbbanco.Interbank.Lima}
            />;
            break;
          default:
            msg_inter = <Cardbank
              provincia={provincia}
              banco={'Interbank'}
              comision={comision}
              cuenta={dbbanco.Interbank[provincia]}
            />;
        }
      }
      if (banco.BBVA === true){
        if (provincia === 'Lima y Callao') {
          msg_bbva = <Cardbank
            provincia={provincia}
            banco={'BBVA'}
            comision={comision}
            cuenta={'0257-02-00154221'}
          />;
        } else {
          msg_bbva = <Cardbank
            provincia={provincia}
            banco={'BBVA'}
            comision={{'A':7.5, 'D':7.5}}
            cuenta={'0257-02-00154221'}
          />;
        }
      }
      if (banco.Scotiabank === true){
        msg_scotia = <Cardbank
          provincia={provincia}
          banco={'Scotiabank'}
          comision={comision}
          cuenta={'069-7401578'}
        />;
      }
    } else {
      msg = <center><br/>* Escribe arriba el nombre de tu provincia<br/>y <b>dale click</b> en la lista</center>;
    }

    return (
      <div>
        <Helmet>
          <title>Cuentas2</title>
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dota-store-peru.appspot.com/o/images%2Fcuentas.jpg?alt=media&token=7b4cc80c-180c-4af6-92d9-42e442cd30ab"/>
          <meta property="og:url" content="https://dotastore.pe/cuentas"/>
          <meta property="og:description" content="Elige la cuenta para tu provincia"/>
          <meta name="description" content="Elige la cuenta para tu provincia" />
        </Helmet>
        
        <Titulo tab="cuentas" />
        <center>
        <div style={{textAlign: 'left', maxWidth: 990}}>
        <AutoComplete
          floatingLabelText="Provincia donde pagarás"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={dbprovincia}
          maxSearchResults={5}
          onUpdateInput={this.handleProvincia}
          openOnFocus={true}
          style={styles.paper}
          fullWidth={true}
        />
        <Divider />
        <Checkbox
          style={styles.check}
          label="BCP"
          onCheck={(e, i) => this.setState({
            banco:{
              BCP: i,
              Interbank: this.state.banco.Interbank,
              BBVA: this.state.banco.BBVA,
              Scotiabank: this.state.banco.Scotiabank
            }
          })}
        />
        <Checkbox
          style={styles.check}
          label="Interbank"
          onCheck={(e, i) => this.setState({
            banco:{
              BCP: this.state.banco.BCP,
              Interbank: i,
              BBVA: this.state.banco.BBVA,
              Scotiabank: this.state.banco.Scotiabank
            }
          })}
        />
        <Checkbox
          style={styles.check}
          label="BBVA"
          onCheck={(e, i) => this.setState({
            banco:{
              BCP: this.state.banco.BCP,
              Interbank: this.state.banco.Interbank,
              BBVA: i,
              Scotiabank: this.state.banco.Scotiabank
            }
          })}
        />
        <Checkbox
          style={styles.check}
          label="Scotiabank"
          onCheck={(e, i) => this.setState({
            banco:{
              BCP: this.state.banco.BCP,
              Interbank: this.state.banco.Interbank,
              BBVA: this.state.banco.BBVA,
              Scotiabank: i
            }
          })}
        />
        <Divider />
        {msg_bcp}
        {msg_inter}
        {msg_bbva}
        {msg_scotia}
        {msg}
        </div></center>
      </div>
    );
  }
}