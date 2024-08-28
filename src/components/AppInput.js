import { View, Text, TextInput } from 'react-native';
const AppInput = ({onChange,label,value}) => {
  return (
    <View style={{width:"100%", flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:10,}}>
    <Text style={{color:"grey",fontSize:18,fontWeight:"bold",width:'30%',textAlign:"center",  paddingHorizontal:10}}>{label}:   </Text>
  <TextInput onChange={onChange}  style={{backgroundColor:"white",width:'60%',padding:10,borderWidth:1,borderColor:"grey", borderRadius:6}} value={value}></TextInput>
</View>
  )
}

export default AppInput