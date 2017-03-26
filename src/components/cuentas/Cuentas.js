import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import Titulo from '../Titulo.js'

import Divider from 'material-ui/Divider'
import AutoComplete from 'material-ui/AutoComplete'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Cardbank from './Cardbank'

import {dbprovincia, dbbanco} from './db'

const styles = {
  radioButton: {
    margin: 5,
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
    banco: ''
  }

  handleProvincia = (value) => {
    this.setState({provincia: value});
  }

  handleBanco = (event, value) => {
    this.setState({banco: value});
  }

  render() {

    let provincia = this.state.provincia;
    let banco = this.state.banco;
    let msg = '';
    let cuenta = '';
    let comision = {'A':0, 'D':0};

    if (provincia !== '' && banco !== '' && dbprovincia.indexOf(provincia) > -1) {

      switch(banco) {
        case 'Scotiabank':
          cuenta = '069-7401578';
          break;
        case 'BBVA':
          cuenta = '0257-02-00154221';
          if (provincia !== 'Lima') comision = {'A':7.5, 'D':7.5};
          break;
        case 'BCP':
          switch (dbbanco.BCP[provincia]) {
            case '194-20691110-0-10':
              cuenta = dbbanco.BCP.Lima;
              comision = {'A':0, 'D':5};
              break;
            case undefined:
              cuenta = dbbanco.BCP.Lima;
              comision = {'A':7.5, 'D':12.5};
              break;
            default:
              cuenta = dbbanco.BCP[provincia];
              comision = {'A':0, 'D':9};
          }
          break;
        case 'Interbank':
          switch (dbbanco.Interbank[provincia]) {
            case '091-3057202430':
              cuenta = dbbanco.Interbank.Lima;
              comision = {'A':0, 'D':7};
              break;
            case undefined:
              cuenta = dbbanco.Interbank.Lima;
              comision = {'A':0, 'D':9.5};
              break;
            default:
              cuenta = dbbanco.Interbank[provincia];
          }
          break;
        default:
      }

      msg = <Cardbank
              provincia={provincia}
              banco={banco}
              comision={comision}
              cuenta={cuenta}
            />
    }

    return (
      <div>
        <Helmet>
          <title>Cuentas</title>
        </Helmet>
        
        <Titulo tab="cuentas" />
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
          <RadioButtonGroup
            onChange={this.handleBanco}
            name="selectbancos"
            style={styles.paper}
          >
            <RadioButton
              value="BCP"
              label="BCP"
              style={styles.radioButton}
            />
            <RadioButton
              value="Interbank"
              label="Interbank"
              style={styles.radioButton}
            />
            <RadioButton
              value="BBVA"
              label="BBVA"
              style={styles.radioButton}
            />
            <RadioButton
              value="Scotiabank"
              label="Scotiabank"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <Divider />
          {msg}
      </div>
    );
  }
}