import { View, Text, Button,TextInput,ScrollView,  TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

export default function UserTable() {


const [dark,setDark]=useState({backgroundColor:""})
  const [isDark,setIsDark]=useState();
  const [users, setUsers] = useState([]);
    const [createUser,setCreateUser]=useState({name:"", age:""});


    
  const Sqlitedb = async () => {
    const db = await SQLite.openDatabaseAsync('SQLiteDb.db');
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);
    `);

    const getUsers = await db.getAllAsync('SELECT * FROM users');
    setUsers(getUsers);
    console.log(" users: ", getUsers);
  };

  const addUser = async () => {

    if(!createUser.name || !createUser.age){alert("tüm alanları doldur")}

    else
   { const db = await SQLite.openDatabaseAsync('SQLiteDb.db');
    await db.runAsync('INSERT INTO users (Name, Age) VALUES (?, ?)', [createUser.name, createUser.age]);
    setCreateUser("")

    Sqlitedb();
    console.log(createUser)}
  };

  const deleteUser = async () => {
    Sqlitedb();
    const db = await SQLite.openDatabaseAsync('SQLiteDb.db');
    await db.runAsync('DELETE FROM users');
    Sqlitedb(); 
  };

  useEffect(() => {
    Sqlitedb();
  }, []);
const darkmode=()=>{
if(isDark===false){
  setDark({ backgroundColor: 'grey' })
  console.log(dark)
  setIsDark(true)
}
else{
  setDark({ backgroundColor: 'white' })
  setIsDark(false)
  console.log(dark)


}

}
  return ( 
    <ScrollView contentContainerStyle={[{alignItems:"center", justifyContent:"center",flex:1},dark]}> 
        <TextInput value={createUser.name} style={{width:'70%', padding:10, borderWidth:1}} placeholder="Kullanıcı Ekle" onChangeText={(text)=>{setCreateUser({...createUser,name:text})}}/>
        <TextInput value={createUser.age} style={{marginTop:30,width:'70%', padding:10, borderWidth:1}} placeholder="yaş ekle" onChangeText={(text)=>{setCreateUser({...createUser,age:text})}}/>

    

     <View style={{width:'50%'}}>

      <TouchableOpacity style={{marginTop:30,width:'100%', borderWidth:1,borderRadius:6, alignItems: "center", borderColor:"grey",backgroundColor:"rgba(0,0,255,0.3)", justifyContent:"center", height:40}} onPress={() => deleteUser()}>
      <Text>Sil</Text>
        
      </TouchableOpacity>
     </View>


     <View style={{width:'50%'}}>

<TouchableOpacity style={{marginTop:30,width:'100%', borderWidth:1,borderRadius:6, alignItems: "center", borderColor:"grey",backgroundColor:"rgba(0,0,255,0.3)", justifyContent:"center", height:40}} onPress={addUser}>
<Text>Kullanıcı ekle</Text>
  
</TouchableOpacity>
</View>
      {/* <Button title="Kullanıcı Ekle" onPress={addUser} /> */}
      {/* <Button title="darkmod" onPress={darkmode} /> */}


      <Text style={{marginTop:30,}}>Kullanıcılar:</Text> 
      {
        users.map((user, index) => (
          <View key={index}>
            <Text>{user.Name} - {user.Age} yaşında</Text>
          </View>
        ))

     }
    </ScrollView >
  );
}
