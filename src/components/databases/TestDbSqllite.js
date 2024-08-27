// import { View, Text, Button,TextInput,ScrollView} from 'react-native';
// import React, { useEffect, useState } from 'react';
// import * as SQLite from 'expo-sqlite';

// export default function TestDbSqllite() {
//   const [users, setUsers] = useState([]);
//     const [createUser,setCreateUser]=useState({name:"", age:""});
//   const Sqlitedb = async () => {
//     const db = await SQLite.openDatabaseAsync('SQLiteDb.db');

//     await db.execAsync(`
//       CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);
//     `);

//     const getUsers = await db.getAllAsync('SELECT * FROM users');
//     setUsers(getUsers);
//     console.log("Fetched users: ", getUsers);
//   };

//   const addUser = async () => {
//     Sqlitedb();
//     const db = await SQLite.openDatabaseAsync('SQLiteDb.db');
//     await db.runAsync('INSERT INTO users (Name, Age) VALUES (?, ?)', [createUser.name, createUser.age]);
//     setCreateUser("")

//     Sqlitedb();
//     console.log(createUser)
//   };

//   const deleteUser = async () => {
//     Sqlitedb();
//     const db = await SQLite.openDatabaseAsync('SQLiteDb.db');
//     await db.runAsync('DELETE FROM users');
//     Sqlitedb(); 
//   };

//   useEffect(() => {
//     Sqlitedb();
//   }, []);

//   return ( 
//     <ScrollView > 
//         <TextInput value={createUser.name} style={{width:'70%', padding:10, borderWidth:1}} placeholder="Kullanıcı Ekle" onChangeText={(text)=>{setCreateUser({...createUser,name:text})}}/>
//         <TextInput value={createUser.age} style={{width:'70%', padding:10, borderWidth:1}} placeholder="yaş ekle" onChangeText={(text)=>{setCreateUser({...createUser,age:text})}}/>

//       <Text>Kullanıcılar:</Text> 
//       {
//         users.map((user, index) => (
//           <View key={index} style={{ marginVertical: 5 }}>
//             <Text>{user.Name} - {user.Age} yaşında</Text>
//           </View>
//         ))

//      }
//             <Button title="Sil" onPress={() => deleteUser()} />

//       <Button title="Kullanıcı Ekle" onPress={addUser} />
//     </ScrollView >
//   );
// }
