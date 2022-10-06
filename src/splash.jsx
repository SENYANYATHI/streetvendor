import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image} from 'react-native';






export default function Splash () {
    return (
     
        <View style={styles.container}>
              
               <Image
       
          source={{uri: 'https://images.pexels.com/photos/8725256/pexels-photo-8725256.jpeg?auto=compress&cs=tinysrgb&w=300'}}
          
              style = {{ width: 400, height: 500, bottom:177}}
          />
          
          <Text style={styles.Text}>The Sales Management App for Street Vendors</Text>
        
       


      <br></br>
   <Button color='#96DED1'  title='login'/>
   <br></br>
   <Text style={styles.text} title="Not Registered">register here</Text>
 
   
      <StatusBar style="auto" />
  
    </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#070627',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor:'#070627',
  
     

    },
    Text: {
  
        width:332,
        height:46,
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        textAlign:'center',
        fontSize:24, 
        color:'#fff' 
    },
    text:{
            width:332,
        height:46,
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        textAlign:'center',
        fontSize:24, 
        color:'#96DED1'

    },
   
    btn:{
          width:185,
        height:186,
        borderRadius:100,
        paddingBottom:10, 
        backgroundColor:'red'

    },
  
   

  });