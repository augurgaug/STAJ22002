import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    lgnContainer:{
        backgroundColor:"#454545",
        alignItems:'center',
    },
    logContainer:{ 
        height:"auto",
        minHeight:400,

        width:'100%',
        alignItems:'center',
        backgroundColor:"#F0F0F0",
    }, 
    
    
    rgstrContainer:{ 
        minHeight:450,

        width:'100%',
        marginTop:0,
         backgroundColor:"#F54336",
          justifyContent:"center",
          alignItems:"center",
        padding:45
    },

    lgnHeaderText:{fontSize:40,
        textAlign: "center",
         paddingTop:75,
        color:"black",
        fontWeight:"bold",
         width:' 100%',
         marginBottom:10,
 
     },


     rgstrHeaderText:{fontSize:40,
        textAlign: "center",
        color:"white",
        fontWeight:"bold",
         width:' 100%',
         marginBottom:20,
 
     },

rgstrText:{ color:"white",
    textAlign:"center",
    fontSize:18
},


 
     lgnViewInput:{ width:'100%',
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
     },



    lgnTextInput:{
        backgroundColor:"#D7D7D7",
        width:' 80%',
        margin:10,
        borderWidth:1,
        borderColor:"white",
        borderRadius:4,
        paddingHorizontal:10,
        paddingVertical:10,
        fontSize:20
        
    },

    

    
    lgnTextLabel:{textAlign:"center",
        justifyContent:"center",
        margin:10,
        width:55,
        fontSize:17
    },



    lgnButton:{
        margin:30,
backgroundColor:"#D83B2F",
borderWidth:1,
borderColor:"white",
borderRadius:24,
padding:10,
alignItems:"center",
color:"white",
width:150,
textAlign:"center"
    },

    rgstrButton:{
        margin:30,
backgroundColor:"#F54336",
borderWidth:1,
borderColor:"white",
borderRadius:24,
padding:10,
alignItems:"center",
color:"white",
width:150,
textAlign:"center"


    }
})