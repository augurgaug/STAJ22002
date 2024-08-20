import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getUser } from '../../api';









const UserList= () => {
  const [veri,setVeri]=useState();
  useEffect(()=>{

    const getfnc =async()=>{
    try{
      const response= await getUser();
      setVeri(response)
    
        console.log(response);
      } catch (error) {
        alert(error.message)
      }
    }
    getfnc()
    },[])


  return (
    <View style={styles.view}>
      <View style={styles.title}>
      <Text style={styles.titleText,{ flex: 0.5 }}>#</Text>

        <Text style={styles.titleText}>Kullanıcı Adı</Text>
        <Text style={styles.titleText}>Şifre</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <View style={styles.row}>
            <Text style={styles.column, {flex: 0.5 }}>{index+1}</Text>
            <Text style={styles.column}>{item.user_name}</Text>
            <Text style={styles.column}>{item.password}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};



export default UserList;


const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    flexDirection: 'row',
    backgroundColor: '#f1f8ff',
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  column: {
    flex: 1,
  },
});