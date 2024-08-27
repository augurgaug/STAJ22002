import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoon,faLightbulb,faSun,faHouse} from '@fortawesome/free-solid-svg-icons'
export default function TestAsyncStorageDb() {
const [mode,setMode]=useState();
const [iconn,setIconn]=useState(faHouse);
const [modeText,setModeText]=useState();
const [buttonMode,setButtonMode]=useState();
// const addData=async()=>{

//   try{
// await AsyncStorage.setItem('key', value)
//   }
//   catch(error){ console.log(error)}
// }

// const getData=async()=>{
// try{
//  const data= await AsyncStorage.getItem("key");
//  if(data === null) {alert("veri bulunamadı")}
//  else{console.log(data)}
  
// }
// catch(e) {console.log(e)}


// }

// const deleteData=async()=>{


//   try{
//     await AsyncStorage.removeItem("key")
//     console.log("veri silindi")
//   }
//   catch(err){
//     console.log(err)
//   }
// }



// const updateData=async()=>{
//   try{
//     const data= await AsyncStorage.mergeItem("key",value2)
//   }
//   catch(e){console.log(e)}
// }


// const getAllKeys=async()=>{
  
//   let keys=[]

//   try{
//     keys= await AsyncStorage.getAllKeys()
//   }
//   catch(e){console.log(e)}
// }

//  const GetMultipe=async()=>{
//   let datas 
//   try{datas=AsyncStorage.multiGet(['key','key2'])}
//   catch(error){
//     console.log(error)
//   }
//  }












 const Background=async()=>{

  const mod= await AsyncStorage.getItem("mode")
  const modText= await AsyncStorage.getItem("modeText")
  const modButton= await AsyncStorage.getItem("ButtonMode")

  setMode(mod)
  setModeText(modText)
  setButtonMode(modButton)




 }

  const setBackground=async()=>{


 const darkMode="grey"
const lightMode="white"
const yellowMode="yellow"
const darkModeText="Dark Mode"
const lightModeText="Light Mode"
const yellowModeText="Yellow Mode"

    try{
  let mod= await AsyncStorage.getItem("mode")

      if(mod===yellowMode){
      await AsyncStorage.setItem("mode",darkMode) 
  await AsyncStorage.setItem("modeText",lightModeText)
  await AsyncStorage.setItem("ButtonMode",lightMode)

  setMode(darkMode);
        setModeText(lightModeText);
        setButtonMode(lightMode);
        setIconn(faLightbulb);
      }
      else if(mod===darkMode){
        await AsyncStorage.setItem("mode",lightMode) 
        await AsyncStorage.setItem("modeText",yellowModeText)
  await AsyncStorage.setItem("ButtonMode",yellowMode)

  setMode(lightMode);
        setModeText(yellowModeText);
        setButtonMode(yellowMode);
        setIconn(faSun);
      }

else if (mod===lightMode){
 await AsyncStorage.setItem("mode",yellowMode) 
 await AsyncStorage.setItem("modeText",darkModeText)
 await AsyncStorage.setItem("ButtonMode",darkMode)

 setMode(yellowMode);
 setModeText(darkModeText);
 setButtonMode(darkMode);
 setIconn(faMoon);
}
else{
  AsyncStorage.setItem("mode",lightMode)
}

Background()
    }
    catch(e){
      console.log(e)
    }
  }
useEffect(()=>{
  Background()
},[])

  return (
    <View style={[{flex:1,justifyContent:"center",alignItems:"center", backgroundColor:mode}]}>
    
      <Text>AsyncStorage</Text>

      <TouchableOpacity onPress={setBackground} style={{borderWidth:1,borderColor:"blue",backgroundColor:buttonMode,opacity:0.8, width:'50%', alignItems:"center", padding:10, borderRadius:3}} >
<Text>{modeText}
<FontAwesomeIcon className='icon' size={25} icon={iconn} style={{color:"blue"}}/>
</Text></TouchableOpacity>
</View>
  )
}


