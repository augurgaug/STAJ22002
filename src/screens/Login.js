import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'
import React, {useState} from 'react'
import { loginUser } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../css/login';
export default function Login({navigation}) {
    const[giris, setGiris]= useState({ad:"aug", sifre:"0000"})
    const [user, setUser]=useState({user_name:"aug",password:"111111"})
    // const[sifre, setSifre]=useState("");
    // const[ad, setAd]=useState("");


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
          } catch (error) {
            alert("Kullanıcı Adı veya Şifre Hatalı")
          }}
       
    }
  return (

    <View style={styles.lgnContainer}>
        



    <View style={styles.lgnContainer2}>
      <Text style={styles.lgnText} >Login</Text>




    <View style={styles.lgnView1}>
      <Text style={styles.lgnText1} >Ad:</Text>
<TextInput  value={user.user_name} onChangeText={handleChance} style={styles.lgnTextInput}  placeholder='ad'/> 

</View>




    <View  style={styles.lgnView1}>
<Text style={styles.lgnText1}>Parola:</Text>
<TextInput secureTextEntry={true} value={user.password} onChangeText={handleChance1} style={styles.lgnTextInput} placeholder='sifre'/>

</View>

<View >

    <TouchableOpacity onPress={handleClick}>
         <Text style={styles.lgnButton}>Giriş Yap</Text> 
         
         </TouchableOpacity>
</View>


<View >

    <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
         <Text style={styles.lgnButton}>Kayıt Ol</Text> 
         
         </TouchableOpacity>
</View>
    </View>
    </View>
  )
}









