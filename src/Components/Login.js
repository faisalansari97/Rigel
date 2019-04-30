import React,{Component} from 'react';
import {View,Text,Image,TextInput, KeyboardAvoidingView,Platform} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from "./BackgroundImage"
import { Actions } from 'react-native-router-flux';
import ButtonComponent from 'react-native-button-component'

class Login extends Component{
    render(){
        const path = "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/cf/eb/c0/cfebc013-6db1-97b5-e28a-6899131cad65/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg"; 
        return(
    <View>
    <BackgroundImage>
    <View style={styles.viewStyle}>
    <KeyboardAvoidingView enabled  behavior={"position"} keyboardVerticalOffset={40} >
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={styles.welcomeStyle}>Welcome</Text>
    </View>
    <View style={styles.imageStyle}>
        <Image style={{height:90,width:90}} source = {{uri:path}} />
    </View>
    <View style={{backgroundColor:"white",borderBottomWidth:1,height:'13%'}}>
        <TextInput placeholder="Email"></TextInput>
    </View>
    <View style={{backgroundColor:"white",height:'13%'}}>
        <TextInput placeholder="Password"></TextInput>
    </View> 
    <View style={{alignItems:"center",justifyContent:"center",paddingTop:10,paddingBottom:10}}> 
    <Text style={{color:"white",fontWeight:'bold'}} onPress={()=>Actions.ForgotPassword()}>Forgot Password?</Text>
    </View>
    <View style={{alignItems:'center',paddingTop:15}}>   
        <ButtonComponent height={38} width={300} backgroundColors={['red', 'orange']} text='Login' onPress={()=>Actions.BottomTabNavigator()}/>
    </View>
    </KeyboardAvoidingView>
    </View>
    </BackgroundImage>
    </View>)
    };
}


const styles = {
    welcomeStyle:{
        color:"white",
        fontWeight:'bold',
        fontSize:30,
        paddingTop:10,
        paddingBottom:20
    },
    
    viewStyle:{
        paddingTop:'10%',
        backgroundColor:'rgba(192,192,192,0.9)',
        height:"100%"
    },
    containerStyle:{

            flex:1,
            alignSelf:"center"

        },
        imageStyle:{
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'row',
            paddingBottom:20
        }
    
}
export default Login;