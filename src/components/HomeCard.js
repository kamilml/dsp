import React, {Component} from 'react'
import FacebookProvider, { EmbeddedPost } from 'react-facebook'

export default class Example extends Component {
  render() {
    return (
      <center style={{overflow: 'hidden'}}>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/615903611946993/" />
        </FacebookProvider>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/610941822443172" />
        </FacebookProvider>
        <br/>
        <FacebookProvider appID="1766214696934382">
          <EmbeddedPost
          href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/610491199154901" />
        </FacebookProvider>
      </center>
    );
  }
}