import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getCari } from '../../api';









const CariList= () => {
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

        <Text style={styles.headerText}>Kullanıcı Adı</Text>
        <Text style={styles.headerText}>Şifre</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index+1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.last_name}</Text>
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
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    cell: {
      flex: 1,
    },
  });