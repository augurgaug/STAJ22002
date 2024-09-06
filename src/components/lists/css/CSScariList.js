import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 16,
      backgroundColor: 'rgb(242,242,242)',
      justifyContent:"space-between"
    },


    Filter:{backgroundColor:"white",
      marginVertical:5,
      marginHorizontal:10,
      flexDirection: 'column',
      marginTop:10,
      padding:10

    },

    filterItem: {
      flexDirection:"row",
      alignItems:"center",
      marginVertical:3

      
    },


    filterLabel:{
      flex:1,
      fontWeight:"bold"
    },
  
  filterInput:{width:"50%",borderWidth:1,flex:2, paddingLeft:5,borderRadius:4,borderColor:"grey"},
    card: {
      flexDirection: 'column',
      paddingHorizontal: 10,
      marginVertical:5,
      marginHorizontal:10,
      borderRadius:12,
      elevation:8,
      padding:5
     
    },



filterButton:{backgroundColor:"#008080", alignItems:"center", padding:10, borderRadius:6,marginTop:10, width:100},




    item: {
      flexDirection:"row",
      
    },
  
    listButton:{alignItems:"center",borderRadius:8,flex:3,backgroundColor:"grey", paddingVertical:5},

    paginationView:{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',backgroundColor:"rgba(143,143,143,0.1)"},
    pageNumber:{padding:8, borderBottomWidth:0.2, borderColor:"grey",marginHorizontal:5, borderRadius:4 }
  });
  