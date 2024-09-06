import React, { useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity } from 'react-native';
import { getUser } from '../../api';
import {styles} from '../css/listCss'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';







const UserList= ({navigation}) => {
  const [veri,setVeri]=useState([]);
const pageSize=10;
const [page, setPage] = useState(1);
let totalPage=0
const PageNumber=[]


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
   
   <TouchableOpacity style={[styles.pageNumber, i===page &&{backgroundColor:"rgba(61,255,190,1)"}]} onPress={() => setPage(i)} key={i}
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
      <View><View style={styles.header}>
      <Text style={[styles.headerText,{ flex: 1 }]}>#</Text>

        <Text style={styles.headerText}>Kullanıcı Adı</Text>
        <Text style={styles.headerText}>Şifre</Text>
  
      </View>
      <FlatList
        data={paginatedData}
        renderItem={({ item,index }) => (
          <TouchableOpacity  onPress={()=>navigation.navigate('UserDetail',item.id)} style={[styles.row,{ backgroundColor: index % 2 === 0 ? 'white' : '#D7D7D7' }]}>
            <Text style={[styles.column, {flex:1 }]}>{index+1 + (page - 1) * pageSize}</Text>
            <Text style={styles.column}>{item.user_name}</Text>
            <Text style={styles.column}>{item.password}</Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('UserDetail',item.id)} style={[styles.listButton,{ backgroundColor: index % 2 === 0 ? 'grey' : '#444444' }]}>
              <Text style={{color:"white"}}>DETAY</Text> */}
            </TouchableOpacity> 
        )}
        keyExtractor={item => item.id+1}
      /></View>




      
       <View style={styles.paginationView}>
        <TouchableOpacity  onPress={beforePage} disabled={page === 1}>
          <Text style={{ backgroundColor:"rgba(61,255,190,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowLeft} style={{color:"rgba(61,255,190,1)",}} />

          </Text>
        </TouchableOpacity>



        {renderPage()}



        <TouchableOpacity  onPress={nextPage} disabled={page * pageSize >= veri.length}>
          <Text style={{ backgroundColor:"rgba(61,255,190,0.3)", paddingHorizontal:20,paddingVertical:15}}>
          <FontAwesomeIcon className='icon' size={30} icon={faArrowRight} style={{color:"rgba(61,255,190,1)",}} />



          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default UserList;
