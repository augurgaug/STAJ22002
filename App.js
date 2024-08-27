import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigate from './src/components/navigation/StackNavigate';
import TestDbSqllite from './src/components/databases/TestDbSqllite';
import { View } from 'react-native';
import UserTable from './src/components/databases/SQLite/UserTable';
import TestAsyncStorageDb from './src/components/databases/TestAsyncStorageDb';
export default function App() {
  return (
//     <View  style={{ flex:1, }}>

// <UserTable  />
// <TestAsyncStorageDb  />

//     </View>

<NavigationContainer>
{StackNavigate()}

   </NavigationContainer>
  );
} 
          