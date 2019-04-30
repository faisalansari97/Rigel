import React,{Component} from 'react';
import {View,Image,Text, TextInput, KeyboardAvoidingView} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from "./BackgroundImage";
import ButtonComponent from 'react-native-button-component';


class ForgotPassword extends Component{
render(){
    const path = "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/cf/eb/c0/cfebc013-6db1-97b5-e28a-6899131cad65/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg";
    return(
<View>
<BackgroundImage>
    <View style={styles.viewStyle}> 
    <KeyboardAvoidingView enabled  behavior={"position"} keyboardVerticalOffset={60} >
    <View style={styles.imageStyle}>
        <Image style={{height:90,width:90}} source = {{uri:path}} />
    </View>
    <View style={{alignItems:"center",justifyContent:"center"}}>
    <Text style={{color:"white",fontWeight:'bold',fontSize:30,paddingTop:10,paddingBottom:10}}>Welcome to Food App</Text>
    </View>
   
    <View style={{alignItems:"center",justifyContent:"center",paddingBottom:10}}>
    <Text style={{color:"white"}}>Enter your Email-Id to reset your Password</Text>
    </View>
    <View style={{backgroundColor:"white",borderBottomWidth:1,height:'15%'}}>
        <TextInput placeholder="Email"></TextInput>
    </View>
    <View style={{paddingTop:20, alignItems:'center'}}>  
       <ButtonComponent height={40} width={300} backgroundColors={['red', 'orange']} text='Done'/>
    </View>
    </KeyboardAvoidingView>
    </View>
</BackgroundImage>
    
</View>
    )
};
}
const styles = {
    viewStyle:{
        paddingTop:'10%',
        backgroundColor:'rgba(192,192,192,0.6)',
        height:'100%'
    },
    containerStyle:{
        height:'28%',
        width:'100%',
        opacity:1,
        borderRadius:15,
        backgroundColor: 'orange',
        justifyContent:'center'
        },
        fontStyle:{
            fontSize: 20,
            color: 'black'
        }, 
        imageStyle:{
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'row',
            paddingBottom:20
        }
}


export default ForgotPassword;