import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { getCari } from '../../../api';
import {openURL,} from 'expo-linking'
import CariDetail from '../CariDetail';
import {styles} from './css/CSScariList'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';




 
 
const CariList1= ({navigation, route}) => {
  const [alacak,setAlacak]=useState({max:"999999999999999",min:"0"});
  const pageSize=10;
const [page, setPage] = useState(1);
let totalPage=0
const PageNumber=[]
  const [data,setData]=useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(()=>{

    const getfnc =async()=>{
    try{
      const response= await getCari();
      setData(response)
      setFilteredData(response);
      } catch (error) {
        alert(error.message)
      }
    }
    getfnc()
    },[])


    const nextPage=()=>{
      if (page * pageSize < filteredData.length) {
      setPage(page + 1);
    }
    }
    
    
    const beforePage=()=>{
      if (page >1) {
      setPage(page - 1);
    }
    }
    
    
    const renderPage=()=>{
    totalPage=Math.ceil(filteredData.length/pageSize)
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
    
    
    
    
    const Filter=()=>{
      // if(alacak.max===""){

      //   setAlacak({...alacak,max:"9999999999"})

      // }


      // if( !alacak.min){

      //   setAlacak({...alacak,min:"0"})

      // }

      if(!alacak.max || !alacak.min){

        alert("Bir Aralık belirtin")
      }
else{
      const filterData= data.filter(fd=>fd.alacak>=parseFloat(alacak.min)&& fd.alacak<=parseFloat(alacak.max))
      setFilteredData(filterData);
      setPage(1);
    }
    
    
    }
    
    
    
    
    
    const paginatedData = filteredData ? filteredData.slice((page - 1) * pageSize, page * pageSize) : [];



  return (
    <View style={styles.container}>


      
      <FlatList

ListHeaderComponent={<View>
<View style={styles.Filter}>


  <View style={styles.filterItem}>

    <Text style={styles.filterLabel} >Max Alacak</Text>
<TextInput style={styles.filterInput}  onChangeText={(text)=>setAlacak({...alacak,max:text })} placeholder='max alacak'></TextInput>
</View>


<View style={styles.filterItem}>

<Text style={styles.filterLabel} >Min Alacak</Text>
<TextInput style={styles.filterInput}  onChangeText={(text)=>setAlacak({...alacak,min:text })} placeholder='min alacak'></TextInput>
</View>
<View style={{alignItems:"flex-end"}}>

<TouchableOpacity onPress={()=>{Filter()}}  style={styles.filterButton} >
  <Text style={{color:"white", fontSize:18}}>Ara</Text>
</TouchableOpacity>
</View>
</View>


</View>}



        data={paginatedData}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('CariDetail',item.id)} style={[styles.card,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
         
         
         
         
          <View style={styles.item}>
          <Text style={[styles.column,{flex:1}]}>{index+1 + (page - 1) * pageSize}</Text>
          </View>


          <View style={styles.item}>
          <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}  {item.last_name}</Text> 
        </View>




<View style={styles.item}>
<Text style={{flex:1}}>Telefon</Text>
<Text style={{flex:2}}>{item.tel_no}</Text>       
</View>

<View style={styles.item}>
<Text style={{flex:1}}>Mail</Text>
<Text style={{flex:2}}>{item.email}</Text>       
</View>




<View style={styles.item}>
<Text style={{flex:1}}>Iban</Text>
<Text style={{flex:2}}>{item.iban}</Text>       
</View>

<View style={styles.item}>
<Text style={{flex:1}}>Borc</Text>
<Text style={[{flex:2},{fontWeight:"bold"}]}>{item.borc} TRY</Text>       
</View>

<View style={styles.item}>
<Text style={{flex:1}}>Alacak</Text>
<Text style={[{flex:2},{fontWeight:"bold"}]}>{item.alacak} TRY</Text>       
</View>

          
          
       
            </TouchableOpacity>
          
        )}
        keyExtractor={item => item.id}

        // ListFooterComponent={
    

        // }
      />

<View>

          <View style={styles.paginationView}>
        <TouchableOpacity  onPress={beforePage} disabled={page === 1}>
          <Text style={{ backgroundColor:"rgba(95,95,95,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowLeft} style={{color:"rgba(54,54,54,1)",}} />

          </Text>
        </TouchableOpacity>



        {renderPage()}



        <TouchableOpacity  onPress={nextPage} disabled={page * pageSize >= filteredData.length}>
          <Text style={{ backgroundColor:"rgba(95,95,95,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowRight} style={{color:"rgba(54,54,54,1)",}} />



          </Text>
        </TouchableOpacity>
      </View>

    </View>
    </View>
  );
};
export default CariList1;


