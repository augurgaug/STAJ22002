import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { loginUser, updateUserToken } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../css/loginCss';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import {registerForPushNotificationsAsync} from '../components/notifications/Notifications'

export default function Login({navigation}) {
    const[giris, setGiris]= useState({ad:"aug", sifre:"0000"})
    const [user, setUser]=useState({user_name:"aug",password:"111111"})
    const [expoPushToken, setExpoPushToken] = useState('');
    const [token, setToken]=useState('');
    // const[sifre, setSifre]=useState("");
    // const[ad, setAd]=useState("");


useEffect(()=>{

  registerForPushNotificationsAsync()
  .then(token => setExpoPushToken(token ?? ''))
  .catch((error) => setExpoPushToken(`${error}`));

},[])






    const handleChance=(name)=>{
       setUser({...user, user_name:name})
    }

    const handleChance1=(pswd)=>{
        setUser({...user, password:pswd}) 
    }


//     handleClick11=()=>{

//         if(giris.ad===ad && giris.sifre===sifre){

//             navigation.navigate("HomePage",{ad,sifre})
//         }
//         else{
// console.log(error.message)

//         }
       
//     }


    handleClick= async()=>{

if(!user.user_name && !user.password){
    alert("Lütfen Alanları Doldurun")
}
        else if(!user.user_name)
        {alert("Kullanıcı Adı Alanı Boş Bırakılamaz")}
        else if(!user.password){
            alert("Şifre Alanı Boş Bırakılamaz")
        }
        else{
        try {
            const loggedInUser = await loginUser(user);
            await AsyncStorage.setItem('username', user.user_name);
            console.log(loggedInUser);
            navigation.navigate("DrawNavigate",{user})

           

            await updateUserToken(loggedInUser.id, {
              push_token:expoPushToken,
          
            });









          } catch (error) {
            alert("Kullanıcı Adı veya Şifre Hatalı")
          }}
       
    }
  return (

    <ScrollView contentContainerStyle={styles.lgnContainer}>
        



    <View style={styles.logContainer}>
      <Text style={styles.lgnHeaderText} >Giriş Yap</Text>
      <Text style={{fontSize:40}} >⭕⭕⭕</Text>
      <Text style={{marginTop:10}} >or use your account</Text>




    <View style={styles.lgnViewInput}>
<TextInput  value={user.user_name} onChangeText={handleChance} style={styles.lgnTextInput}  placeholder='Kullanıcı Adı'/> 

</View>




    <View  style={styles.lgnViewInput}>
<TextInput secureTextEntry={true} value={user.password} onChangeText={handleChance1} style={styles.lgnTextInput} placeholder='Şifre'/>

</View>

<View >

    <TouchableOpacity onPress={handleClick}>
         <Text style={styles.lgnButton}>Giriş Yap</Text> 
         
         </TouchableOpacity>
</View>



    </View>
















    <View style={[styles.rgstrContainer,{marginTop:0, backgroundColor:"#F54336", justifyContent:"center",alignItems:"center"}]}>
      <Text style={styles.rgstrHeaderText} >MERHABA!</Text>
      <Text style={styles.rgstrText} >Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın</Text>




   



<View >

    <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
         <Text style={styles.rgstrButton}>Kayıt Ol</Text> 
         
         </TouchableOpacity>
</View>
    </View>
    </ScrollView>
  )
}









