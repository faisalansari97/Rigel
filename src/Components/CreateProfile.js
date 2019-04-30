import React,{Component} from 'react';
import {View,Image} from "react-native";
import {CardSection,Input} from '../Components/Common';
import Button from 'react-native-button';
import BackgroundImage from "./BackgroundImage"

class CreateProfile extends Component{
    render(){
        const path = "https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"; 
        return(
            <View>
            <BackgroundImage>
            <View style={styles.viewStyle}>
            <CardSection style={{alignItems:"center",justifyContent:"center",paddingBottom:'15%'}}>
                <Image style={{height:90,width:90}} source = {{uri:path}} />
            </CardSection>
            <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                <Input placeholder="First Name"></Input>
            </CardSection>
           <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                <Input placeholder="Last Name"></Input>
            </CardSection>
            <CardSection style={{paddingLeft:20,paddingRight:20,paddingTop:10}}>  
                <Button style={styles.fontStyle} containerStyle = {styles.containerStyle}>Done</Button>
            </CardSection>
            </View>
            </BackgroundImage>
            </View>
        )
    };
}

const styles = {
    
    viewStyle:{
        //backgroundColor: 'transparent',
        backgroundColor:"rgba(192,192,192,0.8)",
        paddingTop:'30%',
        height:"100%"
    },
    containerStyle:{
        padding:10,
        height:45,
        width:'100%',
        opacity:1,
        borderRadius:15,
        paddingLeft:50,
        paddingRight:30, 
        backgroundColor: 'orange',
        },
        fontStyle:{
            fontSize: 20,
            color: 'black'
        }
    
}

export default CreateProfile;