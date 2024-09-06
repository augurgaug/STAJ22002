import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { getCari } from '../../api';
import {openURL,} from 'expo-linking'
import CariDetail from '../components/CariDetail';
import {styles} from '../css/listCss'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';






const CariList= ({navigation, route}) => {
  const pageSize=10;
const [page, setPage] = useState(1);
let totalPage=0
const PageNumber=[]
  const [veri,setVeri]=useState([]);
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


    const nextPage=()=>{
      if (page * pageSize < veri.length) {
      setPage(page + 1);
    }
    }
    
    
    const beforePage=()=>{
      if (page >1) {
      setPage(page - 1);
    }
    }
    
    
    const renderPage=()=>{
    totalPage=Math.ceil(veri.length/pageSize)
    for(let i=1; i<=totalPage;i++){

      PageNumber.push(
       
       <TouchableOpacity style={[styles.pageNumber, i===page &&{backgroundColor:"rgba(105,105,105,1)"}]} onPress={() => setPage(i)} key={i}
    >
    
    <Text style={[{ fontSize:20,color:"grey"}, i===page && {color:"white"}]}>{i}</Text>
    
        </TouchableOpacity>
        
      )
    }
    return PageNumber;
    
    
    }
    
    
    
    
    
    
    
    
    
    
    const paginatedData = veri ? veri.slice((page - 1) * pageSize, page * pageSize) : [];



  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={[styles.headerText,{flex:1}]}>#</Text>

        <Text style={styles.headerText}>Ad</Text>
        <Text style={styles.headerText}>Soyad</Text>
  
      </View>
      <FlatList
        data={paginatedData}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={[styles.row,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
            <Text style={[styles.column,{flex:1}]}>{index+1 + (page - 1) * pageSize}</Text>
            <Text style={styles.column}>{item.name}</Text>
            <Text style={styles.column}>{item.last_name}</Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={[styles.listButton,{ backgroundColor: index % 2 === 0 ? 'grey' : '#444444' }]}>
              <Text style={{color:"white"}}>DETAY</Text> */}
            </TouchableOpacity>
          
        )}
        keyExtractor={item => item.id}
      />

<View style={styles.paginationView}>
        <TouchableOpacity  onPress={beforePage} disabled={page === 1}>
          <Text style={{ backgroundColor:"rgba(95,95,95,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowLeft} style={{color:"rgba(54,54,54,1)",}} />

          </Text>
        </TouchableOpacity>



        {renderPage()}



        <TouchableOpacity  onPress={nextPage} disabled={page * pageSize >= veri.length}>
          <Text style={{ backgroundColor:"rgba(95,95,95,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowRight} style={{color:"rgba(54,54,54,1)",}} />



          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};
export default CariList;


