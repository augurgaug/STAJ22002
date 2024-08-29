import {TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../css/dashboardCss'

export default function Dashboard(props) {
  return (



    <Card containerStyle={[styles.card, {backgroundColor: props.cardBackgroundColor}]}>
    <Card.Title > <Text style={styles.adet}> {props.count}   </Text></Card.Title>
    <Text  style={styles.Title}>{props.ad} </Text>
    <Card.Divider style={styles.CardDivider} />



    <TouchableOpacity  style={[{backgroundColor:props.buttonBackgroundColor}, styles.Button ]}
     onPress={props.onPress}>
      <Text style={styles.ButtonText} >Daha Fazla Bilgi
        
      </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faCircleArrowRight} style={{color:"white",}} />

    </TouchableOpacity>   
  </Card>
  )
}











        