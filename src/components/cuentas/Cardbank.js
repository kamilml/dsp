import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import {bankimages} from './db'

const styles = {
  card1: {
    margin: '2%',
    width: '46%',
    float: 'left'
  },
  card2: {
    margin: '4%'
  },
  titlestyle: {
    fontSize: 17
  },
  headerstyle: {
    overflow: 'hidden'
  },
  cardtext: {
    padding: 0,
    paddingLeft: 20
  },
  tabla: {
    paddingLeft: 10,
    margin: 0,
    height: 10
  }
}

export default class CardExampleControlled extends Component {

  render() {

    let provincia = this.props.provincia;
    let banco = this.props.banco;
    let comision = this.props.comision;
    let cuenta = this.props.cuenta;
    let img = bankimages[this.props.banco];
    let estilocard = [];

    if (screen.width > 640) {
        estilocard = styles.card1;
    } else {
        estilocard = styles.card2;
    }

    return (
      <Card style={estilocard}>
        <CardHeader
          title={cuenta}
          subtitle={banco+' - '+provincia}
          avatar={img}
          style={styles.headerstyle}
          titleStyle={styles.titlestyle}
        />
        <CardText style={styles.cardtext}>
          * Revisa la tabla de comisiones para tu provincia.<br/><br/>
        </CardText>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow style={{height: 30, background: '#f5f5f5'}}>
              <TableHeaderColumn style={styles.tabla}>Método de pago</TableHeaderColumn>
              <TableHeaderColumn style={styles.tabla}>Comisión</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow style={{height: 30}}>
              <TableRowColumn style={styles.tabla}>Agente</TableRowColumn>
              <TableRowColumn style={styles.tabla}>S/.{comision.A}</TableRowColumn>
            </TableRow>
            <TableRow style={{height: 30}}>
              <TableRowColumn style={styles.tabla}>Ventanilla</TableRowColumn>
              <TableRowColumn style={styles.tabla}>S/.{comision.D}</TableRowColumn>
            </TableRow>
            <TableRow style={{height: 30}}>
              <TableRowColumn style={styles.tabla}>Transferencia</TableRowColumn>
              <TableRowColumn style={styles.tabla}>S/.0</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}