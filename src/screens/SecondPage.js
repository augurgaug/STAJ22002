import React from 'react'
import { Button, Text,View,ImageBackground } from 'react-native'

function SecondPage({navigation}) {
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        <ImageBackground 
style={{flex:1, justifyContent:'center', alignItems:'center', width:'100%'}}
source={{ uri: 'data:image/jpeg;base64,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' }} 

      resizeMode="cover"

>
    <Text>Sayfa 2</Text>
    <Button title='3.sayfa' onPress={()=>{navigation.navigate('ThirthPage')}}></Button>
    <Button title='geri' onPress={()=>{navigation.goBack()}}></Button>
<Button   title='tekrarla sayfayı' onPress={()=>{navigation.push("SecondPage")}}></Button>

    

</ImageBackground>
    </View>
  )
}

export default SecondPage
