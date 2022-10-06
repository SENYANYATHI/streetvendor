
import React from 'react';
import{ StyleSheet,
		Text,
		View,
		FlatList,
        TextInput,Image
	} from 'react-native';
import { AddCircle, Visibility } from '@mui/icons-material';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import { height, width } from '@mui/system';


const DATA = [
{
	id:"1",
	title:"Apples",
	title:"Spinach",
    remaining:"30  reamaining",
    profit:"R60 profit"
	


},
{
	id:"2",
	title:"Go slow",
	title:"Spinach",
    remaining:"10  reamaining",
    profit:"R10 profit"
},
{
	id:"3",
	title:"Bananas",
	title:"Spinach",
    remaining:"40  reamaining",
    profit:"R50 profit"
},
{
	id:"4",
	title:"Spinach",
    remaining:"0  reamaining",
    profit:"R150 profit",

},



];

const Item = ({title}) => {
return(
	<View style={styles.item}  >
		<View>

		</View>
		<View style={styles.eye}>
			<Image source={{uri:'https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg?auto=compress&cs=tinysrgb&w=300'}}/>
		<Visibility/>
		</View>

	<Text>{title}</Text>
   
    

	</View>
);
}


export default function App() {
	

const renderItem = ({item})=>(
<Item title={item.title}/>


);
return (
<View style={styles.container}>
    <View>
        <TextInput style={styles.input} placeholder="STATS" />
		{/* <Text  style = {{ marginLeft : 150, color : 'black' }}>see all</Text> */}

    </View>
	<View style={styles.total}>
		<Text>TOTAL INCOME</Text>
		<Text>R1400</Text>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5116/5116338.png'}} style={{width:30, height:30}}
/>
		<Text>30% Increase From Last Month</Text>
	</View>
	<View style={styles.stock}>
		<Text>STOCK</Text>
		<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/7125/7125797.png'}} style={{width:30, height:30}}
/>
		<Text>R3</Text>
		<Text>Need More Stock</Text>
	</View>
<SearchBar
    placeholder="Type Here..."
    lightTheme
    round
    autoCorrect={false} 

   
/>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	
	/>
    <View style={styles.add}>
   <AddCircle />
   </View>
 
</View>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor:'#fff',
	marginTop:30,
	padding:2,
	maxHeight:'840',
	maxWidth:1000,
	borderRadius:10
},
item: {
	backgroundColor: '#98EDC3',
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
    borderRadius:10
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  add:{
	marginLeft:250,
	color:'#98EDC3',

  },
  eye:{
	color:'black',

  },
  total:{
	backgroundColor:"green"
  },
  stock:{
	backgroundColor:'#fff',
  }
  
 
});
// import React from 'react';
// import { View,Text,FlatList,Button,SafeAreaView } from 'react-native';
// import { AddCircle } from '@mui/icons-material';

// export default function Home (){
//     return (
//         <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
// <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
//     <Text>Apples</Text>
    
//     <br></br>
//     <Text>Banana</Text>

//     <br></br>
//     <Text>Spinach</Text>
//     <br></br>
//     <Text>Go Slow</Text>
    

// </View>
//         </View>
//     )
// }

 
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     cont1 :{
       
//         backgroundColor:'#DFF1F3',
//         alignItems:'center',
//         borderRadius:10,
//     },
//     cont2:{
//         backgroundColor:'#DFF1F3',
//         alignItems:'center',
//         borderRadius:10,

//     },
//     cont3:{
//         backgroundColor:'#DFF1F3',
//         alignItems:'center',
//         borderRadius:10,
//         paddingLeft:20

//     },
//     cont4:{
//       backgroundColor:'#DFF1F3',
//         alignItems:'center',
//         borderRadius:10,
//     },
//     add:{
//       padding:'right',
//     }
//   });