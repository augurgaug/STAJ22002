import React from 'react'
import FourthPage from '../../screens/FourthPage'
import ThirthPage from '../../screens/ThirthPage'
import SecondPage from '../../screens/SecondPage'
import HomePage from '../../screens/HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login'
import UserList from '../../screens/UserList'
import CariList from '../../screens/CariList'
import FinanceList from '../../screens/FinanceList'

export default function StackNavigate() {
  const Stack=createNativeStackNavigator();

  return (
    <Stack.Navigator>


    <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}></Stack.Screen>
    
    <Stack.Screen name='HomePage' component={HomePage} 
      
       options={{title:"Ana Menü",headerTitleStyle:{ fontSize:25, fontWeight:"bold"},headerBackVisible:false}}
      ></Stack.Screen>
      <Stack.Screen name='SecondPage' component={SecondPage} options={{ headerTitleStyle:{color:"white", fontSize:30},
           headerTintColor:"red",
          //  headerShown: false,


          headerStyle:{
                    backgroundColor:"rgba(0,999,0,1)",
                    
       
      },}}></Stack.Screen>
      <Stack.Screen name='ThirthPage' component={ThirthPage}></Stack.Screen>
      <Stack.Screen name='UserList' component={UserList}></Stack.Screen>
      <Stack.Screen name='CariList' component={CariList}></Stack.Screen>
      <Stack.Screen name='FinanceList' component={FinanceList}></Stack.Screen>
      
      <Stack.Screen name='FourthPage' component={FourthPage}></Stack.Screen>
    </Stack.Navigator>
  )
}