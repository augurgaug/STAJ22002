import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { getCari } from '../../api';
import {openURL,} from 'expo-linking'
import CariDetail from '../components/CariDetail';
import {styles} from '../css/listCss'








const CariList= ({navigation, route}) => {
  const [veri,setVeri]=useState();
  useEffect(()=>{

    const getfnc =async()=>{
    try{
      const response= await getCari();
      setVeri(response)
    
        console.log(response);
      } catch (error) {
        alert(error.message)
      }
    }
    getfnc()
    },[])


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={[styles.headerText,{flex:1}]}>#</Text>

        <Text style={styles.headerText}>Ad</Text>
        <Text style={styles.headerText}>Soyad</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={[styles.row,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
            <Text style={[styles.column,{flex:1}]}>{index+1}</Text>
            <Text style={styles.column}>{item.name}</Text>
            <Text style={styles.column}>{item.last_name}</Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={[styles.listButton,{ backgroundColor: index % 2 === 0 ? 'grey' : '#444444' }]}>
              <Text style={{color:"white"}}>DETAY</Text> */}
            </TouchableOpacity>
          
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default CariList;


