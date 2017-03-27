import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  width: '90%',
  maxWidth: 750,
  textAlign: 'left',
  card: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 3,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  cardtitle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: 20
  }
}

const CardExampleWithAvatar = () => (
  <center>
  <br/>
  <Card style={styles}>
    <CardHeader
      title="Tío DSP"
      subtitle="100% rial no feik"
      avatar="https://puu.sh/uZojT/a4c89d0104.png"
      titleStyle={{fontWeight: 'bold'}}
    />
    <CardMedia
      overlayContentStyle={{padding: 0}}
      overlay={
        <CardTitle
          title="Sorteo Arcana Juggernaut"
          subtitle="Entra y participa del sorteo"
          style={styles.card}
          titleStyle={styles.cardtitle}
        />
      }
    >
      <img src="https://puu.sh/uZsLl/0c5f8db9b3.jpg" alt="" />
    </CardMedia>
    <CardText>
      Entra a <a href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/610491199154901/" target="_blank">esta publicación de facebook</a> y sigue los pasos para participar del sorteo.
    </CardText>
    <CardActions>
      <FlatButton
      label="Participar"
      href="https://www.facebook.com/dotastoreperu/photos/a.610491485821539.1073741828.610440369159984/610491199154901/"
      labelStyle={{'fontWeight': 'bold'}}
      target="_blank"
      />
    </CardActions>
  </Card>
  </center>
);

export default CardExampleWithAvatar;