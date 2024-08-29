import React, { useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity } from 'react-native';
import { getUser } from '../../api';
import {styles} from '../css/listCss'









const UserList= ({navigation}) => {
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
    console.log(veri)
    },[])


  return (
    <View style={styles.view}>
      <View style={styles.header}>
      <Text style={[styles.headerText,{ flex: 1 }]}>#</Text>

        <Text style={styles.headerText}>Kullanıcı Adı</Text>
        <Text style={styles.headerText}>Şifre</Text>
  
      </View>
      <FlatList
        data={veri}
        renderItem={({ item,index }) => (
          <TouchableOpacity  onPress={()=>navigation.navigate('UserDetail',item.id)} style={[styles.row,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
            <Text style={[styles.column, {flex:1 }]}>{index+1}</Text>
            <Text style={styles.column}>{item.user_name}</Text>
            <Text style={styles.column}>{item.password}</Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('UserDetail',item.id)} style={[styles.listButton,{ backgroundColor: index % 2 === 0 ? 'grey' : '#444444' }]}>
              <Text style={{color:"white"}}>DETAY</Text> */}
            </TouchableOpacity> 
        )}
        keyExtractor={item => item.id+1}
      />
    </View>
  );
};



export default UserList;

