import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 16,
      backgroundColor: '#fff',
      justifyContent:"space-between"
    },
  
    header: {
      flexDirection: 'row',
      backgroundColor: '#f1f8ff',
      paddingHorizontal: 10, 
    },
    headerText: {
      flex: 3,
      fontWeight: 'bold',
      padding:5,
      paddingVertical:10,
      fontSize:18,

    },
    row: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    column: {
      flex: 3,
      paddingLeft:5,
      borderLeftWidth:1,
      paddingVertical:18,
      fontSize:18
    },
  
    listButton:{alignItems:"center",borderRadius:8,flex:3,backgroundColor:"grey", paddingVertical:5},

    paginationView:{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',backgroundColor:"rgba(143,143,143,0.1)"},
    pageNumber:{padding:8, borderBottomWidth:0.2, borderColor:"grey",marginHorizontal:5, borderRadius:4 }
  });
  