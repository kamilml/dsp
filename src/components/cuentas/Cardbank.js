import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import {bankimages} from './db'

const styles = {
  margin: 10,
  titlestyle: {
    fontSize: 17
  },
  headerstyle: {
    overflow: 'hidden'
  },
  cardtext: {
    padding: 0,
    paddingLeft: 20
  }
}

export default class CardExampleControlled extends Component {

  render() {

    let provincia = this.props.provincia;
    let banco = this.props.banco;
    let comision = this.props.comision;
    let cuenta = this.props.cuenta;
    let img = bankimages[this.props.banco];

    return (
      <Card style={styles}>
        <CardHeader
          title={cuenta}
          subtitle={banco+' - '+provincia}
          avatar={img}
          style={styles.headerstyle}
          titleStyle={styles.titlestyle}
        />
        <CardText style={styles.cardtext}>
          * Revisa la tabla de comisiones para tu provincia.
        </CardText>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Método de pago</TableHeaderColumn>
              <TableHeaderColumn>Comisión</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Agente</TableRowColumn>
              <TableRowColumn>S/.{comision.A}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Ventanilla</TableRowColumn>
              <TableRowColumn>S/.{comision.D}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Transferencia</TableRowColumn>
              <TableRowColumn>S/.0</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}