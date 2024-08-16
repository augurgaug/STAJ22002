import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'
import React, {useState} from 'react'
import { loginUser } from '../../api';

export default function Login({navigation}) {
    const[giris, setGiris]= useState({ad:"aug", sifre:"0000"})
    const [user, setUser]=useState({user_name:"",password:""})
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
            console.log(loggedInUser);
            navigation.navigate("HomePage",{user})
          } catch (error) {
            alert("Kullanıcı Adı veya Şifre Hatalı")
          }}
       
    }
  return (

    <View style={styles.container}>
        



    <View style={styles.container2}>
      <Text style={styles.text} >Login</Text>




    <View style={styles.View1}>
      <Text style={styles.text1} >Ad:</Text>
<TextInput  value={user.user_name} onChangeText={handleChance} style={styles.textInput}  placeholder='ad'/> 

</View>




    <View  style={styles.View1}>
<Text style={styles.text1}>Parola:</Text>
<TextInput secureTextEntry={true} value={user.password} onChangeText={handleChance1} style={styles.textInput} placeholder='sifre'/>

</View>

<View >

    <TouchableOpacity onPress={handleClick}>
         <Text style={styles.button}>Giriş Yap</Text> 
         
         </TouchableOpacity>
</View>
    </View>
    </View>
  )
}









const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#454545",
        alignItems:'center',
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
        margin:10,
        marginTop:20,
        width:55,
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