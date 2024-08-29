import React, { useEffect, useState } from 'react'
import { ScrollView,TouchableOpacity,  StyleSheet, Text, View,ImageBackground  } from 'react-native'
import SecondPage from './SecondPage';
import { fetchCariCount, fetchFinanceCount, fetchFinanceGeHCount, fetchFinanceGiHCount, fetchFinanceKKCount, fetchFinanceNOCount, fetchFinanceNTCount, fetchFinancePTCount, fetchUserCount, } from '../../api';
import Dashboard from '../components/Dashboard';
import ThirthPage from './ThirthPage';
import UserList from './UserList';
import CariList from './CariList';
import FinanceList from './FinanceList';
import {styles} from '../css/homepageCss'
function HomePage({navigation, route}) {

const [userCount, setUserCount]=useState(0)
const [cariCount, setCariCount]=useState(0)
const [financeCount, setFinanceCount]=useState(0)
const [nTahsilatCount, setNTahsilatCount]=useState(0)
const [nOdemeCount, setNOdemeCount]=useState(0)
const [giHavaleCount, setGiHavaleCount]=useState(0)
const [geHavaleCount, setGeHavaleCount]=useState(0)
const [pTahsilatCount, setpTahsilatCount]=useState(0)
const [kKodemeCount, setKKOdemeCount]=useState(0)

useEffect(()=>{
CountUser=async()=>{
    try {
        const count =await fetchUserCount();
        setUserCount(count)

      } catch (error) {
        alert("hata")
      }
}

CountCari=async()=>{
    try {
        const count =await fetchCariCount();
        setCariCount(count)

      } catch (error) {
        alert("hata")
      }
}


CountFinance=async()=>{
    try {
        const count =await fetchFinanceCount();
        setFinanceCount(count)

        const nOdeme =await fetchFinanceNOCount();
        setNOdemeCount(nOdeme)

        const nTahsilat  =await fetchFinanceNTCount();
        setNTahsilatCount(nTahsilat)

        const giHavale =await fetchFinanceGiHCount();
        setGiHavaleCount(giHavale)

        const geHavale =await fetchFinanceGeHCount();
        setGeHavaleCount(geHavale)

        const kKodeme =await fetchFinanceKKCount();
        setKKOdemeCount(kKodeme)

        const  posTahsilat=await fetchFinancePTCount();
        setpTahsilatCount(posTahsilat)

        

      } catch (error) {
        alert("hata")
      }
}

CountUser();
CountCari();
CountFinance();
},[])
  


  return (<>
   
   
    <ScrollView   style={styles.hmpgView} >
    <ImageBackground 

source={{ uri: 'data:image/sjpeg;basse64,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' }} 
  style={styles.hmpgImage}
      resizeMode="cover">



<Dashboard onPress={()=>{navigation.navigate(UserList)}} ad="Kullanıcılar" count={userCount} cardBackgroundColor="#00bfff" buttonBackgroundColor="#2D96BC"/>
<Dashboard onPress={()=>{navigation.navigate(CariList)}} ad="Cariler" count={cariCount} cardBackgroundColor="#36A65A" buttonBackgroundColor="#257740"/>
<Dashboard onPress={()=>{navigation.navigate(FinanceList)}} ad="Ödemeler" count={financeCount} cardBackgroundColor="#F39D14" buttonBackgroundColor="#BE7800"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Nakit Ödemeler" count={nTahsilatCount} cardBackgroundColor="#DD4A3A" buttonBackgroundColor="#AA392A"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Nakit Tahsilatlar" count={nOdemeCount} cardBackgroundColor="#9E9E9E" buttonBackgroundColor="#607D8B"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Giden Havaleler" count={giHavaleCount} cardBackgroundColor="#c6e2ff" buttonBackgroundColor="#9fb6cd"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Gelen Havaleler" count={geHavaleCount} cardBackgroundColor="#ff6347" buttonBackgroundColor="#cd4f39"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Pos Tahsilatlar" count={pTahsilatCount} cardBackgroundColor="#9b30ff" buttonBackgroundColor="#7d26cd"/>
<Dashboard onPress={()=>{navigation.navigate(SecondPage)}} ad="Kredi Kartı ile Ödemeler" count={kKodemeCount} cardBackgroundColor="#00f5ff" buttonBackgroundColor="#00c5cd"/>
<View >
    <TouchableOpacity onPress={()=>{navigation.navigate('SecondPage')}}>
         <Text style={styles.hmpgButton}>2.sayfa 
         </Text> 
         </TouchableOpacity>
</View>
</ImageBackground>

    </ScrollView></>
  )
}

export default HomePage
