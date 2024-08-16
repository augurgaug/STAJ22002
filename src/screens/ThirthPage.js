import React from 'react'
import { Button, Text, View} from 'react-native'

function ThirthPage({navigation}) {
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}} >
    <Text>Sayfa 3</Text>
    <Button title='4.sayfa' onPress={()=>{navigation.navigate("FourthPage")}}></Button>

    <Button title='2geri' onPress={()=>{navigation.pop(2)}}></Button>
    <Button title='geri' onPress={()=>{navigation.goBack()}}></Button>
    </View>
  )
}

export default ThirthPage
