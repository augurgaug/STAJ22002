import React from 'react'
import { Button, Text, View } from 'react-native'

function FourthPage({navigation}) {
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}} >
    <Text>sayfa 4</Text>
    <Button title='secondpage' onPress={()=>{navigation.navigate("SecondPage")}}></Button>
    <Button title='ilk sayfa' onPress={()=>{navigation.popToTop()}}></Button>

    <Button title='2geri' onPress={()=>{navigation.pop(2)}}></Button>
    <Button title='geri' onPress={()=>{navigation.goBack()}}></Button>
    </View>
  )
}

export default FourthPage
