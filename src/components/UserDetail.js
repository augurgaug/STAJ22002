import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserById } from '../../api';
import AppInput from './AppInput';

import {styles} from '../css/detailCss'


export default function UserDetail({route}) {
const id=route.params
    const [user,setUser]=useState([])


     
useEffect(()=>{
    if(user.length<1){
         const getUser= async()=>{try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
      alert(    "hata")}
    }
    getUser()}
    
   
    
    
            },[id]); 



         
            return (
    <ScrollView contentContainerStyle ={styles.detailContainer}>
      <View>

    <AppInput label="Ad" value={user.name}/>  
    <AppInput label="Soyad" value={user.last_name}/>
    <AppInput label="Kullanıcı Adı" value={user.user_name}/>
    <AppInput label="Email" value={user.email}/>
    <AppInput label="Şifre" value={user.password}/>
    <AppInput label="Doğum Tarihi" value={user.birth_date}/>
    <AppInput label="Cinsiyet" value={user.gender}/>



    </View>

    
    </ScrollView>
  )
}
