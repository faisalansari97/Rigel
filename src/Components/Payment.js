import React,{Component} from 'react';
import {View, Text, TextInput} from "react-native";
import { RectangleButton } from 'react-native-button-component';
import BackgroundImage from "./BackgroundImage";

class Payment extends Component{
render(){
return(
<BackgroundImage>
    <View style={styles.viewStyle}>
        <View style={{}}>
            <TextInput placeholder="Card Holder's Name" style={{borderBottomColor:'black', borderBottomWidth:1, borderRadius:10,padding:10}}/>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold', paddingTop:10,paddingLeft:5}}>Validity</Text>
        <View style={{flexDirection:"row", paddingTop:5}}>
            <TextInput placeholder='MM/' style={{flex:2, borderBottomColor:'black', borderBottomWidth:1, borderRadius:10,padding:10}}/>
            <TextInput placeholder='CVV' style={{flex:2, borderBottomColor:"black", borderBottomWidth:1, borderRadius:10,padding:10}}/>
        </View>
        <View style={{paddingTop:5,paddingBottom:15}}>
            <TextInput placeholder='Card Number' style={{borderBottomColor:'black', borderBottomWidth:1, borderRadius:10,padding:10}}/>
        </View>
        <View style={{paddingTop:10}}>
            <RectangleButton text="Done" height={40} width={300} backgroundColors={['red','orange']} style={styles.buttonStyle}/>
        </View>
    </View>

</BackgroundImage>
)
};
}
const styles={
buttonStyle:{ 
borderRadius:5,
alignSelf:'center'
},
viewStyle:{
backgroundColor:'rgba(255,255,255,0.7)',
height:'100%',
flex:1,
padding:'3%'
},
}
export default Payment;