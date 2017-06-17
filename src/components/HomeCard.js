import React, {Component} from 'react'
import FacebookProvider, { EmbeddedPost } from 'react-facebook'

export default class Example extends Component {
  render() {
    return (
      <center style={{overflow: 'hidden'}}>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/649897255214295" />
        </FacebookProvider>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/videos/653188291551858/" />
        </FacebookProvider>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/649842765219744/?type=3" />
        </FacebookProvider>
        <br/>
      </center>
    );
  }
}