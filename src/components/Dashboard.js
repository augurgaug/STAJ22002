import {TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';


export default function Dashboard(props) {
  return (



    <Card containerStyle={[styles.card, {backgroundColor: props.cardBackgroundColor}]}>
    <Card.Title > <Text style={styles.adet}> {props.count}   </Text></Card.Title>
    <Text  style={styles.Title}>{props.ad} </Text>
    <Card.Divider style={{borderWidth:1 , borderColor:"white", marginBottom:0}} />



    <TouchableOpacity  style={{backgroundColor:props.buttonBackgroundColor, width:'100%',  alignItems:"center",justifyContent:'center', flexDirection:"row",
        height:40,color:"white", 
    }} onPress={props.onPress}>
      <Text style={{marginRight:10, color:"white", fontSize:17}} >Daha Fazla Bilgi
        
      </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faCircleArrowRight} style={{color:"white",}} />

    </TouchableOpacity>
{/* <Button title='Daha Fazla Bilgi -->' buttonStyle={{backgroundColor:"#35AED9", width:'100%', margin:0, }} onPress={()=>{navigation.navigate(SecondPage)}}></Button> */}
   
  </Card>
  )
}

const styles= StyleSheet.create({


card:{borderRadius: 4, padding:0,paddingTop:10,borderColor:"grey", borderWidth:2},

   


adet:{color:"white",
        fontSize: 50,

     
    },

Title:{
        fontSize: 18,
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
     
    },        

        })












        