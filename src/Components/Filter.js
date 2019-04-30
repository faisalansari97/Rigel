import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import CardView from "react-native-cardview"

class Filter extends Component{
    render(){
        return(
            <View style={{display:"flex"}}>
            <View style={styles.colorStyle}/>
            <View style={{marginTop:-70,padding:15}}>
            <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
            <View  style={styles.container}>
                <FlatList data={[
                 {key: 'Devin'},
                 {key: 'Jackson'},
                 {key: 'James'},
                 {key: 'Joel'},
                 {key: 'John'},
                 {key: 'Jillian'},
                 {key: 'Jimmy'},
                 {key: 'Julie'}]}  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
            </View>
            </CardView>
            </View>
            </View>
        )
    };
}
const styles = {
    colorStyle:{
        backgroundColor:"#FF7518",
        width:"100%",
        height:100
    },
    cardViewStyle:{
        width:'100%',
        height: 450
      },
    container: {
     flex: 1,
    // paddingTop: 22
    },
    item: {
    borderBottomWidth:1,
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  } 
  
export default Filter;