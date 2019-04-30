import React,{Component} from 'react';
import {View,Image} from 'react-native'
import {CardSection} from "./Common"
import BackgroundImage from "./BackgroundImage"
import Button from  'react-native-button'
import ButtonComponent from 'react-native-button-component'
import {Actions} from 'react-native-router-flux'

class LoginRegister extends Component{
    render()
    {
const path = "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/cf/eb/c0/cfebc013-6db1-97b5-e28a-6899131cad65/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg";   
        return(
            <View>
            <BackgroundImage>
            <View style={styles.viewStyle}>
            <View style={styles.imageStyle}>
                <Image style={{height:90,width:90}} source = {{uri:path}} />
                </View>
             <View style={{padding:7}}> 
             <View style={{paddingTop:20, alignItems:'center'}}>  
                <ButtonComponent height={40} width={300} backgroundColors={['red', 'orange']} text='Login' onPress={()=> Actions.Login()}/>
            </View>
             </View> 
            <View style={{padding:7}}>
            <View style={{alignItems:'center'}}>  
                 <ButtonComponent height={40} width={300} backgroundColors={['red', 'orange']} text='Register' onPress={()=>Actions.Register()}/>
            </View>
            </View>
            </View>
            </BackgroundImage>
            </View>
        )
        
    };
}

const styles = {
    viewStyle:{backgroundColor:'rgba(192,192,192,0.9)',paddingTop: '60%',height:'100%'},
    containerStyle:{
        padding:10,
        height:45,
        width:'100%',
        opacity:1,
        zIndex: 1,
        borderRadius:10, 
        backgroundColor: 'orange',
        },
        fontStyle:{
            fontSize: 20,
            color: 'black',
            fontWeight:'500'
        
        },
        
       
        imageStyle:{
            justifyContent:"center",
            alignItems:"center",
           // flexDirection:'row',
            paddingBottom:20
        }
    
    
};

export default LoginRegister;