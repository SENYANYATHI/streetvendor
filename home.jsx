import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native'
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-web";



export default function Home () {

    return (
        <View style={styles.container}>
            <View>
            <Text>STATS</Text>
            <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
        
        
        />
        <br></br>
           
           <View style={styles.cont1}>
           <Image source = {{uri:'https://www.bing.com/th?id=OIP.-XZFdS0aBXOg7Y2KTKP8rgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'}}
   style = {{ width: 150, height: 150 , borderRadius:10}}
   />

            <Text>Apples</Text>
            <br></br>
            <Text>30 REAMAING</Text>
            <br></br>
            <br></br>
            <Text>R60 Profit</Text>

           </View>

           <br></br>
           <View style={styles.cont2}>
            <image source='' />
            <Text>Go Slow</Text>
            <br></br>
            <Text>10 REAMAING</Text>
            <br></br>
            <br></br>
            <Text>R10 Profit</Text>

           </View>
           <br></br>
           <View style={styles.cont3}>
            <image source='' />
            <Text>Spinach</Text>
            <br></br>
            <Text>40 REAMAING</Text>
            <br></br>
            <br></br>
            <Text>R50 Profit</Text>

           </View>


            </View>
            
   
 
        
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
    cont1 :{
       
        backgroundColor:'#DFF1F3',
        alignItems:'center',
        borderRadius:10,
    },
    cont2:{
        backgroundColor:'#DFF1F3',
        alignItems:'center',
        borderRadius:10,

    },
    cont3:{
        backgroundColor:'#DFF1F3',
        alignItems:'center',
        borderRadius:10,

    }
  });