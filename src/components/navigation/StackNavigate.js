import React from 'react'
import FourthPage from '../../screens/FourthPage'
import ThirthPage from '../../screens/ThirthPage'
import SecondPage from '../../screens/SecondPage'
import HomePage from '../../screens/HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login'

export default function StackNavigate() {
  const Stack=createNativeStackNavigator();

  return (
    <Stack.Navigator>


    <Stack.Screen name='Login' component={Login}></Stack.Screen>
    
    <Stack.Screen name='HomePage' component={HomePage} 
      
       options={{title:"Anasayfa",
           headerTitleStyle:{color:"white", fontSize:30},
           headerTintColor:"red",


          headerStyle:{
                    backgroundColor:"rgba(0,999,0,1)",
       
      },



    }}
      ></Stack.Screen>
      <Stack.Screen name='SecondPage' component={SecondPage}></Stack.Screen>
      <Stack.Screen name='ThirthPage' component={ThirthPage}></Stack.Screen>
      <Stack.Screen name='FourthPage' component={FourthPage}></Stack.Screen>
    </Stack.Navigator>
  )
}