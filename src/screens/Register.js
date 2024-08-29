import React, { useState } from 'react'
import {  View, TextInput,StyleSheet,Text,TouchableOpacity, ScrollView  } from 'react-native'
import { createUser } from '../../api'
import RadioForm from 'react-native-simple-radio-button'
import {styles} from '../css/registerCss'
function Register({navigation}) {

  const [user,setUser]=useState({name:"",surname:"",username:"",email:"",birthdate:"",gender:"erkek",password:"",password1:""})


  const [date,setDate]=useState({day:"",month:"",year:""});

  const items=[
   { label:"erkek",value:"erkek"},
    {label:"kadın",value:"kadın"},
  ]
  
const onClick=async()=>{
  setUser({...user,birthdate:date.day+"/"+date.month+"/"+date.year})

console.log(user.birthdate)
console.log(user.gender)
if(!user.username||!user.name||!user.surname||!user.password||!user.password1||!user.email)

{alert("eksik alan")


}
else if(user.password!==user.password1){

  alert("parola uyuşmadı")
}

else if(user.password.length<6){

  alert("parola 6haneden kısa olamaz")
  
}

else{

  try {
    const response = await createUser({
     name:user.name,
     last_name:user.surname,

      user_name: user.username,
 email: user.email,
      password: user.password,
      birth_date: user.birthdate,
      gender:user.gender
    });


    console.log(response); 
    navigation.navigate("Login")

    console.log("basarı")
    

  } 
  catch (error) {
alert("kullanıcı mevcut")
console.log(error)

  }
  } 
}



  return (
    < ScrollView  contentContainerStyle={styles.rgstrContainer1}>

        



    <View style={styles.rgstrContainer2}>
      <Text style={styles.rgstrHeaderText} >Kayıt Ol</Text>




    <View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel}  >Ad:</Text>
      <TextInput onChangeText={(text)=>setUser({...user,name:text })}   style={styles.rgstrTextInput}  placeholder='ad'/> 
      </View>


<View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel} >Soyad:</Text>
<TextInput onChangeText={(text)=>setUser({...user,surname:text })}     style={styles.rgstrTextInput}  placeholder='Soyad'/> 
</View>


<View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel} >Kullanıcı Adı:</Text>
<TextInput onChangeText={(text)=>setUser({...user,username:text })}     style={styles.rgstrTextInput}  placeholder='Kullanıcı Adı'/> 
</View>

<View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel} >Email:</Text>
<TextInput onChangeText={(text)=>setUser({...user,email:text })}     style={styles.rgstrTextInput}  placeholder='Email'/> 
</View>

<View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel} >Doğum Tarihi:</Text>
<TextInput  keyboardType="numeric"  maxLength={2} onChangeText={(text)=>setDate({...date,day:text } )}    style={styles.rgstrTextInputDate}  placeholder='Gün'/> 
<TextInput  keyboardType="numeric" maxLength={2} onChangeText={(text)=>setDate({...date,month:text })}    style={styles.rgstrTextInputDate}  placeholder='Ay'/> 
<TextInput  keyboardType="numeric" maxLength={4} onChangeText={(text)=>setDate({...date,year:text })}    style={styles.rgstrTextInputDate}  placeholder='Yıl'/> 
</View>








<View style={styles.rgstrInputview}>
      <Text style={styles.rgstrTextLabel} >Cinsiyet:</Text>
      <View style={{
      width:' 60%',margin:10,paddingHorizontal:5,}}>
  <RadioForm    buttonSize={20}
    formHorizontal labelHorizontal={false} 
    buttonColor="#E3E3E3" selectedButtonColor="black" 
    labelColor="#E3E3E3" radio_props={items} 
    initial={user.gender} onPress={(value)=>setUser({...user,gender:value })}></RadioForm>


</View></View> 


    <View  style={styles.rgstrInputview}>
<Text style={styles.rgstrTextLabel} >Parola:</Text>
<TextInput onChangeText={(text)=>setUser({...user,password:text })}   secureTextEntry={true}   style={styles.rgstrTextInput} placeholder='Sifre'/>

</View>
<View  style={styles.rgstrInputview}>
<Text style={styles.rgstrTextLabel} >Parola Tekrar:</Text>
<TextInput onChangeText={(text)=>setUser({...user,password1:text })}   secureTextEntry={true}   style={styles.rgstrTextInput} placeholder='Sifre Tekrar'/>

</View>


<View >

    <TouchableOpacity >
         <Text style={styles.rgstrButton} onPress={onClick}>KAYIT OL</Text> 
         
         </TouchableOpacity>
</View>
    </View>
    </ScrollView>
  )
}

export default Register


