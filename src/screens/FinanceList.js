import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getFinance } from '../../api';
import {styles} from '../css/listCss'








const FinanceList= ({navigation}) => {
  const [veri,setVeri]=useState();
  useEffect(()=>{

    const getfnc =async()=>{
    try{
      const response= await getFinance();
      setVeri(response)
    
        console.log(response);
      } catch (error) {
        alert(error.message)
      }
    }
    getfnc()
    },[])

const i =0;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={[styles.headerText,{flex:1}]}>#</Text>
        <Text style={styles.headerText}>Ad</Text>
        <Text style={styles.headerText}>Soyad</Text>
        <Text style={styles.headerText}>Miktar</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('FinanceDetail',item.id)} style={[styles.row,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
            <Text style={[styles.column,{flex:1}]}>{index+1}</Text>
            <Text style={styles.column}>{item.cari.name}</Text>
            <Text style={styles.column}>{item.cari.last_name}</Text>
            <Text style={styles.column}>{item.miktar}</Text>

            {/* <TouchableOpacity onPress={()=>navigation.navigate('FinanceDetail',item.id)} style={[styles.listButton,{ backgroundColor: index % 2 === 0 ? 'grey' : '#444444' }]}>
              <Text style={{color:"white"}}>DETAY</Text> */}
            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};



export default FinanceList;







