import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';

import { Image } from "react-native";




export default function Profile () {
    return (
     
        <View style={styles.container}>
               <View style={styles.text}> 
               <Text>View Profile</Text> 
               </View>
               <Image
          style={styles.image}
          source={{uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}/>

           <br></br>
            <View style={styles.Text}>
                 <Text> MILDRED MEYAHABO MACHETE</Text>

                 </View>
            
      <br></br>
   <Button style={styles.btn}  title='update'/>
   <br></br>
   <Button style={styles.button}  title='deactivate'/>
   <br></br>
   <Button style={styles.button}  title='signout'/>


      <StatusBar style="auto" />
  
    </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    },
    image:{
        width:185,
        height:186,
        borderRadius:100,
        paddingBottom:10, 
        backgroundColor:'red'
    },
    btn:{
          width:185,
        height:186,
        borderRadius:100,
        paddingBottom:10, 
        backgroundColor:'red'

    },
    text:{
        backgroundColor:'#96DED1',
        width:431,
        height:78,
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        textAlign:'center',
        fontSize:24,  
        marginBottom:253 ,
        
    }
   

  });
  


