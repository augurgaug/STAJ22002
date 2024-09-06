import {  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View } from 'react-native'
import { Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowRight,faHouse,faHorse, faDatabase, faServer} from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import React, { useEffect, useState } from 'react'



export default function  Content(props,navigation){
  const[userName,setUserName]=useState("")

 useEffect(() => {
    const fetchUsername = async () => {
     
        const username = await AsyncStorage.getItem('username');

       
          setUserName(username);
        }

    fetchUsername();
  }, []);

const Logout=async()=>{
  await AsyncStorage.removeItem("username")
  console.log(userName)
  navigation.navigate("Login")


}



    return(
    
      <View style={{flex:1}}>
      <View style={{flex:1, justifyContent:"flex-end", alignItems:"center" ,borderBottomWidth:1,borderColor:"grey",paddingBottom:15}}>
    
      <View style={{borderRadius:50,width:100,height:100,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,0,0,0.1)",marginBottom:15}}><FontAwesomeIcon className='icon' size={50} icon={faHorse} style={{}} /></View>
      
    <Text style={{fontWeight:"bold", fontSize:18} }> {userName}</Text>
    
      </View>
    



      <View style={{flex:3,}}>
        <DrawerContentScrollView showsVerticalScrollIndicator={false}  >
        <DrawerItem
  label="Homee"
  style={{marginTop:-20}}
  icon={()=> <FontAwesomeIcon className='icon' size={25} icon={faHouse} style={{color:"white"}} />}
  onPress={() => props.navigation.navigate('HomePage')}
/>
<DrawerItem style={{ marginBottom:15}}
  label="SecondPage"
  icon={()=> <FontAwesomeIcon className='icon' size={25} icon={faCircleArrowRight} style={{color:"white"}} />}

  onPress={() => props.navigation.navigate('SecondPage')}
/>

<DrawerItem style={{ marginBottom:15}}
  label="AsyncStorage"
  icon={()=> <FontAwesomeIcon className='icon' size={25} icon={faDatabase} style={{color:"white"}} />}

  onPress={() => props.navigation.navigate('AsyncStorage')}
/>

<DrawerItem style={{ marginBottom:15}}
  label="SQLite"
  icon={()=> <FontAwesomeIcon className='icon' size={25} icon={faServer} style={{color:"white"}} />}

  onPress={() => props.navigation.navigate('SQLite')}
/>

<DrawerItem style={{ marginBottom:15}}
  label="SQLite"
  icon={()=> <FontAwesomeIcon className='icon' size={25} icon={faServer} style={{color:"white"}} />}

  onPress={() => props.navigation.navigate('Notification')}
/>


        </DrawerContentScrollView>
    {/* <View style={{borderTopWidth:1,borderColor:"grey"}}>

<TouchableOpacity onPress={Logout()} style={{ paddingTop:15,paddingBottom:15,flexDirection: "row"

}}><FontAwesomeIcon className='icon' size={25} icon={faCircleArrowRight} style={{color:"white"}} />
  <Text   style={{color:"white",marginLeft:10,padding:3}} onPress={()=>{Logout()}}>  Logout</Text>
</TouchableOpacity>


    </View> */}
      </View>
    
    
    
    
    
    
    
    
    
        
      </View>
    )
    
    
    
    
    }