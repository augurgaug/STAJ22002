import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCariById } from '../../api';
import AppInput from './AppInput';
import * as Linking from 'expo-linking';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons';



export default function CariDetail({route}) {
    const [adres, setAdres]=useState("")
const id=route.params
    const [cari,setCari]=useState([])


     
useEffect(()=>{
    if(cari.length<1){
         const getCari= async()=>{try {
        const cariData = await getCariById(id);
        setCari(cariData);
      } catch (error) {
      alert(    "hata")}
    }
    getCari()}
    
   
    
    setAdres(` ${cari.mahalle} mahallesi  ${cari.sokak} sokak no:${cari.bina_no} ${cari.il } ${cari.ilce} `)
    
            console.log(adres)
            },[cari,id]); 
            return (
    <ScrollView contentContainerStyle ={{ paddingTop:'10%'}}>
      <View>

    <AppInput label="Ad" value={cari.name}/>  
    <AppInput label="Soyad" value={cari.last_name}/>
    <AppInput label="Email" value={cari.email}/>
    <AppInput label="Tel No" value={cari.tel_no}/>
    <AppInput label="Ülke" value={cari.ulke}/>
    <AppInput label="İl" value={cari.il}/>
    <AppInput label="İlçe" value={cari.ilce}/>
    <AppInput label="Mahalle" value={cari.mahalle}/>
    <AppInput label="Sokak" value={cari.sokak}/>
    <AppInput label="Bina No" value={cari.bina_no}/>
    <AppInput label="Daire No" value={cari.daire_no}/>
    <AppInput label="Banka" value={cari.banka}/>
    <AppInput label="İban" value={cari.iban}/>
    <AppInput label="Alacak" value={JSON.stringify(cari.alacak)}/>
    <AppInput label="Borç" value={JSON.stringify(cari.borc)}/> 



{/* <TextInput  multiline={true}
        numberOfLines={4}>{adres}</TextInput> */}

    </View>

    <View style={{flexDirection:"row", justifyContent:"center",paddingVertical:'10%'}}>


      <TouchableOpacity 
        onPress={()=>{Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${adres}`)}}
        style={{borderWidth:2,borderColor:"grey",flexDirection:"row",backgroundColor:"#01A396", padding:15,marginLeft:5, width:'25%',alignItems:"center",borderRadius:12}}>

        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>GİT  </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faLocationDot} style={{color:"white",}} />

    </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>Linking.openURL(`tel:${cari.tel_no}`)}
             style={{borderWidth:2,borderColor:"grey", flexDirection:"row",backgroundColor:"#26A84C", padding:15,marginLeft:30,width:'25%',alignItems:"center", borderRadius:12}}>

      <Text style={{color:"white", fontSize:20,fontWeight:"bold"}}>ARA  </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faPhone} style={{color:"white",}} />

            </TouchableOpacity>
      </View>
    </ScrollView>
  )
}