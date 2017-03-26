import React, {Component} from 'react'

import Titulo from './Titulo'
import HomeCard from './HomeCard'

export default class Home extends Component {

  render() {
    return (
      <div>
        <Titulo />
        <HomeCard />
      </div>
    );
  }
}