import { View, Text, TextInput, StyleSheet } from 'react-native';
import {styles} from '../css/appInputCss'
const AppInput = ({onChange,label,value}) => {
  return (
    <View style={styles.InputView}>
    <Text style={styles.InputLabel}>{label}:</Text>
  <TextInput onChange={onChange}  style={styles.InputInput} value={value}></TextInput>
</View>
  )
}

export default AppInput