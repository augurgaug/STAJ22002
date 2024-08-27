import React, { useState } from 'react'
import {  View, TextInput,StyleSheet,Text,TouchableOpacity, ScrollView  } from 'react-native'
import { createUser } from '../../api'
import RadioForm from 'react-native-simple-radio-button'
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
    < ScrollView  contentContainerStyle={{ 
      backgroundColor:"#454545", alignItems:'center'}}>

        



    <View style={styles.container2}>
      <Text style={styles.text} >REGISTER</Text>




    <View style={styles.View1}>
      <Text style={styles.text1}  >Ad:</Text>
      <TextInput onChangeText={(text)=>setUser({...user,name:text })}   style={styles.textInput}  placeholder='ad'/> 
      </View>


<View style={styles.View1}>
      <Text style={styles.text1} >Soyad:</Text>
<TextInput onChangeText={(text)=>setUser({...user,surname:text })}     style={styles.textInput}  placeholder='ad'/> 
</View>


<View style={styles.View1}>
      <Text style={styles.text1} >Kullanıcı Adı:</Text>
<TextInput onChangeText={(text)=>setUser({...user,username:text })}     style={styles.textInput}  placeholder='ad'/> 
</View>

<View style={styles.View1}>
      <Text style={styles.text1} >Email:</Text>
<TextInput onChangeText={(text)=>setUser({...user,email:text })}     style={styles.textInput}  placeholder='ad'/> 
</View>

<View style={styles.View1}>
      <Text style={styles.text1} >Doğum Tarihi:</Text>
<TextInput  keyboardType="numeric"  maxLength={2} onChangeText={(text)=>setDate({...date,day:text } )}    style={styles.textInput3}  placeholder='Gün'/> 
<TextInput  keyboardType="numeric" maxLength={2} onChangeText={(text)=>setDate({...date,month:text })}    style={styles.textInput3}  placeholder='Ay'/> 
<TextInput  keyboardType="numeric" maxLength={4} onChangeText={(text)=>setDate({...date,year:text })}    style={styles.textInput3}  placeholder='Yıl'/> 
</View>








<View style={styles.View1}>
      <Text style={styles.text1} >Cinsiyet:</Text>
      
  <RadioForm    buttonSize={20}    formHorizontal labelHorizontal={false} buttonColor="grey" selectedButtonColor="black" labelColor="grey" radio_props={items} initial={user.gender} onPress={(value)=>setUser({...user,gender:value })}></RadioForm>
</View>


    <View  style={styles.View1}>
<Text style={styles.text1} >Parola:</Text>
<TextInput onChangeText={(text)=>setUser({...user,password:text })}   secureTextEntry={true}   style={styles.textInput} placeholder='sifre'/>

</View>
<View  style={styles.View1}>
<Text style={styles.text1} >Parola Tekrar:</Text>
<TextInput onChangeText={(text)=>setUser({...user,password1:text })}   secureTextEntry={true}   style={styles.textInput} placeholder='sifre'/>

</View>


<View >

    <TouchableOpacity >
         <Text style={styles.button} onPress={onClick}>KAYIT OL</Text> 
         
         </TouchableOpacity>
</View>
    </View>
    </ScrollView>
  )
}

export default Register


const styles=StyleSheet.create({

  container1:{
    flex:1,
    backgroundColor:"#454545",
    alignItems:"center"
},
  container2:{
      height:"auto",
      flex:0.9,
      minHeight:400,

      borderRadius:16,
      marginTop:'10%',
      width:'90%',
      alignItems:'center',
      backgroundColor:"#C9C9C9",
  },
  

  textInput:{
      backgroundColor:"#999888",
      width:' 60%',
      margin:10,
      borderWidth:1,
      borderColor:"white",
      borderRadius:4,
      padding:5,
      
  },



  textInput3:{
    backgroundColor:"#999888",
    width:' 16.4%',
    margin:10,
    borderWidth:1,
    borderColor:"white",
    borderRadius:4,
    padding:5,
    textAlign:"center"
    
},



  
  text:{fontSize:50,
     textAlign: "center",
      padding:50,
      color:901,
      backgroundColor:"#999999",
      width:' 100%',
      marginBottom:50,
borderTopLeftRadius:16,
borderTopRightRadius:16
  },

  View1:{ width:'100%',
      flexDirection:"row"
  },
  text1:{textAlign:"center",
      justifyContent:"center",
      margin:5,
      marginTop:20,
      width:80,
      fontSize:17
  },
  button:{
      margin:30,
backgroundColor:"grey",
borderWidth:1,
borderColor:"white",
borderRadius:12,
padding:10,
alignItems:"center",
color:"white"


  }
})