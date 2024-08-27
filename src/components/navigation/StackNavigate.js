import React, { useState } from 'react'
import FourthPage from '../../screens/FourthPage'
import ThirthPage from '../../screens/ThirthPage'
import SecondPage from '../../screens/SecondPage'
import HomePage from '../../screens/HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login'
import UserList from '../../screens/UserList'
import CariList from '../../screens/CariList'
import FinanceList from '../../screens/FinanceList'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Content from './DrawNavigateContent'
import Register from '../../screens/Register'
import UserTable from '../databases/SQLite/UserTable'
import TestAsyncStorageDb from '../databases/TestAsyncStorageDb'



const DrawNavigate=() =>{
  
Content()
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator   screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },
    }}
    drawerContent={(props)=><Content {...props}/>}>



    <Drawer.Screen name="HomePage" component={HomePage}  options={{headerBackgroundContainerStyle:{},drawerInactiveBackgroundColor:"rgba(150,50,255,0.3)" , drawerActiveBackgroundColor:"rgba(42,195,200,0.3)",drawerActiveTintColor:"red",title:"Ana Menü",headerTitleStyle:{ fontSize:25, fontWeight:"bold"},headerBackVisible:false}}/>
    <Drawer.Screen name="SecondPage" component={SecondPage} options={{ drawerInactiveBackgroundColor:"rgba(150,50,255,0.3)" , drawerActiveBackgroundColor:"rgba(255,255,204,1)",drawerActiveTintColor:"blue"}}/>
    <Drawer.Screen name="SQLite" component={UserTable} options={{ drawerInactiveBackgroundColor:"rgba(150,50,255,0.3)" , drawerActiveBackgroundColor:"rgba(255,255,204,1)",drawerActiveTintColor:"blue"}}/>
    <Drawer.Screen name="AsyncStorage" component={TestAsyncStorageDb} options={{ drawerInactiveBackgroundColor:"rgba(150,50,255,0.3)" , drawerActiveBackgroundColor:"rgba(255,255,204,1)",drawerActiveTintColor:"blue"}}/>
  </Drawer.Navigator>  
  )
}
export default function StackNavigate() {
  const Stack=createNativeStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName='Login'>


    <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name='Register' component={Register}  options={{headerShown: false}}></Stack.Screen>
    
    <Stack.Screen name='DrawNavigate' component={DrawNavigate} options={{headerShown: false}}
      
      
      ></Stack.Screen>
      <Stack.Screen name='SecondPage' component={SecondPage} options={{ headerTitleStyle:{color:"white", fontSize:30},
           headerTintColor:"red",
            headerStyle:{
                 backgroundColor:"rgba(0,999,0,1)",},}}></Stack.Screen>
                 
      <Stack.Screen name='ThirthPage' component={ThirthPage}></Stack.Screen>
      <Stack.Screen name='UserList' component={UserList}></Stack.Screen>
      <Stack.Screen name='CariList' component={CariList}></Stack.Screen>
      <Stack.Screen name='FinanceList' component={FinanceList}></Stack.Screen>
      
      <Stack.Screen name='FourthPage' component={FourthPage}></Stack.Screen>
    </Stack.Navigator>
  )
}