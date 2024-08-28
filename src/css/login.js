import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    lgnContainer:{
        flex:1,
        backgroundColor:"#454545",
        alignItems:'center',
    },
    lgnContainer2:{ 
        height:"auto",
        flex:0.95,
        minHeight:400,

        borderRadius:16,
        marginTop:'10%',
        width:'90%',
        alignItems:'center',
        backgroundColor:"#C9C9C9",
    },

    lgnTextInput:{
        backgroundColor:"#999888",
        width:' 60%',
        margin:10,
        borderWidth:1,
        borderColor:"white",
        borderRadius:4,
        padding:5,
        
    },

    
    lgnText:{fontSize:50,
       textAlign: "center",
        padding:50,
        color:901,
        backgroundColor:"#999999",
        width:' 100%',
        marginBottom:50,
borderTopLeftRadius:16,
borderTopRightRadius:16
    },

    lgnView1:{ width:'100%',
        flexDirection:"row"
    },
    
    lgnText1:{textAlign:"center",
        justifyContent:"center",
        margin:10,
        marginTop:20,
        width:55,
        fontSize:17
    },

    lgnButton:{
        margin:30,
backgroundColor:"grey",
borderWidth:1,
borderColor:"white",
borderRadius:12,
padding:10,
alignItems:"center",
color:"white"


    }
})