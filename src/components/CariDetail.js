import { View, Text, TextInput, ScrollView, TouchableOpacity,Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCariById } from '../../api';
import AppInput from './AppInput';
import * as Linking from 'expo-linking';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../css/detailCss'


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
    
            },[cari,id]); 



            const openMaps = () => {
              const url = Platform.select({
                ios: `http://maps.apple.com/?q=${adres}`,
                android: `https://www.google.com/maps/search/?api=1&query=${adres}` 
              });
              Linking.openURL(url);
            };
            return (
    <ScrollView contentContainerStyle ={styles.detailContainer}>
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


    </View>

    <View style={styles.detailButtonView}>



      <TouchableOpacity 
        onPress={()=>{openMaps()}}
        style={styles.detailGoButton}>

        <Text style={styles.detailButtonText}>GİT  </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faLocationDot} style={{color:"white",}} />

    </TouchableOpacity>



            <TouchableOpacity 
            onPress={()=>Linking.openURL(`tel:${cari.tel_no}`)}
             style={styles.detailCallButton}>

      <Text style={styles.detailButtonText}>ARA  </Text>
      <FontAwesomeIcon className='icon' size={30} icon={faPhone} style={{color:"white",}} />

            </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
