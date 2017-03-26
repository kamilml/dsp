import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'

const styles = {
  headline: {
    background: '#424242',
    fontWeight: 500
  },
  logo: {
    background: 'url("http://puu.sh/uXMJp/44b6352187.png") center no-repeat #424242'
  }
}

export default class Titulo extends Component {

  render() {
    return (
      <Tabs
        value={this.props.tab}
      >
        <Tab
          value="home"
          style={styles.logo}
          containerElement={<Link to="/" />}
        />
        <Tab
          value="precios"
          icon={<FontIcon className="material-icons">attach_money</FontIcon>}
          style={styles.headline}
          label="Precios"
          containerElement={<Link to="/precios" />}
        />
        <Tab
          value="cuentas"
          icon={<FontIcon className="material-icons">account_balance</FontIcon>}
          style={styles.headline}
          label="Cuentas"
          containerElement={<Link to="/cuentas" />}
        />
        <Tab
          value="registro"
          icon={<FontIcon className="material-icons">assignment_turned_in</FontIcon>}
          style={styles.headline}
          label="Registro"
          containerElement={<Link to="/registro" />}
        />
      </Tabs>
    )
  }
}