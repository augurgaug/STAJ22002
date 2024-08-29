import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFinanceById } from '../../api';
import AppInput from './AppInput';

import {styles} from '../css/detailCss'


export default function FinanceDetail({route}) {
const id=route.params
    const [finance,setFinance]=useState([])


     
useEffect(()=>{
    if(finance.length<1){
         const getFinance= async()=>{try {
        const financeData = await getFinanceById(id);
        setFinance(financeData);
      } catch (error) {
      alert(    "hata")}
    }
    getFinance()}
    
   
    
    
            },[id]); 



         
            return (
    <ScrollView contentContainerStyle ={styles.detailContainer}>
      <View>
      {finance.cari && (
  <>
    <AppInput label="Cari Ad" value={finance.cari.name}/>
    <AppInput label="Cari Soyad" value={finance.cari.last_name}/>
  </>
)}
    <AppInput label="Ödeme Tipi" value={finance.odeme_tipi}/>  
    <AppInput label="Miktar" value={JSON.stringify(finance.miktar)}/>
    <AppInput label="Açıklama" value={finance.aciklama}/>
    <AppInput label="Tarih" value={finance.tarih}/>
   



    </View>

    
    </ScrollView>
  )
}
