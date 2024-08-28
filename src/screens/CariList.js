import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { getCari } from '../../api';
import {openURL,} from 'expo-linking'
import CariDetail from '../components/CariDetail';








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
      <Text style={styles.headerText}>#</Text>

        <Text style={styles.headerText}>Ad</Text>
        <Text style={styles.headerText}>Soyad</Text>
        <Text style={styles.headerText}>Detay</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index+1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.last_name}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={{alignItems:"center",borderRadius:8,flex:1,backgroundColor:"grey", paddingVertical:5}}>
              <Text style={{color:"white"}}>DETAY</Text>
            </TouchableOpacity>
          
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};



export default CariList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#f1f8ff',
      padding: 10,
    },
    headerText: {
      flex: 1,
      fontWeight: 'bold'
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    cell: {
      flex: 1
    },
  });